import React from "react";
import Button from "../../custom/Button";
import Input from "../../material/Input";
import RadioButton from "../../material/RadioButton";

import styles from "./index.module.scss";

const Register = () => {
  return (
    <div className={styles.register__container}>
      <header className={styles.container__header}>
        <h1 className={styles.header__h1}>Working with POST request</h1>
      </header>
      <div className={styles.register__form}>
        <Input label="Your Name"/>
        <Input label="Email" />
        <Input label="Phone" />
        <RadioButton />
        <div className={styles.register__button}>
            <Button text={'Sign up'} disabled/>
        </div>
      </div>
    </div>
  );
};

export default Register;
