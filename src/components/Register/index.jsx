import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import Buttons from "../../custom/Button";
import Input from "../../material/Input";
import RadioButton from "../../material/RadioButton";
import FileUploader from "../../custom/FileUploader";
import Form from './Form'
import styles from "./index.module.scss";
import * as axios from 'axios'


const Register = () => {

  const [positions, setPositions] = useState([])

  useEffect( () => {
    getPositions()
  }, [])

  const getPositions = async() => {
    const response = await axios.get('https://frontend-test-assignment-api.abz.agency/api/v1/positions')
    setPositions(response.data.positions)
    console.log(response.data)
  }


  return (
    <div className={styles.register__container}>
      <header className={styles.container__header}>
        <h1 className={styles.header__h1}>Working with POST request</h1>
      </header>
      <Form positions = {positions} />
      <div className={styles.register__radio}>
        </div>
      {/* <div className={styles.register__form}>
        <Input label="Your Name" />
        <Input label="Email" />
        <Input label="Phone" />
        <div className={styles.register__radio}>
          <RadioButton />
        </div>

        <FileUploader />

        <div className={styles.register__button}>
          <Buttons text={"Sign up"} disabled />
        </div>
      </div> */}
    </div>
  );
};

export default Register;
