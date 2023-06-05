import * as React from "react";
import { useEffect } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

interface MUIBasicSelectProps {
  chainDataToParent: (data: string) => void;
}

export default function MUIBasicSelect({
  chainDataToParent,
}: MUIBasicSelectProps) {
  const [chain, setChain] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setChain(event.target.value as string);
  };

  useEffect(() => {
    chainDataToParent(chain);
  }, [chain]);

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Chain</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={chain}
          label="Chain"
          onChange={handleChange}
        >
          <MenuItem value={"ETH"}>Ethereum</MenuItem>
          <MenuItem value={"MATIC"}>Polygon</MenuItem>
          <MenuItem value={"BNB"}>Binance Smart Chain</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
