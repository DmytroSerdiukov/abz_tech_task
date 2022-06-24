import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Avatar } from "@mui/material";
import { textAlign } from "@mui/system";

export default function UserCard({ title, content }) {
  const { jobTitle, email, phone } = content;

  return (
    <Card sx={styles.card}>
      <Avatar
        sx={styles.avatar}
        alt="Remy Sharp"
        src="../../images/photo-cover.svg"
      />
      <CardContent>
        <Typography sx={styles.card__title} gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography sx={styles.card__content} variant="body2" color="text.secondary">
          <div>
            <div>{jobTitle}</div>
            <div>{email}</div>
            <div>{phone}</div>
          </div>
        </Typography>
      </CardContent>
    </Card>
  );
}

const styles = {
  card: {
    width: 282,
    height: 254,
    textAlign: "center",
    dispay: "flex",
    justifyContent: "center",
    padding: "20px",
    boxShadow: "none",
    fontFamily: 'Nunito',
    fontSize: '1rem',
    lineHeight: '1.625rem',
    fontWeight: 400,
  },
  avatar: {
    width: 70,
    height: 70,
    margin: "auto",
    marginBottom: '5px'
  },
  card__title: {
    paddingBottom:'0px',
    fontFamily: 'Nunito',
    fontSize: '1rem',
    lineHeight: '1.625rem',
    fontWeight: 400,
    color: 'back',
    marginBottom: '20px',
    textAlign: 'center'

  },
  card__content:{
    // margin: 0,
    fontFamily: 'Nunito',
    fontSize: '1rem',
    lineHeight: '1.625rem',
    fontWeight: 400,
    // flexWrap: 'no-wrap',
    // overflowX: 'hiden',
    color: 'back',
    padding: '0px',
    textAlign: 'center'

  },

};
