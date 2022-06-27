import React from "react";
import styles from "./index.module.scss";

import PhotoCover from "../../images/photo-cover.svg";


const Loader = () => {
  return <div className={styles.card__loader}>

  </div>
}

//if jobTitle.length > 25 then
//
const ToolTip = ({ children, css, visibleSymbolsCount = 30 }) => {
  if (children.length > visibleSymbolsCount)
    return (
      <div className={css || {}}>
        {children.slice(0, visibleSymbolsCount) + "..."}
        <div className={styles.card__tooltip}>{children}</div>
      </div>
    );
  else return <span className={css || {}}>{children}</span>;
};

const UserCard = (props) => {
  console.log(props)
  const {photo, name, position, email, phone } = props

  return (
    <div className={styles.card__container}>
      {photo ? <img className={styles.card__avatar} src={photo} alt="Avatar" /> :      
      <img className={styles.card__avatar} src={PhotoCover} alt="Avatar" /> }
      <h1 className={styles.card__title}>
        <ToolTip visibleSymbolsCount={25}>
            {name}
        </ToolTip>
      </h1>
      <div className={styles.card__content}>
        <ToolTip
          visibleSymbolsCount={30}
        >
            {position}
        </ToolTip>
        <ToolTip css={styles.content__email}
          visibleSymbolsCount={25}
        >
            {email}
        </ToolTip>
        <ToolTip css={styles.content__phone}>
            {phone}
        </ToolTip>
      </div>
    </div>
  );
};

export default UserCard;
