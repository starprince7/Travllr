import React from "react";
import { Box, Button, Typography } from "@mui/material";
import SeatIcon from "@mui/icons-material/AirlineSeatReclineExtra";
import AdultIcon from "@mui/icons-material/Man";
import ClockIcon from "@mui/icons-material/WatchLater";

import { FlexRow } from "../FlexRow";
import SeatsModal from "../modal/bus-seats";
import { Bus } from "@/types/bus";

type Props = {
  bus: Bus;
};

export default function BusDetail({ bus }: Props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
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
          <Typography variant="body2" sx={{ my: 2 }}>
            Port Harcourt to ==&gt; Lagos Festac (mazamaza) July 25, 2023. 1
            Adult(s)
          </Typography>
          <FlexRow flexWrap="wrap" gap={1}>
            <Typography
              variant="caption"
              gap={0.1}
              sx={{ display: "flex", alignItems: "center", fontWeight: 700 }}
            >
              <SeatIcon />
              <span>9 seats available</span>
            </Typography>
            <Typography
              variant="caption"
              gap={0.3}
              sx={{ display: "flex", alignItems: "center", fontWeight: 700 }}
            >
              <ClockIcon fontSize="small" />
              <span>07:30 AM</span>
            </Typography>
            <Typography
              variant="caption"
              // gap={0.3}
              sx={{ display: "flex", alignItems: "center", fontWeight: 700 }}
            >
              <AdultIcon fontSize="small" />
              <span>Adult: 1</span>
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
            N26,100
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
      <SeatsModal open={open} handleClose={handleClose} />
    </>
  );
}
