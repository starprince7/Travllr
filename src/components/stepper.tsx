import * as React from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";

import Seats from "./modal/bus-seats/seats";
import PassengerDetailsForm from "./passenger-details-form";
import BookingSuccess from "./booking-success";

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

type ElementProps = {
  handleNext: () => void;
};

const steps = [
  {
    label: "Select campaign settings",
    element: ({ handleNext }: ElementProps) => (
      <Seats handleNext={handleNext} />
    ),
  },
  {
    label: "Passenger Details Form",
    element: () => <PassengerDetailsForm />,
  },
  {
    label: "Successful Booking",
    element: () => <BookingSuccess />,
  },
];

export default function SeatBookingStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(2);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const Dynamic = () => steps[activeStep].element({ handleNext });

  return (
    <Box sx={style}>
      <Dynamic />
    </Box>
  );
}
