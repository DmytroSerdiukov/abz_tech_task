import * as React from "react";
import TextField from "@mui/material/TextField";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";


const theme = createTheme({
  typography: {
    fontSize: '1rem',
    fontFamily: 'Nunito'
  },
  
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          width: {
            md: 380,
            sm: 328,
            xs: 328
          },
          border: '1px solid #D0CFCF',
          borderRadius: '4px',
          height: 54,
          fontSize: '1rem',
          lineHeight: '1.625rem',
          disableUnderLine: true,
          '& label': {
            top: -4.5,
            left: 15,
          },
          '& input': {
            paddingLeft: 15
          }
        },    
      }
    }
  }
})

export default function Input({ label = "Value", ...props }) {
  return (
    <ThemeProvider theme={theme}>
      <TextField 
        variant="standard"
        InputProps={{disableUnderline: true,}}
        helperText={''}
        label={label}
        {...props}>
      </TextField>
    </ThemeProvider> 
  )}