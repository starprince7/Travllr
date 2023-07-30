import { Button, Typography } from "@mui/material";
import { FlexCol } from "../FlexCol";
import { ErrorAnimation } from "./error-animation";
import { useSelector } from "react-redux";
import { selectBusTicket } from "@/store/slices/ticket-info";

type Props = {
  goToNextStep: () => void;
};

export default function BookingError({ goToNextStep }: Props) {
  const { error } = useSelector(selectBusTicket);
  return (
    <FlexCol sx={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <ErrorAnimation />
      <Typography sx={{ fontWeight: 600, my: 1.5 }}>
        {error?.message || "Something went wrong!"}
      </Typography>
      <Button sx={{ textTransform: "" }} color="error" onClick={goToNextStep}>
        Go back
      </Button>
    </FlexCol>
  );
}
