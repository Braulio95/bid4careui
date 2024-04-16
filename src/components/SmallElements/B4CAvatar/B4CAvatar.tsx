import { colorPalette } from "@/style/partials/colorPalette";
import { Avatar, Stack } from "@mui/material";
import React from "react";

interface IB4CAvatar {
  alt?: string;
  imageLink?: string;
}

export const B4CAvatar = ({ alt, imageLink }: IB4CAvatar) => {
  return (
    <Avatar
      alt={alt}
      src={imageLink}
      sx={{ bgcolor: colorPalette.primary, width: "64px", height: "64px" }}
    />
  );
};
