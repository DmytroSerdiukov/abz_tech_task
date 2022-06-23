import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Avatar } from '@mui/material';

export default function UserCard({title, content}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
        <Avatar alt="Remy Sharp" src="../../images/photo-cover.svg" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {content}
          </Typography>
        </CardContent>
    </Card>
  );
}