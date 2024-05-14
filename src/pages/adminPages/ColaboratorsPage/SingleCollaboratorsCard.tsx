import { B4CButton } from "@/components/B4CButton";
import { B4CStarRating } from "@/components/B4CStarRating";
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
          maxWidth: "570px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.6rem",
          }}
        >
          <B4CImage src="/asdasdasdas" alt={"asdad"} width={100} height={100} />
          <Typography variant="h5" style={{ color: "#6C6C6C" }}>
            Rol
          </Typography>
          <Typography variant="h4">Nombre</Typography>
          <B4CStarRating rating={3} />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "1rem",
            verticalAlign: "middle",
            marginBlock: "2rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h4">21</Typography>
            <Typography variant="h6" sx={{ color: "#6C6C6C" }}>
              Servicios
            </Typography>
          </Box>
          <Divider
            orientation="vertical"
            sx={{
              height: "69px",
              alignSelf: "flex-start",
            }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginInline: "2rem",
            }}
          >
            <Typography variant="h4">10</Typography>
            <Typography variant="h6" sx={{ color: "#6C6C6C" }}>
              Reseñas
            </Typography>
          </Box>
          <Divider
            orientation="vertical"
            sx={{
              height: "69px",
              alignSelf: "flex-start",
            }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h4">3</Typography>
            <Typography variant="h6" sx={{ color: "#6C6C6C" }}>
              Años de Exp.
            </Typography>
          </Box>
        </Box>
        <Box sx={{ marginBottom: "2rem" }}>
          <Typography variant="body-large" sx={{ color: "#6C6C6C" }}>
            Experta en adultos mayores.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            marginInline: "auto",
            alignItems: "center",
          }}
        >
          <B4CTag label="Acompañamiento a citas médicas"></B4CTag>
          <B4CTag label="Despensa/compras del hogar"></B4CTag>
          <B4CTag label="Manejo de medicamentos"></B4CTag>
          <B4CTag label="tag"></B4CTag>
          <B4CTag label="tag"></B4CTag>
          <B4CTag label="tag"></B4CTag>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "1rem",
          width: "100%",
        }}
      >
        <B4CButton label="Conectar con Cliente" />
        <B4CButton label="Dar de baja" />
      </Box>
    </B4CModal>
  );
};
