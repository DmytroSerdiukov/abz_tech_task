import React, { useEffect, useState } from "react";

import UserCard from "../../custom/Card";
import Button from "../../custom/Button";

import styles from "./index.module.scss";
import * as axios from "axios";
import Loader from "../../custom/Loader";

//for debug
// const data = [
//   {
//     name: "Salvador Stewart Flynn Thomas Salva...",
//       position: 'Leading specialist of the department of c...',
//       email: 'JeromeKlarkaJeromeKlarka1923362362...',
//       phone: '+38 (098) 278 76 24'
//   },
//   {
//     name: "Takamaru Ayako Jurrien",
//       position: 'Lead Independent Director',
//       email: 'Takamuru@gmail.com',
//       phone: '+38 (098) 278 90 24'
//   },
//   {
//     name: "Ilya ",
//       position: 'Co-Founder and CEO',
//       email: 'Ilya_founder@gmail.com',
//       phone: '+38 (098) 235 44 24'
//   },
//   {
//     name: "Alexandre",
//         position: 'Lead Independent Director',
//         email: 'Alexandr_develop@gmail.com',
//         phone: '+38 (098) 198 44 24'
//   },
//   {
//     name: "Winny",
//         position: 'Former Senior Director',
//         email: 'Winny_develop@gmail.com',
//         phone: '+38 (098) 278 22 88'
//   },
//   {
//     name: "Simon",
//     position: 'President of Commerce',
//     email: 'Simon@gmail.com',
//     phone: '+38 (098) 278 44 00'
//   },
// ];

const Users = () => {

  useEffect( () => {
    getMoreUsers()
  }, [])

  const [users, setUsers] = useState([])
  const [page, setPage] = useState(1)
  const [isFetching, setFetching] = useState(false)

  const getMoreUsers = async() => {
    setFetching(true)
    const response = await axios.get(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=6`)
    const newUsers = response.data.users
    setPage(page+1)
    setUsers([...newUsers, ...users])
    setFetching(false)
  }

  return (
    <div className={styles.users__container}>
      <header className={styles.users__header}>
        <h1 className={styles.header__title}>Working with GET request</h1>
      </header>
      <body className={styles.users__body}>
        {users.map((user, index) => (
          <UserCard key={index} 
            photo={user.photo}
            name={user.name}
            position={user.position}
            email={user.email}
            phone={user.phone}
          />
        ))}
      </body>
      {isFetching ? <Loader /> : 
      <div className={styles.users__button}>
        <Button  fn={getMoreUsers} style={{width: '120px'}} text={"Show more"} />
      </div>}
    </div>
  );
};

export default Users;
