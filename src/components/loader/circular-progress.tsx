import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function CircularLoader() {
  return (
    <Box
      sx={{
        my: 7,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <CircularProgress size={25} sx={{ color: "gray" }} />
    </Box>
  );
}
