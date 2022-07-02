import React, { useContext, useEffect, useState } from "react";
import Form from './Form'
import styles from "./index.module.scss";
import * as axios from 'axios'
import { RegisterContext } from "../../context/RegisterContext";


const Register = () => {

  return (
    <div className={styles.register__container}>
      <Form /> 
    </div>
  );
};

export default Register;
