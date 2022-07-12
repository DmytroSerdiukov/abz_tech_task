import React from "react";
import styles from "./index.module.scss";

const Button = ({
  text = "Text",
  disabled = false,
  css = {},
  fn,
  type = "submit",
}) => {
  return (
    <button
      onClick={fn}
      style={css}
      disabled={disabled}
      className={styles.button}
      type={type}
    >
      {text}
    </button>
  );
};

export default Button;
