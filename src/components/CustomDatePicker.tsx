import { Typography } from "@mui/material";
import {
  LocalizationProvider,
  MobileDatePicker,
  DatePicker as DatePicker_,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import styles from "../styles/booking-form.module.css";

type Props = {
  onChange: (value: unknown) => void;
};

export default function DatePicker({ onChange }: Props) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Typography
        color="white"
        variant="body2"
        fontWeight={300}
        sx={{ mt: 1.5, mb: 0.5, ml: 1 }}
      >
        Departure Date
      </Typography>
      <MobileDatePicker
        disablePast
        className={styles.MuiInputBaseInput}
        sx={{
          width: "100%",
          mb: 1.5,
          ".MuiInputBase-input": { color: "white !important" },
        }}
        onChange={onChange}
      />
    </LocalizationProvider>
  );
}
