import './App.css';
import { Routes, Route } from 'react-router-dom'; //never import BrowserRouter here and in index.js - it's wrong
import NavBar from './Components/NavBar/NavBar';
import HomePage from './Pages/HomePage';
import BrowsePage from './Pages/BrowsePage';
import WatchlistPage from './Pages/WatchlistPage';
import LoadMore from './Pages/LoadMore';
import '@fortawesome/fontawesome-svg-core/styles.css';

const App = () => {
   return (
      <>
         <NavBar />
         <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/home' element={<HomePage />} />
            <Route path='/browse' element={<BrowsePage />} />
            <Route path='/watchlist' element={<WatchlistPage />} />
            <Route path='/load_more' element={<LoadMore />} />
         </Routes>
      </>
   );
};

export default App;
