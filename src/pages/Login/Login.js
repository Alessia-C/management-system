import React from "react";
import AuthPageContent from "../../components/AuthPage/AuthPageContent";
import ReusableForm from "../../components/ReusableForm";
import { useNavigate } from "react-router-dom";
import supabase from "../../backend/supabase";

const introAuthForm = {
  title: "login",
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
    label: "Inserisci la password",
    name: "password",
    type: "password",
    value: "password",
    login: true,
    required: true,
  },
];

const Login = () => {
  const navigate = useNavigate();

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
      const token = data.session.access_token;
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
    <AuthPageContent intro={introAuthForm}>
      <ReusableForm
        fields={fields}
        labelCta="Accedi"
        onSubmit={handleSubmit}
        style="authForm"
      />
    </AuthPageContent>
  );
};

export default Login;
