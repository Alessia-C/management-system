import React from "react";
import AuthPageContent from "../../components/AuthPage/AuthPageContent";
import ReusableForm from "../../components/ReusableForm";
import { useNavigate } from "react-router-dom";

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
      // Esegui la richiesta al tuo server Express per effettuare il login
      const response = await fetch("http://localhost:4000/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: values.email,
          password: values.password,
        }),
      });
  
      if (!response.ok) {
        throw new Error("Credenziali non valide");
      }
  
      // Se il login ha successo, ottieni il token JWT dalla risposta
      const data = await response.json();
      const token = data.token;
  
      // Salva il token JWT nel localStorage
      localStorage.setItem("token", token);
  
      // Imposta la scadenza del token (ad esempio 1 ora)
      const expiration = new Date();
      expiration.setHours(expiration.getHours() + 1);
      localStorage.setItem("expiration", expiration.toISOString());
  
      // Naviga alla homepage o alla pagina protetta
      navigate("/");
  
    } catch (error) {
      console.error("Errore durante il login:", error);
      // Gestisci l'errore in modo appropriato (ad esempio, mostra un messaggio di errore)
    }
  };
  

  return (
    <AuthPageContent intro={introAuthForm}>
      <ReusableForm
        fields={fields}
        login={true}
        labelCta="Accedi"
        onSubmit={handleSubmit}
        style="authForm"
      />
    </AuthPageContent>
  );
};

export default Login;
