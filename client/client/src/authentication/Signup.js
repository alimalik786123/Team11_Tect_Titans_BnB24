import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useToast } from '@chakra-ui/react'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import axios from "axios"
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import {useNavigate } from 'react-router-dom'
const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const defaultTheme = createTheme();

export default function SignUp() {
  const [open, setOpen] = useState(true);
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [cnfpassword, setcnfpassword] = useState('')
  const [pic, setpic] = useState("https://cdn141.picsart.com/357697367045201.jpg")
 const redirect=useNavigate()
  const toast = useToast()
  const setpics = (pics) => {
  
    

    if (pics === undefined) {
      toast({
        title: "Please Select an Image!",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }

    if (pics.type !== "image/jpeg" && pics.type !== "image/png") {
      toast({
        title: "Please Select a JPEG or PNG Image!",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });

      return;
    }

    if (pics.type === "image/jpeg" || pics.type === "image/png") {

      const data = new FormData()
      data.append("file", pics)
      data.append("upload_preset", "ml_default")
      data.append("cloud_name", "mailchat")
      axios.post("https://api.cloudinary.com/v1_1/mailchat/image/upload", data)
        .then((response) => {
          console.log("Cloudinary response:", response);
          setpic(response.data.url.toString());
          console.log(pic);
          toast({
            title: "Image uploaded successfully!",
            status: "success",
            duration: 5000,
            isClosable: true,
            position: "top",
          });
        })
        .catch((error) => {
          console.log("Cloudinary error:", error);

        });
    }
  }


  const handleSubmit = async(e) => {
    if(!name || !email || !password || !cnfpassword ){
      toast({ 
        title: "Empty field",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
      // alert("failed")
   
      return
    }
    else{
      if(password!=cnfpassword){
        toast({
          title: "Password do not matched",
          status: "warning",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
        
        return
      }
      else{
      
      e.preventDefault()
      const response= await fetch("http://localhost:8080/seller",{ 
         method:'POST',
         headers:{
          'Content-Type':'application/json',
         },
         body:JSON.stringify({name:name,email:email,password:cnfpassword,pic:pic})
      })
      
      const resp=await response.json()
      console.log(resp);
      window.localStorage.setItem("data",resp._id)
      window.localStorage.setItem("signin",resp._id)
      redirect("/verification")

    }
  };
  }
  return (
    
    <ThemeProvider theme={defaultTheme}>



      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} >
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="Name"
                  label="Name"
                  autoFocus
                  onChange={(e)=>setname(e.target.value)}
                />
              </Grid>
              
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={(e)=>setemail(e.target.value)}
                />
              </Grid>
              <Grid>
                
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={(e)=>setpassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Confirm Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={(e)=>setcnfpassword(e.target.value)}
                />
              </Grid>


              <Grid item xs={12}>
              <Button
                  component="label"
                  role={undefined}
                  variant="contained"
                  tabIndex={-1}
                  startIcon={<CloudUploadIcon /> }
                >
                  Upload pic
                  <VisuallyHiddenInput type="file" onChange={(e)=>setpics(e.target.files[0])}/>
                </Button> 
              </Grid>


             
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2" className='mx-5'>
                  Already have an account? Sign in
                </Link>
                <Link href="/login" variant="body2">

                </Link>
              </Grid>
              <br />

            </Grid>

          </Box>
          <Grid item>
            <Link href="/login" variant="body2" className='mx-3'>
              signup as seller
            </Link>
          </Grid>
        </Box>

      </Container>
    </ThemeProvider>
  );
}