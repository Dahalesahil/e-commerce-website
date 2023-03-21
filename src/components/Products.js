import React, { useState } from "react";
import Link from "@mui/material/Link";
import { useNavigate } from 'react-router-dom'
import { Grid, Paper, Avatar, TextField, Button, Typography } from "@mui/material";
import Login from "./Login";
import Box from '@mui/material/Box';
import { useForm } from "react-hook-form";
import Navbarr from "./navbarr";
import { useSnackbar } from 'notistack';
// import { VerticalAlignBottom } from "@mui/icons-material";
import { Product } from "../Services/User.services";
import axios from "axios";
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import e from "cors";
import { fileUpload } from "../Services/User.services";
import { userUpload } from "../Services/User.services";





function Products() {
  const paperStyle = {
    padding: 15,
    height: "60vh",
    width: 400,
    margin: "150px auto",
  };

  const [file, setFile] = useState();

  const { enqueueSnackbar } = useSnackbar()

  const handleInputChange = async (e) => {
    
    console.log(e.target.files);
    const file = e.target.files[0];

    const formData = new FormData();
    formData.append("file", file);
    const response = await fileUpload(formData);

    if (response.status) {
      //console.log('object')
      setFile(response.data.filepaths);
    }
  };



  const avatraStyle = { backgroundColor: "rgb(165 135 192)" };

  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    const finalData = {
      name: data.name,
      price: data.price,
      image: file,
      quantity: data.quantity,
    };

    try {
      const UploadData = await userUpload(finalData);
      if (UploadData) {
        // alert("success")
        enqueueSnackbar("Added Successfully!", { variant: "success" })
      }
    } catch (err) {
      console.log("error");
      enqueueSnackbar("Please check", { variant: "error" })
    }
  };

 



  return (
    <>

      <Grid>
        <Box

          sx={{
            '& .MuiTextField-root': { m: 0.3 },
          }}

        >
          <Paper elevation={5} style={paperStyle}>
            <Grid align="center">

              <h2>Add Product</h2>
            </Grid>

            <form onSubmit={handleSubmit(onSubmit)}>

              <TextField
                id="standard-size-small"
                name="id"
                size="small"
                fullWidth
                label="Product_id"
                {...register("id")}
                

              /><br /><br />
              <TextField
                id="standard-size-small"
                name="name"
                size="small"
                fullWidth
                label="Product_name"
                {...register("name")}
               

              /><br /><br />
              <TextField
                id="standard-size-small"
                name="price"
                size="small"
                fullWidth
                label="Product_Price"
                {...register("price")}
                

              /><br /><br />

              <TextField
                id="standard-size-small"
                name="quantity"
                size="small"
                label="Product_Quantity"
                fullWidth

                {...register("quantity")} /><br /><br />
              <input type="file" name="file" onChange={handleInputChange} />
              <Button type="submit " variant="contained" color="success" fullWidth>
                Add product
              </Button>


            </form>
          </Paper>
        </Box>
      </Grid>
    </>
  );
}

export default Products;



