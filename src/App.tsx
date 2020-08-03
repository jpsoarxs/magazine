import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';

import { CartProvider } from './hooks/CartContext';

import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <BrowserRouter>
    <CartProvider>
      <Routes />
    </CartProvider>
    <GlobalStyle />
  </BrowserRouter>
);

export default App;
