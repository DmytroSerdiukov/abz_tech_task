import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import React from 'react'


const RadioButton = () => {
    return <FormControl>
    <FormLabel id="demo-radio-buttons-group-label">Select your position</FormLabel>
    <RadioGroup
      aria-labelledby="demo-radio-buttons-group-label"
      defaultValue="female"
      name="radio-buttons-group"
    >
      <FormControlLabel value="Frontend developer" control={<Radio />} label="Frontend developer" />
      <FormControlLabel value="Backend developer" control={<Radio />} label="Backend developer" />
      <FormControlLabel value="Designer" control={<Radio />} label="Designer" />
      <FormControlLabel value="QA" control={<Radio />} label="QA" />
    </RadioGroup>
  </FormControl>
}

export default RadioButton