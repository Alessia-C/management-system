import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useDispatch } from "react-redux";
import { updateForm } from "../../../store/formSlice";

const DateComponent = ({ formik, element }) => {
  const dispatch = useDispatch();

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        name={element.name}
        label={element.label}
        value={
          formik.values[element.name]
            ? dayjs(formik.values[element.name])
            : null
        }
        onChange={(newValue) => {
          const formattedValue = newValue ? newValue.format("YYYY-MM-DD") : "";
          formik.setFieldValue(element.name, formattedValue);
          dispatch(updateForm({ name: element.name, value: formattedValue }));
        }}
        color={
          formik.touched[element.name] && formik.errors[element.name]
            ? "error"
            : "primary"
        }
        required={element.required || false}
      />
    </LocalizationProvider>
  );
};

export default DateComponent;
