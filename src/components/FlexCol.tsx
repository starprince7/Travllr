import React from "react";
import { Box, BoxProps, PaperProps } from "@mui/material";

export const FlexCol = React.forwardRef(
  ({ children, sx, ...rest }: BoxProps & Partial<PaperProps>, ref) => {
    return (
      <Box
        ref={ref}
        {...rest}
        sx={{ display: "flex", flexDirection: "column", ...sx }}
      >
        {children}
      </Box>
    );
  }
);

FlexCol.displayName = "FlexCol";
