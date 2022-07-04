import React, { useEffect, useRef } from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import { TextField, RaisedButtond } from '@mui/material';
import Input from '../../material/Input'

import styles from './index.module.scss'



export default function Uploader() {

  useEffect( () =>console.log('file value',file.current) )
  const file = useRef(null)
  if(file)
    console.log('file value',file.value)
  return (<>
    <label>
      <div style={{display: 'flex', height:'54px', marginTop: '14px', marginBottom: '50px', overflow: 'hidden'}}>
        <div className={styles.input__label}>Upload</div>
        <div className={styles.input__field}>Upload your file</div>
      </div>
      <div style={{display: 'none'}}>
        <Input ref={file}  type='file' className={styles.uploader__input}/>
      </div>
    </label>
    
</>
  );
}
