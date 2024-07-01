import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartContextProvider } from './components/CartContext/CartContext.jsx';
import Layout from './components/Routes/Routes.jsx';
import About from './components/About.jsx';
import { RouterProvider , createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([

{
        path: '/' ,
        element: <Layout />,
        children: [
            {
                path: "" , 
                element : <About />
            },
            {

            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <CartContextProvider>
        <RouterProvider  router = {router} >
        <App />
        </RouterProvider>
    
    </CartContextProvider>
);
