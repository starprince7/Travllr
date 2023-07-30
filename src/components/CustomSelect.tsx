import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

type Props = {
  items: string[];
  label: string;
  value?: string;
  onChange?: (e: SelectChangeEvent<string>) => void;
};

export default function CustomSelect({
  items,
  label,
  value,
  onChange = () => {},
}: Props) {
  return (
    <FormControl fullWidth sx={{ my: 1.5 }}>
      <InputLabel
        sx={{
          fontWeight: 300,
          color: "white",
          "&.Mui-focused": {
            color: "white",
          },
        }}
      >
        {label}
      </InputLabel>
      <Select
        required
        label={label}
        value={value}
        onChange={onChange}
        sx={{ color: "#fffc", borderRadius: 4 }}
      >
        {items.map((item, index) => (
          <MenuItem key={index} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
