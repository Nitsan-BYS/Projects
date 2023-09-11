import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import { SelectedItemsProvider } from './Components/Provider/SelectedItemsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
      <SelectedItemsProvider>
         <Router>
            <App />
         </Router>
      </SelectedItemsProvider>
   </React.StrictMode>
);
