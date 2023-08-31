const [showMoviesComp, setShowMoviesComp] = useState(false);

const handleGetMoviesClick = () => {
   setShowMoviesComp(true);
};

<div className='App'>
   <Sheet
      variant='plain'
      sx={{
         width: 800,
         mx: 'auto',
         display: 'flex',
         flexDirection: 'row',
         gap: 2,
         justifyContent: 'center',
         backgroundColor: 'transparent',
      }}
   >
      <Button variant='soft' onClick={handleGetMoviesClick}>
         Get A Movie/All Movies
      </Button>
      <Button variant='soft'>Update A Movie</Button>
      <Button variant='soft'>Add New Movie</Button>
      <Button variant='soft'>Delete A Movie</Button>
   </Sheet>
   {showMoviesComp && <GetMovies />}
</div>;
