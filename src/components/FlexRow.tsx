import React from "react";
import { Box, BoxProps, PaperProps } from "@mui/material";

export const FlexRow = React.forwardRef(
  ({ children, sx = {}, ...rest }: BoxProps & Partial<PaperProps>, ref) => {
    return (
      <Box
        ref={ref}
        {...rest}
        sx={{ display: "flex", flexDirection: "row", ...sx }}
      >
        {children}
      </Box>
    );
  },
);

FlexRow.displayName = "FlexRow";
