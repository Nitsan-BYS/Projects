import React from 'react';
import Scroller from '../Scroller/Scroller';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import MainScroller from './MainScroller';
import DefaultComponent from '../DefaultComp/DefaultComponent';

const Home = () => {
   const typographyStyle = {
      color: 'white',
      marginLeft: '320px',
      marginTop: '20px',
      marginBottom: '20px',
   };

   return (
      <>
         <DefaultComponent />
         <Box
            sx={{
               textAlign: 'center',
               marginTop: '30px',
               marginLeft: 'auto',
               marginRight: 'auto',
               // border: '1px solid #ccc',
               borderRadius: '50px',
               width: '60%',
               minHeight: '40vh',
               color: 'white',
            }}
         >
            <MainScroller />
            {/* Here's where the movie will appear */}
         </Box>
         <Typography level='h3' sx={{ ...typographyStyle }}>
            Coming Soon
         </Typography>
         <Scroller />
         <Typography level='h3' sx={{ ...typographyStyle }}>
            Continue Watching
         </Typography>
         <Scroller />
      </>
   );
};

export default Home;
