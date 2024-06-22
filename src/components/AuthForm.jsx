import React from "react";
import * as Yup from "yup";
import FormComponent from "./FormComponent/FormComponent";
import supabase from "../backend/supabase";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import classes from '../pages/Login/Login.module.css'

const validation = {
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string().required("Required"),
};

const AuthForm = () => {
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

  const formElement = [
    {
      label: "Inserisci l'email",
      type: "text",
      value: "email",
      required: true,
    },
    {
      label: "Inserisci la password",
      type: "password",
      value: "password",
      required: true,
    },
  ];

  const handleSubmit = async (values) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: values.email,
        password: values.password,
      });
      if (error) {
        throw error;
      }

      console.log("Dati ottenuti:", data);
      const token = data.access_token;
      localStorage.setItem("token", token);
      const expiration = new Date();
      expiration.setHours(expiration.getHours() + 1);
      localStorage.setItem("expiration", expiration.toISOString());

      return navigate("/");
    } catch (error) {
      console.error("Errore durante il login:", error);
    }
  };

  return (
    <>
      <Box className={classes.authIntro}>
        <Typography variant="h3">Login</Typography>
        <Typography variant="body1">
          Inserisci le tue credenziali per accedere al tuo profilo e usufruire
          di tutti i nostri servizi.
        </Typography>
      </Box>
      <FormComponent
        initialValues={initialValues}
        validation={validation}
        elements={formElement}
        handleSubmit={handleSubmit}
        labelCta="Accedi"
        style={`authForm`}
      />
    </>
  );
};

export default AuthForm;
