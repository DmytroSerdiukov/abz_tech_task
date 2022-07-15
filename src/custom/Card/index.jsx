import React from "react";

import Tooltip from "../Tooltip";
import PhotoCover from "../../images/photo-cover.svg";

import styles from "./index.module.scss";


const UserCard = (props) => {
  const { photo, name, position, email, phone } = props;

  const addDefaultSrc = (event) => {
    event.target.src = PhotoCover;
  };

  return (
    <div className={styles.card__container}>
      <img
        className={styles.card__avatar}
        onError={addDefaultSrc}
        src={photo}
        alt=""
      />
      <div style={{ paddingTop: "20px" }}>
        <Tooltip>{name}</Tooltip>
      </div>
      <div style={{ paddingTop: "20px" }}>
        <Tooltip>{position}</Tooltip>
        <Tooltip>{email}</Tooltip>
        <Tooltip>{phone}</Tooltip>
      </div>
    </div>
  );
};

export default UserCard;
