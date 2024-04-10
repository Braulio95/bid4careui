import { B4CButton } from "@/components/B4CButton";
import { colorPalette } from "@/style/partials/colorPalette";
import { Size } from "@/ts/enums/Size";
import { Typography } from "@mui/material";

export default function Page() {
  return (
    <main>
      <div style={{ width: "100vw" }}>
        <Typography sx={{ color: colorPalette.primary }} variant="h1">
          Heading 1
        </Typography>{" "}
        <Typography sx={{ color: colorPalette.primary }} variant="h2">
          Heading 2
        </Typography>{" "}
        <Typography sx={{ color: colorPalette.primary }} variant="h6">
          Heading 6
        </Typography>{" "}
        <Typography
          sx={{ color: colorPalette.primary }}
          variant="body-normal-bold"
        >
          body-normal-bold
        </Typography>{" "}
        <B4CButton label="Boton prueba" size={Size.Small} />
        <B4CButton label="Boton prueba" />
        <B4CButton
          label="Boton prueba"
          size={Size.Large}
          variant="secondary"
          disabled
        />
        <B4CButton label="Boton prueba" size={Size.Small} variant="outlined" />
      </div>
    </main>
  );
}
