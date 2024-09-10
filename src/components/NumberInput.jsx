import TextField from "@mui/material/TextField";

const NumberInput = ({ label, min, max, name,onChange,value }) => {



  return (
    <TextField
      label={label}
      name={name}  
      variant="outlined"
      value={value}
      onChange={onChange}
      type="number"
      inputProps={{
        inputMode: "numeric",
        pattern: "[0-9]*",
        min: min,
        max: max,
      }}
      onKeyDown={(e) => {
        if (
          e.key === "e" ||
          e.key === "+" ||
          e.key === "-" ||
          e.key === "." ||
          e.key === "E" ||
          e.key === "_" ||
          e.key === "π" ||  
          e.key.toLowerCase() === "s" 
        ) {
          e.preventDefault();
        }
      }}
      sx={{ width: "100%", maxWidth: "120px" }} 
    />
  );
};

export default NumberInput;
