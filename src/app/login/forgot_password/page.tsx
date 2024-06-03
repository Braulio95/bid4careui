import { colorPalette } from "@/style/partials/colorPalette";
import { Typography } from "@mui/material";
import Link from "next/link";
import React, { Fragment } from "react";

const Page = () => {
  return (
    <Fragment>
      <Typography
        variant="h5"
        sx={{
          textAlign: "center",
          width: "70%",
          marginInline: "auto",
          color: "#666666",
        }}
      >
        {
          "Contacta a tu administrador o desarrollador para que pueda proporcionarte nuevas credenciales."
        }
      </Typography>
      <Link
        href={"/login"}
        style={{
          textDecoration: "none",
          color: "inherit",
          backgroundColor: colorPalette.primary,
          borderRadius: "8px",
          display: "flex",
          paddingBlock: "20px",
        }}
      >
        <Typography
          sx={{ margin: "auto", color: colorPalette.white }}
          variant="body-large-bold"
        >
          {"Regresar al inicio de sesión"}
        </Typography>
      </Link>
    </Fragment>
  );
};

export default Page;
