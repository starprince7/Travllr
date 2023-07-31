import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { FlexCol } from "../FlexCol";
import { FlexRow } from "../FlexRow";
import CustomSelect from "../CustomSelect";
import DatePicker from "../CustomDatePicker";
import { LoadingButton } from "@mui/lab";
import {
  fetchAvailableBuses,
  selectAvailableBuses,
} from "@/store/slices/available-buses";
import { useDispatch, useSelector } from "react-redux";
import { AnyAction } from "@reduxjs/toolkit";
import formatDate from "@/utilities/format-date";

const DEFAULT_DEPARTURE_DATE = "2023-07-28T23:00:00.000Z"; // 2023-07-28T17:42:42.298Z - returns a bus with all seats available.

export default function BookingForm() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [departureDate, setDepartureDate] = useState<Date>(
    new Date(DEFAULT_DEPARTURE_DATE)
  );
  const [adultCount, setAdultCount] = useState("");

  const { networkRequestStatus, availableBuses, apiError } =
    useSelector(selectAvailableBuses);

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
    const message = `Hey there!👋\nHere's the deal: The backend service been used to plan future bus trips is more like a pet side project, so it's not actively managed and updated like a big official thing. Right now, we can only look at buses available on ${formatDate(
      DEFAULT_DEPARTURE_DATE
    )}. I'll do my best to update the buses for future dates every now and then, but until then, all departure dates will be set to ${formatDate(
      DEFAULT_DEPARTURE_DATE
    )}. Thanks for giving this project a try, you rock!\n\nSearch available bus is running, kindly click OK to continue.`;

    alert(message);

    dispatch(
      fetchAvailableBuses({
        departureDate: departureDate.toISOString(),
        destination,
        origin,
      }) as unknown as AnyAction
    );
  };

  useEffect(() => {
    if (availableBuses?.length > 0) {
      router.push(`/search-results?adultCount=${adultCount}`);
    }
    if (apiError.error) {
      console.log("apiError :", apiError);
      router.push(`/search-results`);
    }
  }, [availableBuses, apiError]);

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
      <LoadingButton
        loading={networkRequestStatus === "loading"}
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
      </LoadingButton>
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
