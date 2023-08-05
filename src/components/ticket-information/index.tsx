import { useContext } from "react";
import { useSelector } from "react-redux";
import { Alert, Box, Button, Typography } from "@mui/material";
import { selectBusTicket } from "@/store/slices/ticket-info";

import { FlexRow } from "../FlexRow";
import { BusBookingContext } from "../bus-detail";
import formatDate from "@/utilities/format-date";
import { selectBookingProgress } from "@/store/slices/ticket-booking";
import { useRouter } from "next/router";
import sleep from "@/utilities/sleep";

export default function TicketInformation() {
  const router = useRouter();
  const { seat } = useSelector(selectBusTicket);
  const { email, busId } = useSelector(selectBookingProgress);
  const { registrationNumber, departureDate, handleClose } =
    useContext(BusBookingContext);

  const handleTicketClose = async () => {
    handleClose();
    await sleep(50);
    router.push("/");
  };

  return (
    <div>
      <p>Ticket Information</p>
      <br />
      <Box>
        <FlexRow
          sx={{
            mt: 1,
            justifyContent: "center",
            border: "solid silver 1px",
            borderStyle: "dashed",
            // borderRadius: 1,
            p: 1,
          }}
        >
          <Typography color="CaptionText">
            <b>Bus ID:</b> {seat.bus._id}
          </Typography>
        </FlexRow>
        <FlexRow
          sx={{
            mt: 1,
            justifyContent: "center",
            border: "solid silver 1px",
            borderStyle: "dashed",
            // borderRadius: 1,
            p: 1,
          }}
        >
          <Typography color="CaptionText">
            <b>Bus Registration:</b> {registrationNumber}
          </Typography>
        </FlexRow>
        <FlexRow
          sx={{
            mt: 1,
            justifyContent: "center",
            border: "solid silver 1px",
            borderStyle: "dashed",
            // borderRadius: 1,
            p: 1,
          }}
        >
          <Typography color="CaptionText">
            <b>Travellers:</b> 1
          </Typography>
        </FlexRow>
        <FlexRow
          sx={{
            mt: 1,
            justifyContent: "center",
            border: "solid silver 1px",
            borderStyle: "dashed",
            // borderRadius: 1,
            p: 1,
          }}
        >
          <Typography color="CaptionText">
            <b>Seat Number:</b> {seat.seatNumber}
          </Typography>
        </FlexRow>
        <FlexRow
          sx={{
            mt: 1,
            justifyContent: "center",
            border: "solid silver 1px",
            borderStyle: "dashed",
            // borderRadius: 1,
            p: 1,
          }}
        >
          <Typography color="CaptionText">
            <b>Booking Date:</b> {formatDate(seat.bookingDate!)}
          </Typography>
        </FlexRow>
        <FlexRow
          sx={{
            mt: 1,
            justifyContent: "center",
            border: "solid silver 1px",
            borderStyle: "dashed",
            // borderRadius: 1,
            p: 1,
          }}
        >
          <Typography color="CaptionText">
            <b>Departure Date:</b> {formatDate(departureDate)}
          </Typography>
        </FlexRow>
        <FlexRow
          sx={{
            mt: 1,
            justifyContent: "center",
            border: "solid silver 1px",
            borderStyle: "dashed",
            // borderRadius: 1,
            p: 1,
          }}
        >
          <Typography color="CaptionText">
            <b>Booking Status:</b> {seat.isBooked ? "SUCCESS" : "FAILED"}
          </Typography>
        </FlexRow>
        <FlexRow
          sx={{
            mt: 1,
            justifyContent: "center",
            border: "solid silver 1px",
            borderStyle: "dashed",
            // borderRadius: 1,
            p: 1,
          }}
        >
          <Typography color="CaptionText">
            <b>Passenger Name:</b> {seat.passengerName}
          </Typography>
        </FlexRow>
        <Alert variant="filled" color="info" sx={{ mt: 3 }}>
          This ticket has been sent to this email <b>{email}</b>
        </Alert>
        <Button onClick={handleTicketClose} sx={{ mt: 2 }}>
          Done
        </Button>
      </Box>
    </div>
  );
}
