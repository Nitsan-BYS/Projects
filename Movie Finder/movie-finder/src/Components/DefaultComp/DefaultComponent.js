import React from 'react';
import Sheet from '@mui/joy/Sheet';
import Avatar from '@mui/joy/Avatar';
import styles from './DefaultComponent.module.css';
import Badge, { badgeClasses } from '@mui/joy/Badge';
import SearchBar from '../SearchBar/SearchBar';

const DefaultComponent = () => {
   const typographyStyle = {
      color: 'white',
      marginLeft: '320px',
      marginTop: '20px',
      marginBottom: '20px',
   };

   return (
      <Sheet
         sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: '50px',
            backgroundColor: 'transparent',
         }}
      >
         <SearchBar />
         {/* Show user's status */}
         <Badge
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            badgeInset='5%'
            color='success'
            sx={{
               [`& .${badgeClasses.badge}`]: {
                  '&::after': {
                     position: 'absolute',
                     top: -0.85,
                     left: -1.45,
                     width: '100%',
                     height: '100%',
                     borderRadius: '50%',
                     animation: 'ripple 1.2s infinite ease-in-out',
                     border: '2px solid',
                     borderColor: 'success.500',
                     content: '""',
                  },
               },
               '@keyframes ripple': {
                  '0%': {
                     transform: 'scale(1)',
                     opacity: 1,
                  },
                  '100%': {
                     transform: 'scale(2)',
                     opacity: 0,
                  },
               },
            }}
         >
            <Avatar
               variant='soft'
               className={styles.avatar}
               sx={{ marginLeft: '150px' }}
               src='/broken-image.jpg'
               size='lg'
            />
         </Badge>
         {/* Add an image to the avatar */}
         {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /> */}
      </Sheet>
   );
};

export default DefaultComponent;
