import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import { Box } from "@mui/material";
import Animation from "../../data/Error.json";

export const ErrorAnimation = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (lottie && ref.current) {
      const animation = lottie.loadAnimation({
        container: ref.current,
        renderer: "svg",
        loop: false,
        autoplay: true,
        animationData: Animation,
      });

      return () => animation.destroy();
    }
    return () => {};
  }, [lottie]);

  return <Box ref={ref} sx={{ height: 110, width: 110 }} />;
};
