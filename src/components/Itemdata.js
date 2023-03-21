
// // import Home from "./Home"
// // import Header from "./Header"
// // import Addcart from"./Addcart"
// // import React,{useState} from 'react'
// // function Itemdata()  {
// //   const [product, setProduct] = useState([
// //   {
// //     img: 'poha.jpg',
// //     title: 'Poha',
// //     Price: 50,
// //   },
// //   {
// //     img: 'punjabi-samosa-indian-popular-street-food-punjabi-samosa-indian-popular-street-food-easily-available-every-part-123515979.jpg',
// //     title: 'Samosa',
// //     Price: 30,
// //   },
// //   {
// //     img: 'misal.jpg',
// //     title: 'Misal',
// //     Price: 100,
// //   },
// //   {
// //     img: 'raj kachori.jpeg',
// //     title: 'Raj Kachori',
// //     Price: 120,
// //   },
// //   {
// //     img: 'pizza.jpg',
// //     title: 'Pizza',
// //     Price: 150,

// //   },
// //   {
// //     img: 'pulao.jpg',
// //     title: 'Pulao',
// //     Price: 160,
// //   },
// //   {
// //     img: 'noodles.jpg',
// //     title: 'Noodles',
// //     Price: 90,
// //   },
// //   {
// //     img: 'upma.jpg',
// //     title: 'Upma',
// //     Price: 50,
// //   },

// // ])
// // const [CART, setCART] = useState([])
// //   const [showCart, setShowCart] = useState(false)

// //   const addToCart = (data) => {
// //     setCART([...CART, { ...data, quantity: 1 }])
// //   }

// //   const handleShow = (value) => {
// //     setShowCart(value)
// //   }
// //   return (
// //     <div>
// //       <Header count={CART.length}
// //         handleShow={handleShow} ></Header>

// //       {
// //         showCart ?
// //           <Addcart cart={CART} ></Addcart> :
// //           <Home product={product} addToCart={addToCart} ></Home>
// //       }


// //     </div>
// //   );

// // }
// // export default Itemdata;


import Header from './Header';
import Home from './Home';
import Addcart from './Addcart';
import { useState } from 'react';
//import Navbarr from './navbarr';
import Navbar from './Navbar';
import {useSnackbar } from 'notistack';


function Itemdata() {

  const { enqueueSnackbar } = useSnackbar()
  const [product, setProduct] = useState([
    {
      id:1,
      url: 'poha.jpg',
      name: ' Indori Poha',
      category: '',
      quantity:1,
    
      price: 50
    },
    {
      id:2,
      url: 'upma.jpg',
      name: 'Upma',
      category: 'Watches',
      quantity:1,
     
      price: 50
    },
    {
      id:3,
      url: 'misal.jpg',
      name: 'Misal Pav',
      category: '',
      quantity:1,
     
      price: 100
    },
    {
      id:4,
      url: 'pulao.jpg',
      name: 'Tawa Pulao',
      category: '',
      quantity:1,
      
      price: 90
    },
    {
      id:5,
      url: 'noodles.jpg',
      name: 'Noodles',
      category: '',
      quantity:1,
      
      price: 120
    },
    {
      id:6,
      url: 'punjabi-samosa-indian-popular-street-food-punjabi-samosa-indian-popular-street-food-easily-available-every-part-123515979.jpg',
      name: 'Samosa',
      category: '',
      quantity:1,
   
      price: 30
    },
    {
      id:7,
      url: 'pizza.jpg',
      name: 'Pizza',
      category: '',
      quantity:1,
      price: 160
    },
    {
      id:8,
    
      url: 'wadapav.jpg',
      name: 'Wadapav',
      category: '',
      quantity:1,
      price: 30
    },
    {
      id:9,
    
      url: 'beef burger.jpg',
      name: 'Beef Burger',
      category: '',
      quantity:1,
      price: 80
    },
    {
      id:10,
    
      url: 'cold coffee frappuccion.jpg',
      name: 'cold coffee frappuccion',
      category: '',
      quantity:1,
      price: 150
    },
    {
      id:11,
    
      url: 'MethiThepla.jpg',
      name: 'Methi Thepla',
      category: '',
      quantity:1,
      price: 70
    },
    {
      id:12,
    
      url: 'Traditional Dumpling Momos.jpg',
      name: 'Traditional Dumpling Momos',
      category: '',
      quantity:1,
      price: 110
    },
    {
      id:13,
    
      url: 'Paneer spring roll.jpg',
      name: 'Paneer spring roll',
      category: '',
      quantity:1,
      price: 80
    },
    {
      id:14,
    
      url: 'sandwhich.jpg',
      name: 'Sandwich',
      category: '',
      quantity:1,
      price: 60
    },
    {
      id:15,
    
      url: 'Manchu.jpg',
      name: 'Manchuriyan',
      category: '',
      quantity:1,
      price: 90
    },
    {
      id:16,
    
      url: 'Manchuriyan hakka noodles.jpg',
      name: 'Manchuriyan hakka noodles',
      category: '',
      quantity:1,
      price: 100
    },
    
  ])

  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)

  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }])
    const itemIndex = cart.findIndex((cartItem) => cartItem.id === data.id);
    if (itemIndex !== -1) {
      const updatedCartItems = [...cart];
      updatedCartItems[itemIndex].quantity++;
      setCart(updatedCartItems);
      enqueueSnackbar('Item already Added', { variant: "warning" ,anchorOrigin:{vertical:'top',horizontal:'center'} })

    } else {
      setCart([...cart, { ...data }]);
      enqueueSnackbar('Item   Added', { variant: "success" ,anchorOrigin:{vertical:'top',horizontal:'center'} })

    }
  }
  const handleShow = (value) => {debugger
    setShowCart(value)
  }

  
  return (
   
<>
   
  
      <Navbar count={cart.length}
        handleShow={handleShow} ></Navbar>

      {
        showCart ?
          <Addcart cart={cart}  setCart={ setCart} ></Addcart> :
          <Home product={product} addToCart={addToCart} ></Home>
      }

</>
   
    
  )
  }

     
export default Itemdata;
