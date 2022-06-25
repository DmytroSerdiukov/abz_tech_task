import React from "react";
import styles from "./index.module.scss";

import PhotoCover from "../../images/photo-cover.svg";

//if jobTitle.length > 25 then
//
const ToolTip = ({ children, css, visibleSymbolsCount = 30 }) => {
  if (children.length > visibleSymbolsCount)
    return (
      <span className={css || {}}>
        {children.slice(0, visibleSymbolsCount) + "..."}
        <span className={styles.card__tooltip}>{children}</span>
      </span>
    );
  else return <span className={css || {}}>{children}</span>;
};

const UserCard = ({ title, content }) => {
  const { jobTitle, email, phone } = content;

  return (
    <div className={styles.card__container}>
      <img className={styles.card__avatar} src={PhotoCover} alt="Avatar" />
      <h1 className={styles.card__title}>
        <ToolTip>
            {title}
        </ToolTip>
      </h1>
      <div className={styles.card__content}>
        <ToolTip css={styles.content__jobTitle}        >
            {jobTitle}
        </ToolTip>
        <ToolTip css={styles.content__jobTitle}>
            {email}
        </ToolTip>
        <ToolTip css={styles.content__phone}>
            {phone}
        </ToolTip>
        {/* <span className={styles.content__jobTitle}>
        </span> */}
        {/* <span className={styles.content__email}>{email}</span> */}
        {/* <span className={styles.content__phone}>{phone}</span> */}
      </div>
    </div>
  );
};

export default UserCard;
