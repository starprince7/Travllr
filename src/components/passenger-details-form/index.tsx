import { Box, Button, IconButton, TextField, Typography } from "@mui/material";
import Input from "../CustomInput";
import React, { ChangeEvent, FormEvent, useContext } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import { BusBookingContext } from "../bus-detail";
import sleep from "@/utilities/sleep";
import { useDispatch } from "react-redux";
import {
  setBusId,
  setDepartureDate,
  setPassengerEmail,
  setPassengerName,
} from "@/store/slices/ticket-booking";
import { createNewBooking } from "@/helper/api-helper";
import { LoadingButton } from "@mui/lab";
import { ActiveStep } from "../stepper";

type Props = {
  goToNextStep: (stepName: ActiveStep) => void;
};

export default function PassengerDetailsForm({ goToNextStep }: Props) {
  const dispatch = useDispatch();
  const { busId, departureDate } = useContext(BusBookingContext);

  const [fullName, setFullName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  function handleFullNameChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFullName(e.target.value);
  }

  function handleEmailChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setEmail(e.target.value);
  }

  const handleTicketBooking = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    dispatch(setPassengerEmail(email));
    dispatch(setPassengerName(fullName));
    dispatch(setDepartureDate(departureDate));
    dispatch(setBusId(busId));
    await sleep(500);

    const isSuccessful = await createNewBooking();
    setLoading(false);
    isSuccessful && goToNextStep("booking_success");
    // The following next steps include.
    // 1. show success animation
    // 2. Display the seat ticket.
    if (!isSuccessful) {
      /**
       * This is now handled by the stepper component
       * By actively checking for a failed booking error in...
       * a side effect hook.
       */
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleTicketBooking}
      sx={{ position: "relative" }}
    >
      <IconButton
        sx={{ position: "absolute", left: "-5px", top: 2 }}
        onClick={() => goToNextStep("seat_selection")}
      >
        <ArrowBackIosIcon fontSize="small" />
      </IconButton>
      <Typography variant="h6" fontFamily="Montserrat" fontWeight={600}>
        Passenger Details
      </Typography>
      <TextField
        required
        label="Full Name"
        value={fullName}
        onChange={handleFullNameChange}
        variant="standard"
        sx={{ width: "100%", my: 2 }}
      />
      <TextField
        required
        type="email"
        label="Email"
        value={email}
        onChange={handleEmailChange}
        variant="standard"
        sx={{ width: "100%", my: 2 }}
      />
      <LoadingButton
        loading={loading}
        type="submit"
        color="error"
        variant="contained"
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
      </LoadingButton>
    </Box>
  );
}
