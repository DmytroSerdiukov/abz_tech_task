import * as React from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import { TextField, RaisedButtond } from '@mui/material';
import Input from '../../material/Input'

import styles from './index.module.scss'



export default function UploadButtons() {
  return (<>
    {/* // <Button styles={{padding: '14px 15px', border: '1px solid black'}}> 
    //     Upload
    //     <TextField type='file'></TextField>
    // </Button>
    
    // <div style={{display: 'flex', flexDirection:'row'}}>
    //     <Button variant='outlined' style={{borderRadius: '0px'}}>Upload</Button>
    //     <TextField  style={{display: 'none'}} type='file' />
    // </div> */}
    <label className={styles.unploader__container}>
      <div style={{display: 'flex'}}>
        <div className={styles.input__label}>Upload</div>
        <div className={styles.input__field}>Upload your file</div>
      </div>
      <div>
        <Input type='file' className={styles.uploader__input}/>
      </div>
    </label>
    
</>
  );
}
