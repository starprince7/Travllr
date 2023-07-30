import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import { useRouter } from "next/router";

import { FlexCol } from "../FlexCol";
import { FlexRow } from "../FlexRow";
import CustomSelect from "../CustomSelect";
import DatePicker from "../CustomDatePicker";

export default function BookingForm() {
  const router = useRouter();
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [departureDate, setDepartureDate] = useState<Date>();
  const [adultCount, setAdultCount] = useState("");

  const handleSearchForAvailableBuses = () => {
    if (!departureDate) {
      return alert("Enter your departure date");
    }
    if (!destination) {
      return alert("Kindly provide a travelling to destination");
    }
    if (!origin) {
      return alert("kindly provide a travelling from location");
    }
    if (!adultCount) {
      return alert("Enter number of travelling adult");
    }

    router.push(
      `/search-results?origin=${origin}&destination=${destination}&departureDate=${departureDate.toISOString()}&adultCount=${adultCount}`
    );
  };

  console.log({ departureDate });

  return (
    <Box
      component="form"
      onSubmit={(e) => {}}
      sx={{
        mx: { xs: "auto", sm: 0 },
        my: 3,
        borderRadius: 5,
        overflow: "hidden",
        background: "#ffffff33",
        backdropFilter: "blur(5px)",
      }}
    >
      <FlexCol>
        <Box
          sx={{
            p: 2,
            width: { xs: 350, sm: 450 },
            background: "#ffffff15",
          }}
        >
          <Button
            size="small"
            sx={{
              textTransform: "none",
              color: "#ffffff66",
              fontWeight: 600,
              marginLeft: "auto",
              borderBottom: "solid 3px #56ccf2",
              display: "block",
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0,
            }}
          >
            Book a seat
          </Button>
        </Box>
        <Box sx={{ p: 2 }}>
          <FlexRow gap={2} sx={{ mb: 2 }}>
            <Button
              variant="outlined"
              sx={{
                textTransform: "capitalize",
                color: "#56ccf2",
                borderColor: "#56ccf2",
                borderRadius: 3,
                fontWeight: 300,
                "&:hover": {
                  backgroundColor: "#56ccf2",
                  color: "white",
                },
              }}
            >
              One Way
            </Button>
            <Button
              variant="outlined"
              sx={{
                textTransform: "capitalize",
                color: "#56ccf2",
                borderColor: "#56ccf2",
                borderRadius: 3,
                fontWeight: 300,
                "&:hover": {
                  backgroundColor: "#56ccf2",
                  color: "white",
                },
              }}
            >
              Round Trip
            </Button>
          </FlexRow>
          {/* Form components */}
          <CustomSelect
            label="Travelling From"
            items={originLocations}
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
          />
          <CustomSelect
            label="Travelling To"
            items={originLocations}
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
          {/* Date component */}
          <FlexCol>
            <DatePicker
              onChange={(e: unknown) => setDepartureDate(new Date(e as any))}
            />
            <CustomSelect
              value={adultCount}
              label="Adults"
              items={["1", "2", "3", "4"]}
              onChange={(e) => setAdultCount(e.target.value)}
            />
          </FlexCol>
        </Box>
      </FlexCol>
      <Button
        variant="contained"
        onClick={handleSearchForAvailableBuses}
        sx={{
          width: "93%",
          py: 1.2,
          mx: "auto",
          mb: 3,
          display: "block",
          borderRadius: 3,
          textTransform: "capitalize",
        }}
      >
        Proceed
      </Button>
    </Box>
  );
}

const originLocations = [
  "Paris, France",
  "London, England",
  "Dublin, Ireland",
  "Venice, Italy",
  "Edinburgh, Scotland",
];
