import React, { Dispatch, SetStateAction } from "react";
import { Box, Button, Typography } from "@mui/material";
import SeatIcon from "@mui/icons-material/AirlineSeatReclineExtra";
import AdultIcon from "@mui/icons-material/Man";
import ClockIcon from "@mui/icons-material/WatchLater";

import { FlexRow } from "../FlexRow";
import SeatsModal from "../modal/bus-seats";
import { AvailableBus, Bus } from "@/types/bus";
import formatToCurrency from "@/utilities/formatCurrency";
import formatDate from "@/utilities/format-date";

type Props = {
  bus: AvailableBus;
  adultCount: number;
};

interface BookingContext {
  busId: string;
  departureDate: string;
  adultCount: number;
}

export const BusBookingContext = React.createContext({} as BookingContext);

export default function BusDetail({ bus, adultCount }: Props) {
  const [open, setOpen] = React.useState(false);

  const busId = bus.bus._id;
  const departureDate = bus.bus.departureDate;

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const contextValues = React.useMemo(
    () => ({
      busId,
      departureDate,
      adultCount,
    }),
    [busId, departureDate, adultCount]
  );

  return (
    <>
      <Typography variant="h6" sx={{ fontWeight: 600 }}>
        {bus.bus.destination} {formatDate(departureDate)}. {adultCount} Adult(s)
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{ my: 2, fontWeight: 600, color: "grey" }}
      >
        Select your bus type
      </Typography>
      <FlexRow
        sx={{
          boxShadow: "0px -3px 40px 6px rgba(0, 0, 0, 0.04)",
          borderRadius: 3,
          bgcolor: "#56ccf21a",
          pr: { xs: 0, sm: 5 },
          my: 2,
          flexWrap: "wrap",
        }}
        gap={2}
        alignItems="center"
      >
        <Box
          sx={{
            bgcolor: "#56ccf21a",
            py: { xs: 4, md: 5 },
            px: { xs: 4, md: 3 },
            width: { xs: "100%", sm: 230 },
          }}
        >
          <img src="/bus.png" alt="bus" style={{ width: "100%" }} />
        </Box>
        <Box
          sx={{
            width: { sm: 300, md: 400, lg: 500 },
            px: 3,
          }}
        >
          <Typography variant="h5" fontWeight={800}>
            Toyota (Hiace X)
          </Typography>
          <Typography variant="body2" sx={{ my: 2, color: "gray" }}>
            Departure: <b>{bus.bus.origin} =&gt;</b> Arrival:{" "}
            <b>
              {bus.bus.destination} {formatDate(departureDate)}. {adultCount}{" "}
              Adult(s)
            </b>
          </Typography>
          <FlexRow flexWrap="wrap" gap={1}>
            <Typography
              variant="caption"
              gap={0.1}
              sx={{ display: "flex", alignItems: "center", fontWeight: 700 }}
            >
              <SeatIcon />
              <span>{bus.availableSeats} seats available</span>
            </Typography>
            <Typography
              variant="caption"
              gap={0.3}
              sx={{ display: "flex", alignItems: "center", fontWeight: 700 }}
            >
              <ClockIcon fontSize="small" />
              <span>{bus.departureTime}</span>
            </Typography>
            <Typography
              variant="caption"
              // gap={0.3}
              sx={{ display: "flex", alignItems: "center", fontWeight: 700 }}
            >
              <AdultIcon fontSize="small" />
              <span>Adult: {adultCount}</span>
            </Typography>
          </FlexRow>
        </Box>
        <Box
          sx={{
            textAlign: "center",
            ml: "auto",
            width: { xs: "100%", sm: 150, md: 200 },
          }}
        >
          <Typography variant="h5" fontWeight={800} sx={{ my: 2 }}>
            {formatToCurrency(bus.bus.seatPrice)}
          </Typography>
          <Button
            color="error"
            variant="contained"
            onClick={handleOpen}
            sx={{
              p: 1.1,
              borderRadius: 2,
              fontSize: 12,
              textTransform: "capitalize",
              fontWeight: 500,
              width: "100%",
            }}
          >
            View Seats
          </Button>
        </Box>
      </FlexRow>
      <BusBookingContext.Provider value={contextValues}>
        <SeatsModal open={open} handleClose={handleClose} />
      </BusBookingContext.Provider>
    </>
  );
}
