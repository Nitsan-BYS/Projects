import React from 'react';
import styles from './Home.module.css';
import SearchBar from '../SearchBar/SearchBar';
import Scroller from '../Scroller/Scroller';
import Sheet from '@mui/joy/Sheet';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Badge, { badgeClasses } from '@mui/joy/Badge';

const Home = () => {
   const commonTypographyStyle = {
      color: 'white',
      marginLeft: '320px',
      marginTop: '20px',
      marginBottom: '20px',
   };

   return (
      <>
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
         <Box
            sx={{
               textAlign: 'center',
               marginTop: '30px',
               marginLeft: 'auto',
               marginRight: 'auto',
               border: '1px solid #ccc',
               borderRadius: '50px',
               width: '60%',
               minHeight: '40vh',
               color: 'white',
            }}
         >
            Here's where the movie will appear
         </Box>
         <Typography level='h3' sx={{ ...commonTypographyStyle }}>
            Coming Soon
         </Typography>
         <Scroller />
         <Typography level='h3' sx={{ ...commonTypographyStyle }}>
            Continue Watching
         </Typography>
         {/* <Scroller /> */}
      </>
   );
};

export default Home;
