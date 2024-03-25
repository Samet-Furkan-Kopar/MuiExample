import { Box, ImageList, ImageListItem, Typography } from '@mui/material'
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import React from 'react';

export default function Rightbar() {
  return (
    <Box flex={2} p={2} sx={{ display:{xs: "none", sm: "block"}}}>
     <Box position="fixed" alignItems="center" justifyItems={"center"}>
      <Typography variant='h6'  fontWeight={100}>Online Friends</Typography>
      <AvatarGroup sx={{ display: 'flex', justifyContent: 'center' }} max={4}>
      <Avatar alt="Remy Sharp" src="/images/avtr.png" />
      <Avatar alt="Travis Howard" src="/images/avtr.png" />
      <Avatar alt="Cindy Baker" src="/images/avtr.png" />
      <Avatar alt="Agnes Walker" src="/images/avtr.png" />
      <Avatar alt="Trevor Henderson" src="/images/avtr.png" />
    </AvatarGroup>
    <Typography variant='h6' fontWeight={100} gap={5}>Latest Photos</Typography>
    <ImageList cols={3} rowHeight={100}>
    <ImageListItem>
          <img
            src='https://images.unsplash.com/photo-1551782450-a2132b4ba21d'
            loading="lazy"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src='https://images.unsplash.com/photo-1522770179533-24471fcdba45'
            loading="lazy"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src='https://images.unsplash.com/photo-1558642452-9d2a7deb7f62'
            loading="lazy"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src='https://images.unsplash.com/photo-1533827432537-70133748f5c8'
            loading="lazy"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src='https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c'
            loading="lazy"
          />
        </ImageListItem>
    </ImageList>
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/images/avtr.png" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/images/avtr.png" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/images/avtr.png" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>

    </Box>
    </Box>
  )
}
