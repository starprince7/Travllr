import { Grid, IconButton, Typography } from "@mui/material";
import InnerSeatIcon from "@mui/icons-material/EventSeat";

interface Props {
  seatNumber: number;
  selectedSeatNumber: number;
  onClick: (value: number) => void;
}

export default function Seat({
  seatNumber,
  selectedSeatNumber,
  onClick,
}: Props) {
  const isSelected = selectedSeatNumber === seatNumber;

  return (
    <Grid item xs={4}>
      <IconButton
        sx={{
          flexDirection: "column",
          color: isSelected ? "#2e7d32" : "silver",
        }}
        onClick={() => onClick(seatNumber)}
      >
        <InnerSeatIcon fontSize="large" />
        <Typography variant="body2" fontWeight={600}>
          {seatNumber}
        </Typography>
      </IconButton>
    </Grid>
  );
}
