import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useEffect, useState } from "react";

const DateComponent = ({ formik, element }) => {
  const [cleared, setCleared] = useState(false);

  useEffect(() => {
    if (cleared) {
      const timeout = setTimeout(() => {
        setCleared(false);
      }, 1500);

      return () => clearTimeout(timeout);
    }
    return () => {};
  }, [cleared]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        name={element.name}
        label={element.label}
        value={formik.values[element.name] || null}
        slotProps={{
          textField: {
            helperText: formik.touched[element] ? formik.errors[element] : "",
          },
          field: { clearable: true, onClear: () => setCleared(true) },
        }}
        onChange={(newValue) => formik.setFieldValue(element.name, newValue)}
        color={
          formik.touched[element] || formik.errors[element]
            ? "error"
            : "primary"
        }
        required={element.required ? element.required : false}
      />
    </LocalizationProvider>
  );
};

export default DateComponent;
