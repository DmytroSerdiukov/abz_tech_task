import React from "react";

import Description from './Description'
import Button from "../../custom/Button";
import { ReactComponent as Logo } from "../../images/Logo.svg";

import styles from "./index.module.scss";

const Header = (props) => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <Logo />
          </div>
          <div className={styles.container_buttons}>
            <Button  text="Users" />
            <Button  text="Sign up" />
          </div>
        </div>
      </header>
        <Description />
    </>
  );
};

export default Header;
