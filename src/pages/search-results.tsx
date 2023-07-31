import Header from "@/components/header";
import { useRouter } from "next/router";
import { Container } from "@mui/material";

import Footer from "@/components/footer";
import { FlexCol } from "@/components/FlexCol";
import BusDetail from "@/components/bus-detail";
import BeautifulError from "@/components/error";
import { useSelector } from "react-redux";
import { selectAvailableBuses } from "@/store/slices/available-buses";

export default function BusSearchResult() {
  const { availableBuses, apiError } = useSelector(selectAvailableBuses);
  const router = useRouter();
  const adultCount = router.query.adultCount as string;
  console.log({ adultCount });

  if (apiError.error) {
    return <BeautifulError error={apiError} />;
  }

  return (
    <>
      <Header />
      <Container sx={{ mt: 2.5 }}>
        <FlexCol>
          {availableBuses.map((bus, i) => (
            <BusDetail adultCount={Number(adultCount)} bus={bus} key={i} />
          ))}
        </FlexCol>
      </Container>
      <Footer />
    </>
  );
}

// export async function getServerSideProps(context: GetServerSidePropsContext) {
//   const { origin, destination, departureDate, adultCount } = context.query;

//   console.log(context.query);

//   const response = await fetch(
//     `${process.env.API_URL}/buses/search?origin=${origin}&destination=${destination}&departureDate=${departureDate}`
//   );
//   const data = await response.json();

//   console.log("The data returened :", data);

//   if (data.error) {
//     return {
//       props: {
//         error: JSON.parse(JSON.stringify(data)),
//       },
//     };
//   } else if (data) {
//     return {
//       props: {
//         adultCount: Number(adultCount),
//         data: JSON.parse(JSON.stringify(data)),
//       },
//     };
//   }

//   return {
//     props: {
//       data: [],
//     },
//   };
// }
