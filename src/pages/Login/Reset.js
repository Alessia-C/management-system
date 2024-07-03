import React, { useState } from "react";
import AuthPageContent from "../../components/AuthPage/AuthPageContent";
import ReusableForm from "../../components/ReusableForm";
import { useLocation } from "react-router-dom";
import { Typography } from "@mui/material";
import supabase from "../../backend/supabase";

const introAuthForm = {
  title: "Recupera Password",
  text: "Inserisci le tue credenziali per accedere al tuo profilo e usufruire di tutti i nostri servizi.",
};

const fields = [
  {
    label: "Inserisci l'email",
    name: "email",
    type: "email",
    value: "email",
    required: true,
  },
  {
    label: "Nuova Password",
    name: "password",
    type: "password",
    value: "password",
    required: true,
  },
  {
    label: "Conferma Password",
    name: "confirmpassword",
    type: "password",
    value: "confirmpassword",
    required: true,
  },
];

const Reset = (values) => {
  const [message, setMessage] = useState("");
  // const location = useLocation();
  // const token = new URLSearchParams(location.search).get("access_token");

  const handleSubmit = async () => {
    const { data, error } = await supabase.auth.updateUser({
      email: values.email,
      password: values.password,
    });

    console.log(data);
    if (error) {
      setMessage("Error resetting password: " + error.message);
    } else {
      setMessage("Password reset successfully");
    }
  };
  // async function sendPasswordResetEmail(email) {
  //   const { error } = await supabase.auth.api.resetPasswordForEmail(email, {
  //     redirectTo: "http://your-app.com/reset-password",
  //   });

  //   if (error) {
  //     console.error("Error sending password reset email:", error.message);
  //   } else {
  //     console.log("Password reset email sent successfully");
  //   }
  // }

  // // Esempio di utilizzo
  // sendPasswordResetEmail("user@example.com");

  // const handleSubmit = (values) => {
  //   console.log(values);
  // };

  // TODO: bug, it doesn't change password
  return (
    <AuthPageContent intro={introAuthForm}>
      <ReusableForm fields={fields} onSubmit={handleSubmit} style="authForm" />
      {message && <Typography>{message}</Typography>}
    </AuthPageContent>
  );
};

export default Reset;
