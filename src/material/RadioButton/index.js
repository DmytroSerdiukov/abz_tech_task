import {
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
} from "@mui/material";
import React from "react";
import styles from './index.module.scss'


const Radio = ({ name, value }) => {
  return (
    <div>
      <input type="radio" id="contactChoice1" name={name} value={value} />
      <label for="contactChoice1">{name}</label>
    </div>
  );
};

const RadioButton = () => {
  return (
    <form className={styles.radio__form}>
      <p className={styles.form__header}>Select your position</p>
      <div className={styles.radio__list}>
        <Radio name="Front-Developer" value="10" />
        <Radio name="Backend developer" value="10" />
        <Radio name="Designer" value="10" />
        <Radio name="QA" value="10" />

        {/* <input type="radio" id="contactChoice1" name="contact" value="email" />
        <label for="contactChoice1">F</label>
        <input type="radio" id="contactChoice1" name="contact" value="email" />
        <label for="contactChoice1">Email</label>
        <input type="radio" id="contactChoice1" name="contact" value="email" />
        <label for="contactChoice1">Email</label>
        <input type="radio" id="contactChoice1" name="contact" value="email" />
        <label for="contactChoice1">Email</label>
        <input type="radio" id="contactChoice1" name="contact" value="email" />
        <label for="contactChoice1">Email</label> */}
      </div>
    </form>
  );

  //   <FormControl>
  //   <FormLabel id="demo-radio-buttons-group-label">Select your position</FormLabel>
  //   <RadioGroup
  //     aria-labelledby="demo-radio-buttons-group-label"
  //     defaultValue="female"
  //     name="radio-buttons-group"
  //   >
  //     <FormControlLabel value="Frontend developer" control={<Radio />} label="Frontend developer" />
  //     <FormControlLabel value="Backend developer" control={<Radio />} label="Backend developer" />
  //     <FormControlLabel value="Designer" control={<Radio />} label="Designer" />
  //     <FormControlLabel value="QA" control={<Radio />} label="QA" />
  //   </RadioGroup>
  // </FormControl>
};

export default RadioButton;
