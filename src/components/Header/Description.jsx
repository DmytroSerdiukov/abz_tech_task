import React from "react";

import Button from "../../custom/Button";

import styles from './description.module.scss'


const Description = () => {
  return (
    <div className={styles.description__background}>
    <div className={styles.description}>
      <h1 className={styles.description__header}>Test assignment for front-end developer</h1>
      <p className={styles.description__content}>
        What defines a good front-end developer is one that has skilled
        knowledge of HTML, CSS, JS with a vast understanding of User design
        thinking as they'll be building web interfaces with accessibility in
        mind. They should also be excited to learn, as the world of Front-End
        Development keeps evolving.
      </p>
      <div className={styles.description__button}>
      <Button text="Sign up"/>

      </div>
    </div>
    </div>

  );
};

export default Description
