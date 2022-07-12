import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { createTheme, InputLabel } from "@mui/material";
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
          height: 54,
          fontSize: '1rem',
          lineHeight: '1.625rem',
        },
        
      }
    }
  }
})

console.log(theme)

export default function Input({ label = "Value", ...props }) {
  return (
    <ThemeProvider theme={theme}>
      
      <TextField 
        helperText={''}
        label={label}
        {...props}>
      </TextField>
    </ThemeProvider> 



  )}
    // <Box
    //   component="form"
    //   sx={{
        
    //     // "& .MuiTextField-root": {
    //     // marginTop: "-16px",
    //     marginBottom: "49px",
    //     border: "none",
    //     // width: {
    //     //   md: 380,
    //     //   sm: 290,
    //     //   xs: 100,
    //     // },
    //     // },
    //   }}
    //   noValidate
    //   autoComplete="off"
    // >
//     <ThemeProvider theme={theme}>

//       <div style={{marginBottom: "49px",
//           border: "none"
//         }}>
//         <TextField
//           id="outlined-basic"
//           InputLabelProps={{
//             border: "none",
//             fontFamily: "Nunito",
//             // padding: "12px 16px",
//             fontSize: '1rem'
//           }}
//           sx={{
//             // width: {
//             //   md: 380,
//             //   sm: 380,
//             //   xs: 328,
//             // },
//             height: 55,
//             outline: "false",
//             border: "none",
//             borderRadius: "4px",
//             border: "0.9px solid #D0CFCF",
//             width: 380,
//             // width:320,
//             "& label": {
//               // backgroundColor: 'red',
//               // padding: "0px 16px 0px 15px",
//               fontSize: "1rem",
//               lineHeight: "1.625rem",
//               // padding: "12px 16px",
//             },
//             // fontSize: "1rem",
//             // lineHeight: "1.3rem",
//             // width: {
//             //   md: 380,
//             //   sm: 280,
//             //   xs: 180,
//             // }
//             // ['@media (maxWidth:320px)']: { // eslint-disable-line no-useless-computed-key
//             //   backgroundColor: 'red'
//             // }
//           }}
//           InputProps={{
//             disableUnderline: true,
//             // height: 55,
//             fontSize: "1rem",
//             lineHeight: "1.625rem",
//             // padding: "0px 16px 20px 15px",
//             // style: style,
//             // width: {
//             //   md: 380,
//             //   sm: 290,
//             //   xs: 100,
//             // },
//           }}
//           {...props}
//           label={label}
//           variant="standard"
//         />
//       </div>
//     </ThemeProvider>

//     // </Box>
//   );
// }

// const style = {
//   border: "1px solid #D0CFCF",
//   outline: "false",
//   borderRadius: "4px",
//   width: 380,
//   // width:320,
//   padding: "12px 16px",
//   height: 55,
//   fontSize: "1rem",
//   lineHeight: "1.3rem",
//   ["@media (maxWidth:320px)"]: {
//     // eslint-disable-line no-useless-computed-key
//     backgroundColor: "red",
//   },
// }
