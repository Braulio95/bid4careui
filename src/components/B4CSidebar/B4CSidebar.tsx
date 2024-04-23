import { B4CLogo } from "@/assets/images/B4CLogo";
import { Box, Typography } from "@mui/material";
import React from "react";
import Link from "next/link";
import { spacings } from "@/style/partials/spacings";
import { colorPalette } from "@/style/partials/colorPalette";
export const B4CSidebar = () => {
  return (
    <Box
      sx={{
        width: "223px",
        display: "flex",
        flexDirection: "column",
        marginLeft: "auto",
        marginTop: "5vh",
      }}
    >
      <B4CLogo />
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          flexDirection: "column",
          paddingInline: 0,
          gap: "32px",
        }}
      >
        <li
          key={"2"}
          style={{
            width: "100%",
            paddingBlock: spacings.spacing2,
            borderRadius: "8px",
            display: "flex",
          }}
        >
          <Link
            href="/"
            style={{
              textDecoration: "none",
              marginInline: "auto",
              color: colorPalette.black1,
            }}
          >
            <Typography variant="body-normal-bold">{"Dashboard"}</Typography>
          </Link>
        </li>
      </ul>
    </Box>
  );
};
