import { colorPalette } from "@/style/partials/colorPalette";
import { spacings } from "@/style/partials/spacings";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        marginInline: "auto",
        paddingBlock: spacings.spacing6,
        borderRadius: "8px",
        color: colorPalette.primary,
      }}
      boxShadow={"6px 6px 54px 0px #0000000D"}
      width={"50%"}
    >
      <Typography variant="h2" style={{ color: colorPalette.grey2 }}>
        {"Hubo un problema :("}
      </Typography>
      <Typography variant="body-normal-bold">
        No pudimos encontrar la página que estabas buscando.
      </Typography>
      <br />
      <Typography variant="body-normal-bold">
        Regresar al <Link href={"/"}>Inicio</Link>
      </Typography>
    </Box>
  );
};
export default NotFound;
