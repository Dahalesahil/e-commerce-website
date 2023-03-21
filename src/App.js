import React from "react";
import "./App.css";
import Login from './components/Login';
import Registration from "./components/Registration";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useForm } from 'react-hook-form';
import Firstpage from "./components/Firstpage";
import Itemdata from "./components/Itemdata";
import { useState } from 'react';
import Header from './components/Header';
import Logout from "./components/Logout";
import Orderconfirm from "./components/Orderconfirm";
import { SnackbarProvider, useSnackbar } from 'notistack';
import Products from "./components/Products";
import Get from './components/Get';
function App() {

  return (
   
    
    <Router>
      

      <>

        <Routes>
          <Route path='/' element={<Firstpage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/Registration' element={<Registration />} />
          <Route path='/Itemdata' element={<Itemdata />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Logout' element={<Logout />} />
          <Route path='/Orderconfirm' element={<Orderconfirm />} />
          <Route path='/Products/add' element={<Products />} />
          <Route path='/Products/edit/:id' element={<Products />} />
          <Route path='/Get' element={<Get />} />
          
          

        </Routes>
        
      </>
    </Router>

)

}

export default App;



// import './App.css';
// import Header from './components/Header';
// import  Home from './components/Home';
// import Addcart from './components/Addcart';
// import { useState } from 'react';

// function App() {

// //   const [product, setProduct] = useState([
//     {
//       url: 'https://rukminim1.flixcart.com/image/300/300/l51d30w0/shoe/z/w/c/10-mrj1914-10-aadi-white-black-red-original-imagft9k9hydnfjp.jpeg?q=70',
//       name: 'TRQ White Shoes',
//       category: 'Shoes',
//       seller: 'AMZ Seller Ghz',
//       price: 1999
//     },
//     {
//       url: 'https://5.imimg.com/data5/KC/PC/MY-38629861/dummy-chronograph-watch-500x500.jpg',
//       name: 'LOREM Watch Black',
//       category: 'Watches',
//       seller: 'Watch Ltd Siyana',
//       price: 2599
//     },
//     {
//       url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq39iB_cO6uhZ59vubrqVuYTJQH-4Qa0hU9g&usqp=CAU',
//       name: 'AMZ Laptop 8GB RAM',
//       category: 'Laptops',
//       seller: 'Delhi Laptops',
//       price: 50000
//     },
//     {
//       url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfvoDzLqrT7GwU3z7Ccp0Cl9rV0ZnU9DcmEg&usqp=CAU',
//       name: 'Security Camera',
//       category: 'CCTV',
//       seller: 'Camron LTD',
//       price: 4000
//     },
//     {
//       url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG9e8Axt-h9q8EIybKfjGzbkIWJAr50_BX7Q&usqp=CAU',
//       name: 'Watch Pink',
//       category: 'Watches',
//       seller: 'Watch Ltd',
//       price: 2000
//     },
//     {
//       url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9xzgtOpMxdpfgBOg3OKsEqYRkNBbuprJj4w&usqp=CAU',
//       name: 'Cup red Color',
//       category: 'Cup',
//       seller: 'ABS Ltd',
//       price: 100
//     },
//   ])

//   const [cart, setCart] = useState([])
//   const [showCart, setShowCart] = useState(false)

//   const addToCart = (data) => {
//     setCart([...cart, { ...data, quantity: 1 }])
//   }

//   const handleShow = (value) => {
//     setShowCart(value)
//   }

//   return (
//     <div>
//       <Header count={cart.length}
//         handleShow={handleShow} ></Header>

//       {
//         showCart ?
//           <Addcart cart={cart} ></Addcart> :
//           <Home product={product} addToCart={addToCart} ></Home>
//       }


//     </div>
//   );
// }

// export default App;