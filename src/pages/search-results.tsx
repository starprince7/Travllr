import Header from "@/components/header";
import { Container, Typography } from "@mui/material";

import Footer from "@/components/footer";
import SeatsModal from "@/components/modal/bus-seats";
import { FlexCol } from "@/components/FlexCol";
import BusDetail from "@/components/bus-detail";

export default function BusSearchResult() {
  const availableBuses = new Array(2).fill("");
  return (
    <>
      <Header />
      <Container sx={{ mt: 2.5 }}>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          Port Harcourt to =&gt; Lagos Festac (mazamaza) July 25, 2023. 1
          Adult(s)
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ my: 2, fontWeight: 600, color: "grey" }}
        >
          Select your bus type
        </Typography>

        {/* Bus information */}
        <FlexCol>
          {availableBuses.map((bus, i) => (
            <BusDetail key={i} />
          ))}
        </FlexCol>
      </Container>
      <Footer />
    </>
  );
}
