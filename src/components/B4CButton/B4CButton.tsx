import { Secondary } from "@/stories/Button.stories";
import { colorPalette } from "@/style/partials/colorPalette";
import { Size } from "@/ts/enums/Size";
import { ButtonColor } from "@/ts/types/ButtonColor";
import { Button, Typography } from "@mui/material";
import { MouseEventHandler } from "react";

interface IB4CButtonProps {
  label: string;
  disabled?: boolean;
  variant?: ButtonColor;
  size?: Size;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const B4CButton = ({
  variant = "primary",
  disabled,
  label,
  size = Size.Normal,
  onClick,
}: IB4CButtonProps) => {
  const sizes = {
    small: {
      paddingBlock: `14px`,
      paddingInline: `${14 * 5}px`,
    },
    normal: {
      paddingBlock: `16px`,
      paddingInline: `${16 * 5}px`,
    },
    medium: {
      paddingBlock: `18px`,
      paddingInline: `${18 * 5}px`,
    },
    large: {
      paddingBlock: `20px`,
      paddingInline: `${20 * 5}px`,
    },
  };
  return (
    <Button
      variant={variant}
      disabled={disabled}
      onClick={onClick}
      sx={{
        paddingInline: sizes[size].paddingInline,
        paddingBlock: sizes[size].paddingBlock,
        borderRadius: "8px",
      }}
    >
      <Typography
        variant={`body-${size}-bold`}
        sx={{ textTransform: "none", opacity: 0.8 }}
      >
        {label}
      </Typography>
    </Button>
  );
};
