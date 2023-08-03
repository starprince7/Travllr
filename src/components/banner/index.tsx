import { Box, Container, Typography } from "@mui/material";
import { FlexRow } from "../FlexRow";
import BookingForm from "./booking-form";

export default function Banner() {
  return (
    <FlexRow
      sx={{
        background: "url(/transportation-herobg.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: { xs: "none", md: "50% 60%" },
        height: "auto",
        // border: "solid red",
        // backgroundColor: "#0c2335",
      }}
    >
      <Container disableGutters>
        <FlexRow
          sx={{
            padding: 3,
            flexWrap: { xs: "wrap", sm: "nowrap" },
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              color: "white",
              width: { xs: "100%", sm: 500 },
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: 800,
                fontSize: { xs: "2rem", md: "3rem" },
              }}
            >
              The modern way to commute across cities
            </Typography>
            <Typography variant="subtitle2" sx={{ my: 2.5 }}>
              BusQuest is a Global technology powered company, providing
              seamless mobility services to commuters across the globe.
            </Typography>
          </Box>
          <BookingForm />
        </FlexRow>
      </Container>
    </FlexRow>
  );
}
