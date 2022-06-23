import React from "react";

import UserCard from "../../material/Card";
import Button from "../../custom/Button";

import styles from "./index.module.scss";

const users = [
  {
    title: "Salvador Stewart Flynn Thomas...",
    content:
      "Frontend Developer Frontend ... frontend_develop@gmail.com +38 (098) 278 44 24",
  },
  {
    title: "Takamaru Ayako Jurrien",
    content: "Lead Independent Director Takamuru@gmail.com +38 (098) 278 90 24",
  },
  {
    title: "Ilya ",
    content: "Co-Founder and CEO Ilya_founder@gmail.com +38 (098) 235 44 24",
  },
  {
    title: "Alexandre",
    content:
      "Lead Independent Director Alexandr_develop@gmail.com +38 (098) 198 44 24",
  },
  {
    title: "Winny",
    content:
      "Former Senior Director Winny_develop@gmail.com +38 (098) 278 22 88",
  },
  {
    title: "Simon",
    content: "President of Commerce Simon@gmail.com +38 (098) 278 44 00",
  },
];

const Users = () => {
  return (
    <div className={styles.users__container}>
      <header className={styles.users__header}>
        <h1 className={styles.header__title}>Working with GET request</h1>
      </header>
      <body className={styles.users__body}>
        {users.map((user, i) => (
          <UserCard title={user.title} content={user.content} />
        ))}
      </body>

      <div className={styles.users__button}>
        <Button text={"Show more"} />
      </div>
    </div>
  );
};

export default Users;
