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

export const ServicePage = () => {
  const columns: GridColDef[] = [
    {
      field: "id",
      headerClassName: "super-app-theme--header",
      headerAlign: "left",
      renderHeader: (_params: GridColumnHeaderParams) => (
        <Typography variant="body-normal-bold">{"ID"}</Typography>
      ),
      width: 80,
    },
    {
      field: "name",
      headerClassName: "super-app-theme--header",
      headerAlign: "left",
      renderHeader: (_params: GridColumnHeaderParams) => (
        <Typography variant="body-normal-bold">{"NOMBRE"}</Typography>
      ),
      width: 150,
    },
    {
      field: "address",
      headerClassName: "super-app-theme--header",
      headerAlign: "left",
      renderHeader: (_params: GridColumnHeaderParams) => (
        <Typography variant="body-normal-bold">{"DIRECCIÓN"}</Typography>
      ),
      width: 300,
    },
    {
      field: "dates",
      headerClassName: "super-app-theme--header",
      headerAlign: "left",
      renderHeader: (_params: GridColumnHeaderParams) => (
        <Typography variant="body-normal-bold">{"FECHAS"}</Typography>
      ),
      width: 250,
    },

    {
      field: "cost",
      headerClassName: "super-app-theme--header",
      headerAlign: "left",
      hideable: true,
      renderHeader: (_params: GridColumnHeaderParams) => (
        <Typography variant="body-normal-bold">{"COSTO"}</Typography>
      ),
      width: 150,
    },
    {
      field: "status",
      headerClassName: "super-app-theme--header",
      headerAlign: "left",
      hideable: true,
      renderHeader: (_params: GridColumnHeaderParams) => (
        <Typography variant="body-normal-bold">{"ESTATUS"}</Typography>
      ),
      width: 150,
      renderCell: (params: GridCellParams) => {
        const status = params.value as string;
        let color: color = "primary";
        if (status === "pagado") {
          color = "success";
        } else if (status === "por pagar") {
          color = "warning";
        }
        return <B4CTag label={status} color={color} />;
      },
    },
  ];

  const data = [
    {
      id: "00001",
      name: "Braulio",
      address:
        "Calle Juárez #123, Colonia Centro, Ciudad de México, CDMX, México.",
      dates: "13.05.2025 - 15.05.2025",
      cost: "$8000",
      status: "pagado",
    },
    {
      id: "00002",
      name: "Pedro Pérez",
      address:
        "Calle Juárez #123, Colonia Centro, Ciudad de México, CDMX, México.",
      dates: "13.05.2025 - 15.05.2025",
      cost: "$8000",
      status: "por pagar",
    },
  ];
  return (
    <PageLayout title="Servicios">
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 32,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            p: 2,
            paddingBlock: 0,
            border: "1px solid #e0e0e0",
            borderRadius: 4,
            backgroundColor: "#F9F9FB",
          }}
        >
          <IconButton></IconButton>
          <Typography variant="body-small-bold" sx={{ mr: 2 }}>
            Filtrar por
          </Typography>
          <FormControl sx={{ minWidth: 120, mr: 2, border: "none" }}>
            <InputLabel id="date-select-label">Fecha</InputLabel>
            <Select
              labelId="date-select-label"
              label="Fecha"
              defaultValue=""
              input={
                <OutlinedInput
                  notched
                  sx={{
                    "& .MuiOutlinedInput-notchedOutline": { borderWidth: 0 },
                  }}
                />
              }
            >
              <MenuItem value="14 de mayo 2025">14 de mayo 2025</MenuItem>
              {/* Agrega más opciones según sea necesario */}
            </Select>
          </FormControl>
          <FormControl sx={{ minWidth: 200, mr: 2 }}>
            <InputLabel id="status-select-label">
              Estatus de Servicio
            </InputLabel>
            <Select
              labelId="status-select-label"
              label="Estatus de Servicio"
              defaultValue=""
              input={
                <OutlinedInput
                  notched
                  sx={{
                    "& .MuiOutlinedInput-notchedOutline": { borderWidth: 0 },
                  }}
                />
              }
            >
              <MenuItem value="Pagado">Pagado</MenuItem>
              <MenuItem value="Por pagar">Por pagar</MenuItem>
              {/* Agrega más opciones según sea necesario */}
            </Select>
          </FormControl>
          <Button variant="text" color="secondary">
            Reiniciar filtro
          </Button>
        </Box>
        <Box sx={{ margin: "auto" }}>
          <B4CTable dataTable={data} columns={columns} />
        </Box>
      </Box>
    </PageLayout>
  );
};
