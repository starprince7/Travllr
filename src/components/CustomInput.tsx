import { FormControl, Input, InputLabel, TextField } from "@mui/material";
import { ChangeEvent } from "react";

type Props = {
  label: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

export default function CustomInput({
  label,
  value,
  onChange = () => {},
}: Props) {
  return (
    <FormControl fullWidth sx={{ my: 1.5 }}>
      <InputLabel>{label}</InputLabel>
      <Input
        type="text"
        value={value}
        onChange={onChange}
        color="error"
        sx={{ borderRadius: 4 }}
      />
    </FormControl>
  );
}
