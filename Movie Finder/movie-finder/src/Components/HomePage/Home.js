import React from 'react';
import Scroller from '../Scroller/Scroller';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import MainScroller from './MainScroller';
import DefaultComponent from '../DefaultComp/DefaultComponent';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const Home = () => {
   const theme = useTheme();
   const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

   const typographyStyle = {
      color: 'white',
      marginLeft: '320px',
      marginTop: '20px',
      marginBottom: '20px',
   };

   return (
      <>
         {isSmallScreen ? (
            <h2
               style={{
                  marginLeft: '20%',
                  padding: '1%',
                  fontSize: '1.5rem',
               }}
            >
               <span style={{ color: 'red' }}>Popcorn </span>
               <span style={{ color: 'white' }}>Movie Hall</span>
            </h2>
         ) : (
            ''
         )}
         <DefaultComponent />
         <Box
            sx={{
               textAlign: 'center',
               marginTop: '30px',
               marginLeft: 'auto',
               marginRight: 'auto',
               borderRadius: '50px',
               width: '60%',
               minHeight: '40vh',
               color: 'white',
            }}
         >
            {/* Here's where the movie will appear */}
            <MainScroller />
         </Box>
         <Typography
            level='h3'
            sx={
               !isSmallScreen
                  ? { ...typographyStyle }
                  : { ...typographyStyle, marginLeft: '30%' }
            }
         >
            Coming Soon
         </Typography>
         <Scroller />
         {/* <Typography level='h3' sx={{ ...typographyStyle }}>
            Continue Watching
         </Typography>
         <Scroller /> */}
      </>
   );
};

export default Home;
