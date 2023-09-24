import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/home/home';
import Acrylic from './pages/products';
import Commission from './pages/commissions';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    {/* <Home /> */}
    <Commission />
    {/* <Acrylic /> */}
  </React.StrictMode>
);

