import { colorPalette } from "@/style/partials/colorPalette";
import { spacings } from "@/style/partials/spacings";
import { Box, Hidden, InputLabel, TextField, Typography } from "@mui/material";
import React, { ChangeEventHandler, FocusEventHandler } from "react";

interface IB4CTextfieldProps {
  disabled?: boolean;
  error?: boolean;
  helper?: string;
  id?: string;
  isMultiline?: boolean;
  label: string;
  placeholder?: string;
  touched?: boolean;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

export const B4CTextfield = ({
  disabled,
  error,
  helper,
  id,
  label,
  isMultiline,
  placeholder,
  touched,
}: IB4CTextfieldProps) => {
  return (
    <Box display="flex" flexDirection="column">
      <InputLabel htmlFor={id} sx={{ marginBottom: spacings.spacing1 }}>
        <Typography variant="body-normal-bold" color={colorPalette.black1}>
          {label}
        </Typography>
      </InputLabel>
      <TextField
        inputProps={{
          sx: {
            paddingBlock: "16px",
            paddingLeft: `${16 * 2}px`,
            "&::placeholder": {
              color: colorPalette.black1, // Modifica el color del placeholder
              opacity: 1,
              fontSize: "16px", // Modifica el estilo del placeholder
              // Otros estilos que desees aplicar al placeholder
            },
          },
        }}
        id={id}
        disabled={disabled}
        multiline={isMultiline}
        placeholder={placeholder}
      />

      {helper && (
        <Box display="flex" justifyContent="space-between" paddingTop="8px">
          {helper && (
            <Typography
              variant="body-small"
              color={error && touched ? colorPalette.error : colorPalette.grey4}
            >
              {helper}
            </Typography>
          )}
        </Box>
      )}
    </Box>
  );
};
