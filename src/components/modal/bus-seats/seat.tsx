import { Avatar, Grid, IconButton, Typography } from "@mui/material";
import InnerSeatIcon from "@mui/icons-material/EventSeat";
import { BusSeat } from "@/types/seat";

interface SeatProps {
  data: BusSeat;
  selectedSeatNumber: number;
  onClick: (value: number) => void;
}

export default function Seat({ selectedSeatNumber, onClick, data }: SeatProps) {
  const isSelected = selectedSeatNumber === data?.seatNumber;

  const getRequiredSeatColor = (
    bookedStatus: boolean,
    selectStatus: boolean
  ) => {
    if (bookedStatus) return "#e21d00";
    if (selectStatus) return "#2e7d32";
    return "silver";
  };

  return (
    <Grid item xs={4}>
      <IconButton
        disableFocusRipple={data?.isBooked}
        disableTouchRipple={data?.isBooked}
        sx={{
          flexDirection: "column",
          borderRadius: 0,
          color: getRequiredSeatColor(data?.isBooked, isSelected),
        }}
        onClick={data?.isBooked ? () => {} : () => onClick(data?.seatNumber)}
      >
        <InnerSeatIcon fontSize="large" />
        <Typography variant="body2" fontWeight={600}>
          {data?.seatNumber}
        </Typography>
      </IconButton>
    </Grid>
  );
}
