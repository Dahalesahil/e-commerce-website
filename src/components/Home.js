// // // import React from 'react'
// // // import Grid from  '@mui/material/Grid';
// // // function Home() {
// // //   const productItems = [
// // //         {
// // //             id:"1",
// // //             Name:"Samosa",
// // //             Rs:30,
// // //            img:dosa.jpeg,
// // //         },
// // //         // {
// // //         //     id:"2",
// // //         //     Name:"aaluParatha",
// // //         //     Rs:50,
// // //         //    src:"jalebi.jpeg",
// // //         // },
// // //     ]



// import { Home } from "@mui/icons-material"

// // //     const cart = productItems.map((product) => {
// // //         <div key={product.id}>

// // //         </div>
// // //       });
// // // return(
// // //     <>
// // // <h1>hello</h1>

// // // <Grid>
// // //     {cart}
// // // </Grid>
// // // </>
// // // )
// // // }
// // // export default Home;

// // import React, { useState } from 'react'; 
// // import Navbar from "./Navbar";
// // import ImageList from '@mui/material/ImageList';
// // import ImageListItem from '@mui/material/ImageListItem';
// // import ImageListItemBar from '@mui/material/ImageListItemBar';
// // import Itemdata from './Itemdata';
// // function Home() {
// //   const [products, setProducts] = useState(Itemdata);
// //   const [cart, setCart] = useState([]);



// //   return (

// //     <>
// //       <Navbar cartItem={cart} />

// //       <ImageList sx={{ width: 1500, height: 600, }} style={{ marginLeft: '10px' }} cols={4} gap={50}>
// //         {products.map((item) => (
// //           <ImageListItem key={item.img}>
// //             <img
// //               src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
// //               srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
// //               alt={item.title}
// //               loading="lazy"
// //             />
// //             <ImageListItemBar
// //               title={item.title}
// //               subtitle={<span>₹: {item.Price}</span>}
// //               position="below"
// //             />
// //             <button onClick={(event) => setCart((prevProduct) => [...prevProduct, item])}>Add to Cart</button>
// //             {/* <button onClick={()=>{console.log("hello")}}>Add to Cart</button> */}
// //           </ImageListItem>

// //         ))}
// //       </ImageList>

// //     </>
// //   );
// // }
// // export default Home;


// import Header from './Header';
// import Itemdata from './Itemdata';
// import Addcart from './Addcart';
// import { useState } from 'react';


// function Home({ product,addToCart }) {
//     return (
//         <div className='flex'>
//             {
//                 product.map((productItem, productIndex) => {
//                     return (
//                         <div style={{ width: '33%' }}>
//                             <div className='product-item'>
//                                 <img src={productItem.img} width="100%" />
//                                 <p>{productItem. title} | {productItem.id} </p>

//                                 <p> Rs. {productItem.price} /-</p>
//                                 <button
//                                     onClick={() => addToCart(productItem)}
//                                 >Add To Cart</button>
//                             </div>
//                         </div>
//                     )
//                 })
//             }
//         </div>
//     )
// }

// export default Home;


import Button from '@mui/material/Button';
import {useSnackbar } from 'notistack';
import { Grid, Typography } from '@mui/material';
function Home({ product, addToCart }) {

  const { enqueueSnackbar } = useSnackbar()
    

  
 

  const addproducts = product.map((productItem, productIndex) => {
    
    return (

      <Grid item container xs={12} md={3} >
        <Grid item xs={12}>
          <img src={productItem.url} style={{ width: '100%', height: '200px' }} />
        </Grid>
        <Grid item xs={12}>
          <Typography>{productItem.name}  </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography> Rs. {productItem.price} /-</Typography>
        </Grid>

        <Grid item xs={12}>

          <Button variant="contained" color="success" onClick={() => { addToCart(productItem)} }>Add </Button>

        </Grid>
      </Grid>
    )
  })
  return (
    <Grid container spacing={3} p={5}>
      {addproducts}
    </Grid>
  )
}

export default Home;
