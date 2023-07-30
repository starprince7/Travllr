import { Typography } from "@mui/material";
import { FlexCol } from "../FlexCol";
import { SuccessAnimation } from "./success-animation";
import { useEffect } from "react";

type Props = {
  goToNextStep: () => void;
};

export default function BookingSuccess({ goToNextStep }: Props) {
  useEffect(() => {
    goToNextStep();
  }, []);

  return (
    <FlexCol sx={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Typography sx={{ fontWeight: 600, mb: 2 }}>
        Booking Successful!
      </Typography>
      <SuccessAnimation />
    </FlexCol>
  );
}
