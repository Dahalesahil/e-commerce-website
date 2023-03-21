import React, { useEffect, useState } from "react";
import { GetUserData } from "../Services/User.services";
import { Grid } from '@mui/material';
import List from '@mui/material/List';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import { DeleteProductData } from "../Services/User.services";
import { useSnackbar } from 'notistack';
import Typography from '@mui/material/Typography';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom'
import { useNavigate,useParams } from "react-router-dom";
import e from "cors";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';






function Get() {
  const [file, setFile] = useState();
  const [data, setData] = useState([]);
// for dialog box
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    userdata();
  }, [])
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar()
  const userdata = async () => {
    try {
   
      const response = await GetUserData();
      userdata();
      if (response.data) {
        setData(response.data.data);
        console.log(data);

      }
    }
    catch (error) {
      console.log("error", error);
    }
  }
  // const data = response.data;
  const deleteProduct = async (id) => {

    try {
      const DeleteData = await DeleteProductData(id);
      if (DeleteData) {
        // alert("success")
        enqueueSnackbar("Remove Product!", { variant: "success" });
        userdata();
        handleClose();
      }
    } catch (err) {
      console.log("error");
      enqueueSnackbar("Please check", { variant: "error" })
    }
  };
  
  

 

  return (
    <>
    
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
            {/* <TableCell></TableCell> */}
            <TableCell align="center">Image</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Price</TableCell>
             
              <TableCell align="center">Quantity</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.length && (<>
              {
                data.map(item => (
                  <TableRow
                    // key={item.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    {/* <TableCell component="th" scope="row">
                      {item.id} */}
                    {/* </TableCell> */}
                    <TableCell component="th" scope="row" align="center"><img src={item.image}width={100}></img></TableCell>
                    <TableCell align="center">{item.name} </TableCell>
                    <TableCell align="center">{item.price}</TableCell>
                    
                    <TableCell align="center">{item.quantity}</TableCell>
                    
                    <TableCell align="center"><EditIcon  onClick={() => { navigate(`/Products/edit/${item.id}`)
      }}></EditIcon> </TableCell>
                    
                    <TableCell align="center"> <DeleteIcon variant="outlined" onClick={handleClickOpen}>
        Delete
      </DeleteIcon></TableCell>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {/* {"Use Google's location service?"} */}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          Are you sure you want to delete this item?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancle</Button>
          <Button onClick={() => deleteProduct(item.id)} autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    
                   {/* <TableCell align="center"><EditIcon  onClick={() => { navigate(`/Products/edit/${item.id}`)
      }}></EditIcon> </TableCell>
        */}
                   {/* <TableCell align="right"> <EditIcon  onClick={() => {
        navigate(`/Products/edit/${item.id}`)
      }}></EditIcon> </TableCell> */}
                  </TableRow>
                ))
              }
            </>)}
              
               
              
             
                 
            {/* {data.map(item => (
              <TableRow
                key={item.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {item.id}
                </TableCell>
                <TableCell align="right">{item.name} </TableCell>
                <TableCell align="right">{item.price}</TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right">{item.quantity}</TableCell>
                <TableCell align="right"> <Button type="submit " onClick={() => deleteProduct(item.id)} variant="contained" color="error">
                  Remove product
                </Button></TableCell>
              </TableRow>
            ))} */}
          </TableBody>
        </Table>
      </TableContainer>
    
    </>
    
  );
}


{/*     
      {data.map(item => (
       
           <li key={item.id}>
            
          <h2>{item.name}</h2>
          <p>{item.price}</p>
          <p>{item.quantity}</p>
         <img src={item.image} /> 
        </li>
        
      ))}
       
    </>
    
  )
} */}

export default Get;