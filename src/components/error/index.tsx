import { Box, Button, Typography } from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";

import { FlexRow } from "../FlexRow";
import Footer from "../footer";
import { useRouter } from "next/router";

type Props = {
  error: {
    error: boolean;
    message: string;
    statusCode: number;
  };
};

export default function BeautifulError({ error }: Props) {
  const router = useRouter();
  return (
    <>
      <FlexRow
        justifyContent="center"
        alignItems="center"
        height={500}
        textAlign="center"
      >
        <Box>
          <ErrorIcon fontSize="large" color="disabled" />
          <Typography sx={{ my: 0.5 }}>
            Error Status Code: {error?.statusCode}
          </Typography>
          <Typography>{error?.message}</Typography>
          <Button
            sx={{ textTransform: "capitalize", fontWeight: 600, mt: 1 }}
            onClick={() => router.back()}
          >
            Go back
          </Button>
        </Box>
      </FlexRow>
      <Footer />
    </>
  );
}
