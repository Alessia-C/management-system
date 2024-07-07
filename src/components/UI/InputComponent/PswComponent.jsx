import React, { useState } from "react";
import { Box, IconButton, InputAdornment, TextField } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Link } from "react-router-dom";

const PswComponent = ({ formik, element,  }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box>
      <TextField
        name={element.name}
        label={element.label}
        type={!showPassword ? element.type : "text"}
        value={formik.values[element.name] || ''}
        onChange={formik.handleChange}
        color={
          formik.touched[element] || formik.errors[element]
            ? "error"
            : "primary"
        }
        required={element.required ? element.required : false}
        helperText={formik.touched[element] ? formik.errors[element] : ""}
        autoComplete={element.value}
        fullWidth
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
        {...formik.getFieldProps(element.value)}
      />
      {element.login && <Link to="/resetpassword">Password dimenticata?</Link>}
    </Box>
  );
};

export default PswComponent;
