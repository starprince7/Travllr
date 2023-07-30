import Header from "@/components/header";
import { Container, Typography } from "@mui/material";

import Footer from "@/components/footer";
import SeatsModal from "@/components/modal/bus-seats";
import { FlexCol } from "@/components/FlexCol";
import BusDetail from "@/components/bus-detail";
import { GetServerSidePropsContext } from "next";
import BeautifulError from "@/components/error";
import { ApiErrorResponse, ApiResponse } from "@/types/bus";

type PageProps = {
  data: ApiResponse;
  adultCount: number;
  error: ApiErrorResponse;
};

export default function BusSearchResult({
  data,
  adultCount,
  error,
}: PageProps) {
  const availableBuses = data?.availableBuses;

  if (error) {
    return <BeautifulError error={error} />;
  }

  return (
    <>
      <Header />
      <Container sx={{ mt: 2.5 }}>
        <FlexCol>
          {availableBuses.map((bus, i) => (
            <BusDetail adultCount={adultCount} bus={bus} key={i} />
          ))}
        </FlexCol>
      </Container>
      <Footer />
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { origin, destination, departureDate, adultCount } = context.query;

  console.log(context.query);

  const response = await fetch(
    `${process.env.API_URL}/buses/search?origin=${origin}&destination=${destination}&departureDate=${departureDate}`
  );
  const data = await response.json();

  console.log("The data returened :", data);

  if (data.error) {
    return {
      props: {
        error: JSON.parse(JSON.stringify(data)),
      },
    };
  } else if (data) {
    return {
      props: {
        adultCount: Number(adultCount),
        data: JSON.parse(JSON.stringify(data)),
      },
    };
  }

  return {
    props: {
      data: [],
    },
  };
}
