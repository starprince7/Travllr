import React from "react";
import { FlexRow } from "@/components/FlexRow";
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

type Props = {
  handleNext: () => void;
};

export default function Seats({ handleNext }: Props) {
  const [selectedSeatNumber, setSelectedSeatNumber] = React.useState<number>();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const columnSpacing = isSmallScreen ? 4 : 9; // Adjust the values as per your preference

  const handleSeatBooking = () => {
    alert("Booking a seat...");
    handleNext();
  };

  const seats = new Array(13).fill(" ");

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
            seatNumber={index + 1}
            selectedSeatNumber={selectedSeatNumber!}
            onClick={(number) => setSelectedSeatNumber(number)}
          />
        ))}
      </Grid>
      <Button
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
        Continue
      </Button>
    </Box>
  );
}
