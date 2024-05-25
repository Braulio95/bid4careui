"use client";
import { B4CTable } from "@/components/BigElements/B4CTable";
import { B4CTag } from "@/components/SmallElements/B4CTag";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Typography,
} from "@mui/material";
import {
  GridCellParams,
  GridColDef,
  GridColumnHeaderParams,
} from "@mui/x-data-grid";
import React from "react";
import { color } from "@/ts/types/colors";
import { PageLayout } from "@/pages/PageLayout";
import { B4CCheckbox } from "@/components/Selectors/B4CCheckbox";

export const ClientsPage = () => {
  const columns: GridColDef[] = [
    {
      field: "select",
      headerClassName: "super-app-theme--header",
      headerAlign: "left",
      renderHeader: (_params: GridColumnHeaderParams) => (
        <Typography variant="body-normal-bold">{"SELECT"}</Typography>
      ),
      width: 100,
      renderCell: (params: GridCellParams) => {
        return <B4CCheckbox />;
      },
    },
    {
      field: "name",
      headerClassName: "super-app-theme--header",
      headerAlign: "left",
      renderHeader: (_params: GridColumnHeaderParams) => (
        <Typography variant="body-normal-bold">{"NOMBRE"}</Typography>
      ),
      width: 200,
    },
    {
      field: "status",
      headerClassName: "super-app-theme--header",
      headerAlign: "left",
      renderHeader: (_params: GridColumnHeaderParams) => (
        <Typography variant="body-normal-bold">{"ESTATUS"}</Typography>
      ),
      width: 150,
    },
    {
      field: "email",
      headerClassName: "super-app-theme--header",
      headerAlign: "left",
      renderHeader: (_params: GridColumnHeaderParams) => (
        <Typography variant="body-normal-bold">
          {"CORREO ELECTRÓNICO"}
        </Typography>
      ),
      width: 250,
    },

    {
      field: "phone",
      headerClassName: "super-app-theme--header",
      headerAlign: "left",
      hideable: true,
      renderHeader: (_params: GridColumnHeaderParams) => (
        <Typography variant="body-normal-bold">
          {"NÚMERO DE TELÉFONO"}
        </Typography>
      ),
      width: 200,
    },
    {
      field: "activity",
      headerClassName: "super-app-theme--header",
      headerAlign: "left",
      hideable: true,
      renderHeader: (_params: GridColumnHeaderParams) => (
        <Typography variant="body-normal-bold">{"ACTIVIDAD"}</Typography>
      ),
      width: 100,
    },
  ];

  const data = [
    {
      id: "00001",
      name: "Braulio Estrada Alfonso",
      status: "Activo",
      email: "summerdreams87@email.com",
      phone: "123456789",
      activity: "2 days ago",
    },
    {
      id: "00002",
      name: "Braulio Estrada Alfonso",
      status: "Activo",
      email: "summerdreams87@email.com",
      phone: "123456789",
      activity: "2 days ago",
    },
    {
      id: "00003",
      name: "Braulio Estrada Alfonso",
      status: "Activo",
      email: "summerdreams87@email.com",
      phone: "123456789",
      activity: "2 days ago",
    },
  ];
  return (
    <PageLayout title="Clientes">
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 32,
        }}
      >
        <Box sx={{ margin: "auto" }}>
          <B4CTable dataTable={data} columns={columns} />
        </Box>
      </Box>
    </PageLayout>
  );
};
