import { colorPalette } from "@/style/partials/colorPalette";
import { spacings } from "@/style/partials/spacings";
import { Box, Typography } from "@mui/material";
import React from "react";

interface ISummaryCardProps {
  title: string;
  value: string;
  lastRecord: string;
}

export const B4CServiceCard = ({
  title,
  value,
  lastRecord,
}: ISummaryCardProps) => {
  return (
    <Box
      sx={{
        borderRadius: "8px",
        display: "flex",
        flexDirection: "column",
        boxShadow: "6px 6px 54px 0px #0000000D",
        maxWidth: "262px",
        overflow: "hidden",
        backgroundColor: colorPalette.white,
        width: "100%",
      }}
    >
      <Box
        sx={{
          paddingInline: spacings.spacing2,
          paddingBlock: spacings.spacing2,
          display: "flex",
          flexDirection: "column",
          gap: spacings.spacing2,
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
            <Typography variant="body-normal" sx={{ marginBottom: "20px" }}>
              {title}
            </Typography>
            <Typography variant="body-large-bold" sx={{ fontSize: "28px" }}>
              {value}
            </Typography>
          </Box>
          <div
            style={{
              width: "60px",
              height: "60px",
              backgroundColor: "#4AD991",
              opacity: ".2",
              borderRadius: "20px",
            }}
          ></div>
        </Box>
        <Box sx={{ marginTop: spacings.spacing3 }}>
          <Typography variant="body-normal">{lastRecord}</Typography>
        </Box>
      </Box>
    </Box>
  );
};
