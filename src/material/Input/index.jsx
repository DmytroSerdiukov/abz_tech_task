import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";


export default function Input({label = 'Value', ...props}) {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { fontSize: '1rem',
        marginTop: '-16px', 
        marginBottom: '49px', 
        border: 'none'
        },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField id="outlined-basic" 
        
        InputLabelProps={{
          style: { border: 'none',
          fontFamily: 'Nunito',
          padding: '12px 16px',
          zIndex: 1
        }
        }}
        InputProps={{disableUnderline: true, style: style}}
         {...props}  label={label} variant='standard'/>
      </div>
    </Box>
  );
}

const style = {
  border: '1px solid #D0CFCF',
  outline: 'false',
  borderRadius: '4px',
  width:380,
  height: 55,
  fontSize: '1rem',
  lineHeight: '1.3rem'
}
