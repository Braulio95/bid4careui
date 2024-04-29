import { B4CButton } from "@/components/B4CButton";
import { B4CTextfield } from "@/components/B4CTextfield";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import React, { Fragment } from "react";

const page = () => {
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
          "Por favor, complete sus datos de inicio de sesión de administrador únicos a continuación."
        }
      </Typography>
      <B4CTextfield label="Correo elecrónico" />
      <Box>
        <B4CTextfield label="Contraseña" />
        <Typography
          variant="body-large-bold"
          sx={{
            display: "inline",
            marginLeft: "65%",
            marginTop: "16px",
            color: "#999999",
          }}
        >
          <Link
            href={"login/forgot_password"}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            {"¿Olvidaste tu contraseña?"}
          </Link>
        </Typography>
      </Box>
      <B4CButton variant="primary" label="Entrar a Admin Dashboard" />
    </Fragment>
  );
};

export default page;
