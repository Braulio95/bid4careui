import { B4CImage } from "@/components/BigElements/B4CImage";
import { B4CModal } from "@/components/BigElements/B4CModal";
import { B4CTag } from "@/components/SmallElements/B4CTag";
import { colorPalette } from "@/style/partials/colorPalette";
import { Box, Divider, Typography } from "@mui/material";
import React from "react";

interface ISingleCollaboratorsCardProps {
  userId: number;
  open: boolean;
  onClose?: () => void;
}

export const SingleCollaboratorsCard = ({
  userId,
  open,
  onClose,
}: ISingleCollaboratorsCardProps) => {
  return (
    <B4CModal
      open={open}
      onClose={onClose}
      bgColor={`linear-gradient( #F6F9FE, #FFFFFF)`}
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        sx={{
          alignItems: "center",
        }}
      >
        <B4CImage src="/asdasdasdas" alt={"asdad"} width={100} height={100} />
        <Typography>Rol</Typography>
        <Typography>Nombre</Typography>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Box>
            <Typography>21</Typography>
            <Typography>Servicios</Typography>
          </Box>
          <Divider
            orientation="vertical"
            sx={{
              height: "69px",
              border: `1px solid ${colorPalette.grey1}`,
              alignSelf: "flex-start",
            }}
          />
          <Typography>10</Typography>
          <Typography>Reseñas</Typography>
          <Divider
            orientation="vertical"
            sx={{
              height: "69px",
              border: `1px solid ${colorPalette.grey1}`,
              alignSelf: "flex-start",
            }}
          />
          <Box>
            <Typography>3</Typography>
            <Typography>Años de experiencia</Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex" }}>
          <B4CTag label="Acompañamiento a citas médicas"></B4CTag>
          <B4CTag label="Despensa/compras del hogar"></B4CTag>
          <B4CTag label="Manejo de medicamentos"></B4CTag>
          <B4CTag label="tag"></B4CTag>
          <B4CTag label="tag"></B4CTag>
          <B4CTag label="tag"></B4CTag>
        </Box>
      </Box>
    </B4CModal>
  );
};
