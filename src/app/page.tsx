import { B4CButton } from "@/components/B4CButton";
import { colorPalette } from "@/style/partials/colorPalette";
import { Typography } from "@mui/material";

export default function Home() {
  return (
    <main>
      <div style={{ width: "600px" }}>
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
        <B4CButton />
      </div>
    </main>
  );
}
