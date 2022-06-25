import React from "react";

import UserCard from "../../custom/Card";
import Button from "../../custom/Button";

import styles from "./index.module.scss";


const users = [
  {
    title: "Salvador Stewart Flynn Thomas Salva...",
    content: {
      jobTitle: 'Leading specialist of the department of c...',
      email: 'JeromeKlarkaJeromeKlarka1923362362...',
      phone: '+38 (098) 278 76 24'
    }
  },
  {
    title: "Takamaru Ayako Jurrien",
    content: {
      jobTitle: 'Lead Independent Director',
      email: 'Takamuru@gmail.com',
      phone: '+38 (098) 278 90 24'
    }
  },
  {
    title: "Ilya ",
    content: {
      jobTitle: 'Co-Founder and CEO',
      email: 'Ilya_founder@gmail.com',
      phone: '+38 (098) 235 44 24'
    }
  },
  {
    title: "Alexandre",
      content: {
        jobTitle: 'Lead Independent Director',
        email: 'Alexandr_develop@gmail.com',
        phone: '+38 (098) 198 44 24'
      }
  },
  {
    title: "Winny",
      content: {
        jobTitle: 'Former Senior Director',
        email: 'Winny_develop@gmail.com',
        phone: '+38 (098) 278 22 88'
      }
  },
  {
    title: "Simon",
    content: {
      jobTitle: 'President of Commerce',
      email: 'Simon@gmail.com',
      phone: '+38 (098) 278 44 00'
    }
  },
  
];

const Users = () => {
  return (
    <div className={styles.users__container}>
      <header className={styles.users__header}>
        <h1 className={styles.header__title}>Working with GET request</h1>
      </header>
      <body className={styles.users__body}>
        {users.map((user, index) => (
          <UserCard key={index} title={user.title} content={user.content} />
        ))}
      </body>

      <div className={styles.users__button}>
        <Button style={{width: '120px'}} text={"Show more"} />
      </div>
    </div>
  );
};

export default Users;
