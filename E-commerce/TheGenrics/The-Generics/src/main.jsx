import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartContextProvider } from './components/CartContext/CartContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <CartContextProvider>
        <App />
    </CartContextProvider>
);
