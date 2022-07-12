import React, { useContext, useState } from "react";

import Radio from "@mui/material/Radio";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";

import styles from "./index.module.scss";

import useRadio from "../../hooks/selectRadioButton";
import { RegisterContext } from "../../context/RegisterContext";

export default function RadioButtonsGroup() {
  const { selectedValue, onValueChange } = useRadio();
  const { positions } = useContext(RegisterContext);

  const getCurrentValue = (event) => {
    onValueChange(event.target.value);
  };

  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">
        Select your position
      </FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        {positions.map((el, i) => (
          <FormControlLabel
            key={el.id}
            value={el.name}
            label={el.name}
            control={
              <Radio
                size="medium"
                checked={selectedValue === el.name}
                onChange={onValueChange}
                value={el.name}
              />
            }
          />
        ))}
      </RadioGroup>
    </FormControl>
    // <FormControl classes={styles.radio__form} >
    //   <FormLabel
    //     sx={{marginBottom: '6px',
    //       fontSize: '1rem',
    //       lineHeight:'1.625rem',
    //       color: 'black',
    //       fontFamily: 'Nunito',
    //       fontWeight: 400
    //     }}
    //     id="demo-radio-buttons-group-label"
    //   >
    //     Select your position
    //   </FormLabel>
    //   <RadioGroup
    //     aria-labelledby="demo-radio-buttons-group-label"
    //     defaultValue="female"
    //     name="radio-buttons-group"
    //   >
    //     {positions.map((el, i) => (
    //       <FormControlLabel
    //         key={el.id}
    //         value={el.name}
    //         label={el.name}
    //         control={
    //           <Radio size="medium"
    //             checked={selectedValue === el.name}
    //             onChange={onValueChange}
    //             value={el.name}
    //             inputProps={{
    //               fontSize: '1rem',
    //               lineHeight:'1.625rem',
    //               color: 'black',
    //               fontFamily: 'Nunito',
    //               fontWeight: 400
    //             }}
    //             style={{ marginTop:'-6px', paddingBottom: 7, }}
    //           />}
    //       />
    //     ))}
    //   </RadioGroup>
    // </FormControl>
  );
}
