import { useContext } from "react";
import { useSelector } from "react-redux";
import { Alert, Box, Typography } from "@mui/material";
import { selectBusTicket } from "@/store/slices/ticket-info";

import { FlexRow } from "../FlexRow";
import { BusBookingContext } from "../bus-detail";
import formatDate from "@/utilities/format-date";
import { selectBookingProgress } from "@/store/slices/ticket-booking";

export default function TicketInformation() {
  const { busTicket } = useSelector(selectBusTicket);
  const { email } = useSelector(selectBookingProgress);
  const { adultCount, departureDate } = useContext(BusBookingContext);

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
            <b>Travellers:</b> {adultCount}
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
            <b>Seat Number:</b> {busTicket.seatNumber}
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
            <b>Booking Date:</b> {formatDate(busTicket.bookingDate!)}
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
            <b>Booking Status:</b> {busTicket.isBooked ? "SUCCESS" : "FAILED"}
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
            <b>Passenger Name:</b> {busTicket.passengerName}
          </Typography>
        </FlexRow>
        <Alert variant="filled" color="info" sx={{ mt: 3 }}>
          This ticket has been sent to this email <b>{email}</b>
        </Alert>
      </Box>
    </div>
  );
}
