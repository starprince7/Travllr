import * as React from "react";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";

import SeatSelectionStep from "./modal/bus-seats/seats";
import PassengerDetailsFormStep from "./passenger-details-form";
import BookingSuccessStep from "./booking-success";
import BookingError from "./booking-error";
import { selectBusTicket } from "@/store/slices/ticket-info";
import TicketInformation from "./ticket-information";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: 350, sm: 450 },
  bgcolor: "background.paper",
  borderRadius: 3,
  boxShadow: 24,
  p: 4,
  textAlign: "center",
};

export type ActiveStep =
  | "seat_selection"
  | "passenger_form"
  | "booking_success"
  | "booking_error"
  | "ticket_information";

export default function SeatBookingStepper() {
  const { error: bookingError } = useSelector(selectBusTicket);
  const [activeStep, setActiveStep] = React.useState(0);
  const [activeStepName, setActiveStepName] =
    React.useState<ActiveStep>("seat_selection");

  React.useEffect(() => {
    if (bookingError) {
      setActiveStepName("booking_error"); // The Error step: index 3.
    }
  }, [bookingError]);

  const goToNextStep = (stepName: ActiveStep) => {
    // setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setActiveStepName(stepName);
  };

  const goToTicketInformation = () => {
    setTimeout(() => {
      setActiveStepName("ticket_information");
    }, 3200);
  };

  return (
    <Box sx={style}>
      {activeStepName === "seat_selection" && (
        <SeatSelectionStep
          goToNextStep={() => goToNextStep("passenger_form")}
        />
      )}
      {activeStepName === "passenger_form" && (
        <PassengerDetailsFormStep goToNextStep={goToNextStep} />
      )}
      {activeStepName === "booking_error" && (
        <BookingError goToNextStep={() => goToNextStep("seat_selection")} />
      )}
      {activeStepName === "booking_success" && (
        <BookingSuccessStep goToNextStep={goToTicketInformation} />
      )}
      {activeStepName === "ticket_information" && <TicketInformation />}
    </Box>
  );
}
