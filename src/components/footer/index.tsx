import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import Link from "next/link";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";

export default function Footer() {
  return (
    <footer style={{ background: "#e7f1f6" }}>
      <Container sx={{ pt: 4, pb: 2, mt: 18 }}>
        <Grid
          container
          sx={{
            gap: { xs: 5, md: 20 },
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <Grid item>
            {/* <img src="/logo/batman-logo.svg" width={100} /> */}
            <Typography
              variant="h5"
              color="error"
              sx={{ fontWeight: 800, fontFamily: "Montserrat" }}
            >
              Travllr
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 600 }}>
              Company
            </Typography>
            <Typography sx={{ mb: 1.2 }} variant="body2">
              About Us
            </Typography>
            <Typography sx={{ mb: 1.2 }} variant="body2">
              Team
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 600 }}>
              Experience
            </Typography>
            <Typography sx={{ mb: 1.2 }} variant="body2">
              Contact Us
            </Typography>
            <Typography sx={{ mb: 1.2 }} variant="body2">
              FAQ's
            </Typography>
            <Typography sx={{ mb: 1.2 }} variant="body2">
              Find a Terminal
            </Typography>
            <Typography sx={{ mb: 1.2 }} variant="body2">
              Blog
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 600 }}>
              Terms
            </Typography>
            <Typography sx={{ mb: 1.2 }} variant="body2">
              Privacy Policy
            </Typography>
            <Typography sx={{ mb: 1.2 }} variant="body2">
              Terms & Conditions{" "}
            </Typography>
          </Grid>
        </Grid>
        <Box sx={{ textAlign: "center", pt: 8 }}>
          <Typography fontSize="small">
            &copy;2023 by{" "}
            <Link href="https://princenweke.com">Prince A. Nweke</Link>
          </Typography>
        </Box>
      </Container>
    </footer>
  );
}
