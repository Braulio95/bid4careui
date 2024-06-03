"use client";
import { B4CButton } from "@/components/B4CButton";
import { B4CTextfield } from "@/components/B4CTextfield";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import React, { Fragment, useState } from "react";

interface FormData {
  email: string;
  password: string;
}

const Page = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleClick = () => {
    // Muestra un alert con los datos del usuario ingresados
    alert(
      `Correo electrónico: ${formData.email}\nContraseña: ${formData.password}`
    );
  };

  const handleVisiblePassword = () => {
    setVisible(!visible);
  };
  return (
    <form
      onSubmit={handleClick}
      style={{ display: "inherit", flexDirection: "inherit", gap: "inherit" }}
    >
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
      <B4CTextfield
        label="Correo elecrónico"
        name="email"
        onChange={handleInputChange}
        required
      />
      <Box>
        <B4CTextfield
          label="Contraseña"
          name="password"
          isPassword
          isVisible={visible}
          onClick={handleVisiblePassword}
          onChange={handleInputChange}
          required
        />
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
      <B4CButton variant="primary" label="Entrar a Admin Dashboard" isSubmit />
    </form>
  );
};

export default Page;
