import { colorPalette } from "@/style/partials/colorPalette";
import { spacings } from "@/style/partials/spacings";
import { Box } from "@mui/material";
import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: colorPalette.primary,
        display: "flex",
        position: "fixed",
        gap: "2vw",
        // Altura máxima del componente B4CMainArea
      }}
    >
      <Box
        sx={{
          margin: "auto",
          backgroundColor: colorPalette.white,
          borderRadius: "10px",
          paddingInline: spacings.spacing8,
          paddingBlock: spacings.spacing6,
          display: "flex",
          flexDirection: "column",
          maxWidth: "927px",
          maxHeight: "647px",
          gap: spacings.spacing6,
        }}
      >
        {children}
      </Box>
    </div>
  );
}
