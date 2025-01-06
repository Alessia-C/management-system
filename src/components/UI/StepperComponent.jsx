import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import ReusableForm from "../ReusableForm";
import Card from "./Card/Card";

export default function StepperComponent({ steps, onSubmit, length = 2 }) {
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});

  const totalSteps = () => {
    return steps.length;
  };

  const handleNext = () => {
    setActiveStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  console.log();
  return (
    <Card sx={{ width: "100%" }}>
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((step, index) => (
          <Step key={step.label} completed={completed[index]}>
            <StepButton color="inherit" onClick={handleStep(index)}>
              {step.label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <Box sx={{ marginTop: "4em" }}>
        <ReusableForm
          fields={steps[activeStep].fields}
          stepsForm
          checkBtn={activeStep === length}
          handleNext={handleNext}
          handleBack={activeStep !== 0 ? handleBack : null}
          onSubmit={onSubmit}
        />
      </Box>
    </Card>
  );
}
