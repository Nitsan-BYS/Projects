import React from 'react';
import Avatar from '@mui/joy/Avatar';
import Badge, { badgeClasses } from '@mui/joy/Badge';
import Sheet from '@mui/joy/Sheet';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';

const Watchlist = () => {
   const typographyStyle = {
      color: 'white',
      marginLeft: '40%',
      fontWeight: 'normal',
      fontSize: '30px',
   };

   return (
      <>
         <Sheet
            sx={{
               display: 'flex',
               flexDirection: 'row',
               justifyContent: 'space-evenly',
               width: '90%',
               marginLeft: '150px',
               marginTop: '50px',
               backgroundColor: 'transparent',
            }}
         >
            <Typography level='h3' sx={{ ...typographyStyle }}>
               Watchlist
            </Typography>
            {/* Show user's status */}

            <Box
               sx={{
                  //   border: '2px solid pink',
                  marginLeft: 'auto',
                  marginRight: '4%',
               }}
            >
               <Badge
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                  badgeInset='15%'
                  color='success'
                  sx={{
                     [`& .${badgeClasses.badge}`]: {
                        '&::after': {
                           position: 'absolute',
                           top: -0.85,
                           left: -1.5,
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
                  <Avatar variant='soft' src='/broken-image.jpg' size='lg' />
               </Badge>
            </Box>
         </Sheet>
      </>
   );
};

export default Watchlist;
