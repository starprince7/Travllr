import { Typography } from "@mui/material";
import { LocalizationProvider, MobileDatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

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
        className="custom_date_picker"
        sx={{ width: "100%", mb: 1.5, color: "white !important" }}
        onChange={onChange}
      />
    </LocalizationProvider>
  );
}
