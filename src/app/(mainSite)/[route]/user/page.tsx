import { B4CButton } from "@/components/B4CButton";
import { B4CStarRating } from "@/components/B4CStarRating";
import { B4CImage } from "@/components/BigElements/B4CImage";
import { colorPalette } from "@/style/partials/colorPalette";
import { Size } from "@/ts/enums/Size";
import { Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";

const page = () => {
  return (
    <Grid container gap={"16px"}>
      <Grid item xs={6}>
        <Box
          display={"flex"}
          flexDirection={"column"}
          sx={{
            alignItems: "center",
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
            <B4CImage
              src="/asdasdasdas"
              alt={"asdad"}
              width={100}
              height={100}
            />
            <Typography variant="h5" style={{ color: "#6C6C6C" }}>
              Rol
            </Typography>
            <Typography variant="h4">Nombre</Typography>
            <B4CStarRating rating={3} />
          </Box>
          <Box sx={{ marginBottom: "2rem" }}>
            <Typography variant="body-large" sx={{ color: "#6C6C6C" }}>
              Experta en adultos mayores.
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              gap: "1rem",
            }}
          >
            <B4CButton fullWidth label="Aceptar solicitud" />
            <B4CButton fullWidth label="Rechazar solicitud" />
          </Box>
        </Box>
      </Grid>
      <Grid item xs={5}>
        <Box sx={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
          <Typography variant="body-medium-bold">
            {"Número de teléfono: "}
          </Typography>
          <Typography variant="body-medium">{"9389239"}</Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
          <Typography variant="body-medium-bold">
            {"Estado de residencia: "}
          </Typography>
          <Typography variant="body-medium">{"Queretaro"}</Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
          <Typography variant="body-medium-bold">
            {"Años de experiencia "}
          </Typography>
          <Typography variant="body-medium">{"4 años"}</Typography>
        </Box>
        <Box
          sx={{
            marginTop: "1rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            width: "100%",
          }}
        >
          <B4CButton variant="outlined" label="CV" size={Size.Small} />
          <B4CButton variant="outlined" label="CV" size={Size.Small} />
        </Box>
        <Box
          sx={{
            marginTop: "1rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            width: "100%",
          }}
        >
          <Typography variant="body-medium-bold">
            Carta de motivacion
          </Typography>
          <Typography variant="body-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            aperiam dolorum impedit maiores illum, ex, voluptatibus dolor
            numquam error dolorem corrupti aliquam totam architecto accusamus
            sit. Dolor saepe explicabo vel!
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default page;
