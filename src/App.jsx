import React from 'react'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import Shop from './pages/Shop';
import Product from './pages/Product';
import Contact from './pages/Contact';
import About from './pages/About';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Card from './pages/Card';
import Cheakout from './pages/Cheakout';



import Error from './pages/Error';
import RootPage from './pages/RootPage';
import Journal from './pages/Journal';



const router = createBrowserRouter(
  createRoutesFromElements(
    <>
   <Route
    path="/"
    element={<RootPage />}>
   <Route
      path="/"
      element={<Home />}>
      </Route>
    <Route
      path="shop"
      element={<Shop />}>
      </Route>
    <Route
      path="product"
      element={<Product />}>
      </Route>
    <Route
      path="contact"
      
      element={<Contact />}>
      </Route>
    
    <Route
      path="about"
      
      element={<About />}>
      </Route>
    
    <Route
      path="login"
      
      element={<Login />}>
      </Route>
    <Route
      path="signup"
      
      element={<Signup />}>
      </Route>
    <Route
      path="card"
      
      element={<Card />}>
      </Route>
    <Route
      path="cheakout"
      
      element={<Cheakout />}>
      </Route>
    <Route
      path="journal"
      
      element={<Journal />}>
      </Route>
   

   
   
    <Route
      path="/*"
      
      element={<Error />}>
      </Route>
   </Route>
    
   
   
      </>
  )
);


const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
