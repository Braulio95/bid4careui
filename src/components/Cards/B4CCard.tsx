import { Box, Typography } from "@mui/material";
import React from "react";
import { B4CButton } from "../B4CButton";
import { colorPalette } from "@/style/partials/colorPalette";
import { spacingScale, spacings } from "@/style/partials/spacings";
import Image from "next/image";

interface IB4CCardProps {
  title: string;
  content: string;
  buttonLabel?: string;
  imageSrc?: string;
  hasImage?: boolean;
  hasButton?: boolean;
  theme?: "primary" | "negative" | "blue" | "backgroundImage";
}

export const B4CCard = ({
  buttonLabel,
  content,
  hasButton,
  hasImage,
  imageSrc,
  title,
  theme = "primary", // Default value is "primary"
}: IB4CCardProps) => {
  const textColors = {
    primary: {
      title: colorPalette.primary,
      content: colorPalette.black1,
      backgroundColor: colorPalette.white,
    },
    negative: {
      title: colorPalette.white,
      content: colorPalette.white,
      backgroundColor: colorPalette.primary,
    },
    blue: {
      title: colorPalette.primary,
      content: colorPalette.primary,
      backgroundColor: colorPalette.white,
    },
    backgroundImage: {
      title: colorPalette.white,
      content: colorPalette.white,
      backgroundColor: imageSrc,
    },
  };

  const {
    title: titleColor,
    content: contentColor,
    backgroundColor: backgroundColor,
  } = textColors[theme];
  return (
    <Box
      sx={{
        borderRadius: "8px",
        display: "flex",
        flexDirection: "column",
        boxShadow: 24,
        maxWidth: "325px",
        overflow: "hidden",
        backgroundImage:
          theme === "backgroundImage" ? `url(${imageSrc})` : undefined,
        backgroundColor: backgroundColor,
      }}
    >
      {theme === "backgroundImage" && <Box height={297}></Box>}
      {hasImage && (
        <Image
          src={imageSrc ? imageSrc : ""}
          alt={`image-${title}`}
          height={297}
          width={325}
        />
      )}
      <Box
        sx={{
          paddingInline: spacings.spacing2,
          paddingBlock: spacings.spacing2,
          display: "flex",
          flexDirection: "column",
          gap: spacings.spacing2,
        }}
      >
        <Typography variant="h5" sx={{ color: titleColor }}>
          {title}
        </Typography>
        <Typography variant="body-normal" sx={{ color: contentColor }}>
          {content}
        </Typography>
        {hasButton && buttonLabel && <B4CButton label={buttonLabel} />}
      </Box>
    </Box>
  );
};
