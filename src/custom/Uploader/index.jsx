import React, { useEffect, useRef, useState } from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import { TextField, RaisedButtond } from '@mui/material';
import Input from '../../material/Input'

import uploader from './uploader.module.scss'

export default function Uploader({name, value}) {

  const input = useRef(null)
  const [file, setFile] = useState()

  const handleChange = (event) => {
    setFile(event.target.files[0])
    value = event.target.files[0]
    console.log('file', value)
  }

  return (<>
    <label>
      <div style={{display: 'flex', height:'54px', marginTop: '47px', marginBottom: '50px', overflow: 'hidden'}}>
        <div className={uploader.input__label}>Upload</div>
        <div className={uploader.input__field}>{ file?.name || 'Upload your file'}</div>
      </div>
      <div style={{display: 'none'}}>
        <Input name={name} ref={input} onChange={handleChange}  type='file' className={uploader.uploader__input}/>
      </div>
    </label>
    
</>
  );
}
