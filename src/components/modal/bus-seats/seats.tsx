import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Button,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import InnerSeatIcon from "@mui/icons-material/EventSeat";

import Seat from "./seat";
import { FlexRow } from "@/components/FlexRow";
import { BusBookingContext } from "@/components/bus-detail";
import { BusSeat } from "@/types/seat";
import CircularLoader from "@/components/loader/circular-progress";
import { fetchSeats, selectSeats } from "@/store/slices/bus-seats";
import { AnyAction } from "@reduxjs/toolkit";
import {
  selectBookingProgress,
  setSeatNumber,
} from "@/store/slices/ticket-booking";

type Props = {
  goToNextStep: () => void;
};

export default function SeatSelectionStep({ goToNextStep }: Props) {
  const { seatNumber: selectedSeatNumber } = useSelector(selectBookingProgress);
  const { seats, networkRequestStatus } = useSelector(selectSeats);
  const { busId } = useContext(BusBookingContext);

  const dispatch = useDispatch();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const columnSpacing = isSmallScreen ? 4 : 9;

  useEffect(() => {
    if (seats.length > 0) return;
    dispatch(fetchSeats(busId) as unknown as AnyAction);
  }, [seats]);

  const handleContinue = () => {
    goToNextStep();
  };

  return (
    <Box>
      <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
        Select Seat(s)
      </Typography>
      <FlexRow
        justifyContent="space-between"
        sx={{ textAlign: "center", my: 3 }}
      >
        <Stack>
          <InnerSeatIcon color="error" sx={{ mx: "auto" }} />
          <Typography fontSize={12} variant="body2">
            Booked Seat
          </Typography>
        </Stack>
        <Stack>
          <InnerSeatIcon sx={{ mx: "auto", color: "silver" }} />
          <Typography fontSize={12} variant="body2">
            Available Seat
          </Typography>
        </Stack>
        <Stack>
          <InnerSeatIcon sx={{ mx: "auto", color: "#2e7d32" }} />{" "}
          {/* #2e7d32 */}
          <Typography fontSize={12} variant="body2">
            Selected Seat
          </Typography>
        </Stack>
      </FlexRow>
      {networkRequestStatus !== "succeeded" && <CircularLoader />}
      {networkRequestStatus === "succeeded" && (
        <>
          <Typography>Now pick a seat!</Typography>
          <Grid container columnSpacing={columnSpacing} rowSpacing={1}>
            <Grid item xs={8} sx={{ textAlign: "left" }}>
              <img
                src="/svg/steering-wheel.svg"
                alt="steering wheel"
                width={30}
                style={{ marginLeft: 26 }}
              />
            </Grid>
            {seats.map((s, index) => (
              <Seat
                data={s}
                selectedSeatNumber={selectedSeatNumber!}
                onClick={(number) => dispatch(setSeatNumber(number))}
              />
            ))}
          </Grid>
        </>
      )}
      <Button
        color="error"
        variant="contained"
        onClick={handleContinue}
        disabled={!selectedSeatNumber}
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
        Continue
      </Button>
    </Box>
  );
}
