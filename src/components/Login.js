import { useForm } from "react-hook-form";
import { Grid, Paper, Avatar, TextField, Box, Button } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import { useNavigate } from 'react-router-dom'
import Link from '@mui/material/Link';
import Registration from './Registration'
import Navbarr from "./navbarr";
import { useSnackbar } from 'notistack';
import { login } from "../Services/User.services";
//import Home from './Home';


function Login() {
    
    const history = useNavigate();
    const paperStyle = { padding: 20, height: '65vh', width: 350, margin: '100px auto' }
    const { register, handleSubmit } = useForm();
    const { enqueueSnackbar } = useSnackbar()
    const onSubmit = async (data) => {
        const finalData = {
            user_id: data.user_id,
            password: data.password
            
        }
        try {
            const response = await login(finalData);
            if (response) {
                // debugger
                enqueueSnackbar('Login Succefully', { variant: "success", anchorOrigin: { vertical: 'top', horizontal: 'center' } })
                // console.log(response)
                history("/Itemdata")
            }
        } catch (error) {
        
            // enqueueSnackbar('Login Failed', { variant: "success", anchorOrigin: { vertical: 'top', horizontal: 'center' } })

        }

        // const L1 = localStorage.getItem("email", data.email);
        // const L2 = localStorage.getItem("password", data.password);
       

        // if (data.Email == L1 && data.Password == L2) {
        //     // alert("login successful")
        //     history("/Itemdata")

        // }
        // else {
        //     alert("error")
        // }
    }




    return (
        <>

            <Grid>
                <Box
                    sx={{
                        '& .MuiTextField-root': { m: 0.3 },
                    }}

                >
                    <Paper elevation={10} style={paperStyle}>
                        <Grid align='center'>
                            <Avatar src="/broken-image.jpg" />
                            <h2>Sign In</h2>
                        </Grid>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <TextField name="emailId" id="standard-size-small" size="small" label="Email Id" placeholder='name@gmail.com' {...register("user_id")} fullWidth required /><br></br><br></br>
                            <TextField name="password" id="standard-size-small" size="small" label="Password" type="password" {...register("password")} fullWidth placeholder='Please Enter  password' required />

                            <br></br>
                            <Checkbox
                                name="checkedB"
                                color="primary"
                            />
                            Remember me
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <Link href="#" >Forgot password?
                            </Link>
                            <div align='center'>
                                <Button variant='contained' type="submit" color="success" fullWidth  >LOG IN</Button>
                            </div>
                            <br></br>

                            <div >

                                Do Not Have Account?
                                <Link href="Registration" underline="none" onClick={Registration}>
                                    {'Registration'}
                                </Link>

                            </div>
                        </form>
                    </Paper>
                </Box>
            </Grid>

        </>
    )
}


export default Login;










