import './App.css';
import { Routes, Route } from 'react-router-dom'; //never import BrowserRouter here and in index.js - it's wrong
import NavBar from './Components/NavBar/NavBar';
import HomePage from './Pages/HomePage';
import Browse from './Pages/Browse';
import Watchlist from './Pages/Watchlist';
import LoadMore from './Pages/LoadMore';
import '@fortawesome/fontawesome-svg-core/styles.css';

const App = () => {
   return (
      <>
         <NavBar />
         <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/home' element={<HomePage />} />
            <Route path='/browse' element={<Browse />} />
            <Route path='/watchlist' element={<Watchlist />} />
            <Route path='/load_more' element={<LoadMore />} />
         </Routes>
      </>
   );
};

export default App;
