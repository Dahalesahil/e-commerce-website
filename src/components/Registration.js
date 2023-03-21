import React, { useState } from "react";
import Link from "@mui/material/Link";
import { useNavigate } from 'react-router-dom'
import { Grid, Paper, Avatar, TextField, Button, Typography } from "@mui/material";
import Login from "./Login";
import Box from '@mui/material/Box';
import { useForm } from "react-hook-form";
import Navbarr from "./navbarr";
import { useSnackbar } from 'notistack';
import { VerticalAlignBottom } from "@mui/icons-material";
import { Register } from "../Services/User.services";
import { styled } from '@mui/material/styles';





function Registration() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
 
  
  const history = useNavigate();
  const { enqueueSnackbar } = useSnackbar()
  const paperStyle = { padding: 20, height: "auto", width: 350, margin: " 110px auto", };
  const { register, handleSubmit, watch,
    formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    debugger
    const finalData = {

      first_name: data.first_name,
      last_name: data.last_name,
      mobile_no: data.mobile_no,
      email_id: data.emailId,
      user_id: data.user_Id,
      password: data.password
    }
    try {
      const response = await Register(finalData);
      if (response.status) {
        enqueueSnackbar('Registration Successfully', { variant: "success", anchorOrigin: { vertical: 'top', horizontal: 'center' } })
        history("/Login")
      }
    } catch (error) {
      // enqueueSnackbar('Insert field', { variant: "success", anchorOrigin: { vertical: 'top', horizontal: 'center' } })

    }
    // localStorage.setItem("email", data.email);
    // localStorage.setItem("password", data.password);
    // alert("Registration Succefully")


  };

  return (
  <>
    
    <Grid  container spacing={3}>
      <Box
       justifyContent="center"
       alignItems="center"
       margin="auto"
       mareginLeft={14}
       
        sx={{
          "& .MuiTextField-root": { m: 0.3 },
         
        }}
      >
      
           
      
   <Paper elevation={10} style={paperStyle}>
            <Grid align="center">
              <Avatar src="/broken-image.jpg" />
              <h2>Sign Up</h2>
            </Grid>

            <form onSubmit={handleSubmit(onSubmit)}>
            <Item>
              <TextField
                id="standard-size-small"
                name="first_name"
                size="small"
                fullWidth
                label="First Name"
                {...register("first_name", {
                  required: true,
                  maxLength: 20,
                  pattern: /^[A-Za-z]+$/i
                })}
              />
              {errors?.first_name?.type === "required" && <p>This field is required</p>}
              {errors?.first_name?.type === "maxLength" && (
                <p>First name cannot exceed 20 characters</p>
              )}
              {errors?.first_name?.type === "pattern" && (
                <p>Alphabetical characters only</p>
              )}



              <br /><br />
              <TextField
                id="standard-size-small"
                name="last_name"
                size="small"
                fullWidth
                label="Last Name"
                {...register("last_name", { pattern: /^[A-Za-z]+$/i })} />
              {errors?.last_name?.type === "pattern" && (
                <p>Alphabetical characters only</p>
              )}

              <br /><br />
              <TextField
                id="standard-size-small"
                name="user_Id"
                size="small"
                fullWidth
                label="UserID"
                {...register("user_Id", { pattern: /^[A-Za-z_0-9]+$/i })} />
              {errors?.user_Id?.type === "pattern" && (
                <p>Alphabetical characters only</p>
              )}


              <br /><br />
              </Item>
              <Item>
              <TextField
                id="standard-size-small"
                name="emailId"
                size="small"
                fullWidth
                label="Email Id"
                {...register("emailId", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })}
              />
              {errors.emailId && <span color="red">Invalid email</span>}


              <br /><br />

              <TextField
                id="standard-size-small"
                name="password"
                size="small"
                label="Password"
                fullWidth
                type="password"
                {...register("password",{
                  
                    required: "You must specify a password",
                    minLength: {
                      value: 8,
                      message: "Password must have at least 8 characters"
                    }
                  })}
                />
                {errors.password && <p>{errors.password.message}</p>}
          
                
               


              <br /><br />

              <TextField
                type="number"
                name="contact"
                size="small"
                id="standard-size-small"
                label="Contact"
                fullWidth
                {...register("mobile_no",{
                  
                  required: "You must specify a Mobile Number",
                  minLength: {
                    value: 50,
                    message: "Please Enter 10 Digit Mobile Number"
                  }
                })}
              />
              {errors.mobile_no && <p>{errors.mobile_no.message}</p>}


                
              
              <br></br><br></br>
              </Item>



              <Typography>
                Already having an Account?
                <Link href="Login" text align='center' underline="none" onClick={Login}>
                  {"Login"}
                </Link>
              </Typography><br></br>
              <div className="f1" align="center" color="blue">
                <Button type="submit " variant="contained" color="success" fullWidth>
                  Sign Up
                </Button>

              </div>
            </form>
          </Paper>
          </Box>
      </Grid>
       
       
      </>
  );
};

export default Registration;
