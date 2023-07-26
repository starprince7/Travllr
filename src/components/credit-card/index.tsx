import { Box, Container, Typography } from "@mui/material";
import { FlexRow } from "../FlexRow";

export default function CreditCard() {
  return (
    <Container>
      <FlexRow justifyContent="space-between" sx={{ my: 10, flexWrap: "wrap" }}>
        <Box
          sx={{
            width: { xs: "100%", sm: 300, md: 350, lg: 450 },
          }}
        >
          <Typography variant="h3" sx={{ fontSize: "2.8rem", fontWeight: 600 }}>
            The lightest digital wallet you will ever own
          </Typography>
          <Typography variant="subtitle2" sx={{ my: 5 }}>
            The Bat digital wallet is a seamless way to pay for transactions
            within our ecosystem. Purchase bus tickets, airtime, data and pay
            for utility bills using the digital wallet available only on the
            mobile app.
          </Typography>
        </Box>
        <Box sx={{ width: { xs: "100%", sm: 300, md: 450, lg: 500 } }}>
          <img src="/credit-card-transport.png" style={{ width: "100%" }} />
        </Box>
      </FlexRow>
    </Container>
  );
}
