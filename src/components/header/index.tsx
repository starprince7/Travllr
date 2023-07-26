import Link from "next/link";
import { Box, Container, Typography } from "@mui/material";
import { FlexRow } from "../FlexRow";
import NavBar from "./navbar";

export default function Header() {
  return (
    <header>
      <Box sx={{ boxShadow: "2px 3px 15px silver" }}>
        <Container disableGutters>
          <FlexRow
            justifyContent="space-between"
            alignItems="center"
            sx={{ padding: 2.2, bgcolor: "white" }}
          >
            <Link href="/">
              <Typography
                variant="h5"
                color="error"
                sx={{ fontWeight: 800, fontFamily: "Montserrat" }}
              >
                Travllr
              </Typography>
            </Link>
            <Box>
              <NavBar />
            </Box>
          </FlexRow>
        </Container>
      </Box>
    </header>
  );
}
