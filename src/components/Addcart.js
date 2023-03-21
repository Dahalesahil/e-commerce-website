// import { useEffect, useState } from 'react';


// function Addcart({ cart }) {

//     const [CART, setCART] = useState([])

//     useEffect(() => {
//         setCART(cart)
//     }, [cart])

//     return (
//         <div>
//             {
//                 CART?.map((cartItem, cartindex) => {
//                     return (
//                         <div>
//                             <img src={cartItem.url} width={40} />
//                             <span> {cartItem.name} </span>
//                             <button
//                                 onClick={() => {
//                                     const _CART = CART.map((item, index) => {
//                                         return cartindex === index ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 } : item
//                                     })
//                                     setCART(_CART)
//                                 }}
//                             >-</button>
//                             <span> {cartItem.quantity} </span>
//                             <button
//                                 onClick={() => {
//                                     const _CART = CART.map((item, index) => {
//                                         return cartindex === index ? { ...item, quantity: item.quantity + 1 } : item
//                                     })
//                                     setCART(_CART)
//                                 }}
//                             >+</button>
//                             <span> Rs. {cartItem.price * cartItem.quantity} </span>
//                         </div>
//                     )
//                 })
//             }

//             <p> Total  <span></span>
//                 {
//                     CART.map(item => item.price * item.quantity).reduce((total, value) => total + value, 0)
//                 }
//             </p>
//         </div >
//     )
// }

// export default Addcart;



import { Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import {Link} from 'react-router-dom';
import { useSnackbar } from 'notistack';



function Addcart({ cart , setCart}) {
    
    const [CART, setCART] = useState(cart)
    const { enqueueSnackbar } = useSnackbar()
    const handleRemoveItem = ( cartindex) => {
        const newItems = [...CART];
        newItems.splice( cartindex, 1);
        setCART(newItems);
        setCart(newItems);
        
      };

    // useEffect(() => {
    //     setCART(cart)
    // }, [cart])

    return (
        <Grid item container xs={12} md={3}>
            {
                CART?.map((cartItem, cartindex) => {
                    return (
                        <Grid item xs={12}>
                            <img src={cartItem.url} width={200} />
                            <span> {cartItem.name} </span>
                            <button
                                onClick={() => {
                                    const _CART = CART.map((item, index) => {
                                        return cartindex === index ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 } : item
                                    })
                                    setCART(_CART)
                                }}
                            >-</button>
                            <span> {cartItem.quantity} </span>
                            <button
                                onClick={() => {
                                    const _CART = CART.map((item, index) => {
                                        return cartindex === index ? { ...item, quantity: item.quantity + 1 } : item
                                    })
                                    setCART(_CART)
                                }}
                            >+</button>
                            <span> Rs. {cartItem.price * cartItem.quantity} </span>
                            <Button variant="outlined" startIcon={<DeleteIcon />} onClick={() => handleRemoveItem( cartindex)}> Remove</Button>
                        </Grid>
                    )
                })
            }

            <Typography> Total  <span></span>
                {
                    CART.map(item => item.price * item.quantity).reduce((total, value) => total + value, 0)

                }
            </Typography>
            <Grid >
            
            <Link to='/Orderconfirm'><Button variant="contained" sx={{m: 7, p: 5}}   color="success" onClick={() => { enqueueSnackbar('Order placed', { variant: "success" ,anchorOrigin:{vertical:'top',horizontal:'center'} }) }}>Place Order </Button></Link> 
        
            </Grid>
        </Grid >
        
    )
}

export default Addcart;

