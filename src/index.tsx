import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/home/home';
import Acrylic from './pages/products';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Home />
    {/* <Acrylic /> */}
  </React.StrictMode>
);

