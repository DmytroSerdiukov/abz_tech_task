import React, { useContext } from "react";

import Radio from "@mui/material/Radio";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";

import { RegisterContext } from "../../context/RegisterContext";

import styles from './index.module.scss'

export default function RadioButtonsGroup() {
  const {positions} = useContext(RegisterContext);
  return (
    <FormControl classes={styles.radio__form} >
      <FormLabel sx={{marginBottom: '0px'}} id="demo-radio-buttons-group-label" >
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
            control={<Radio size="small" sx={{fontSize: '120px'}}/>}
            label={el.name}
            
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}