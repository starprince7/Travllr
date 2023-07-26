import { Box, Button, Typography } from "@mui/material";
import Input from "../CustomInput";

export default function PassengerDetailsForm() {
  const handleSeatBooking = () => {
    alert("Booking seat...");
  };

  return (
    <Box component="form">
      <Typography variant="h6" fontFamily="Montserrat" fontWeight={600}>
        Passenger Details
      </Typography>
      <Input label="Full Name" />
      <Input label="Email" />
      <Button
        type="submit"
        color="error"
        variant="contained"
        onClick={handleSeatBooking}
        sx={{
          p: 1.1,
          mt: 2,
          borderRadius: 2,
          fontSize: 12,
          textTransform: "capitalize",
          fontWeight: 500,
          width: "100%",
        }}
      >
        Book Now
      </Button>
    </Box>
  );
}
