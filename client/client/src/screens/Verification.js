import React, { useEffect, useState } from 'react';
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
import { redirect, useNavigate } from 'react-router-dom';

import { useToast } from '@chakra-ui/react'




const defaultTheme = createTheme();

export default function Verification() {
   const redirect=useNavigate() 
  useEffect(()=>{
    if(!localStorage.getItem("signin")){
        redirect("/signup")
    }
  },[])

    const [companyname, setname] = useState('')
    const [companyemail, setemail] = useState('')
    const [category, setcategory] = useState('')
    const [products, setproducts] = useState('')
    const [lic, setlic] = useState("")
    const [factory, setfactory] = useState('')
    const [noofwarehouses, setnoofwarehouses] = useState('')
    const [location, setlocation] = useState("")
    const [status, setstatus]=useState("uv")
    const userid=localStorage.getItem("signin")
    const toast = useToast()
  const handleSubmit = async(e) => {
    e.preventDefault();

    if(!companyname || !companyemail || !category || !products || !lic || !factory || !noofwarehouses || !location || !status ){
        toast({ 
          title: "Empty field",
          status: "warning",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
    return
    }

    else{ e.preventDefault()
        const response= await fetch("http://localhost:8080/company",{ 
           method:'POST',
           headers:{
            'Content-Type':'application/json',
           },
           body:JSON.stringify({companyname:companyname,companyemail:companyemail,category:category,products:products,lic:lic,factory:factory,noofwarehouses:noofwarehouses,location:location,status:status,userid:userid})
        })
     const resp=await response.json()
      console.log(resp);
      window.localStorage.setItem("data",resp._id)
      window.localStorage.setItem("signin",resp._id)
      redirect("/product")
    
    }

   
  ;}

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="lg">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          
          <Typography component="h1" variant="h5">
            Tell us something about your company
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              
              <Grid item xs={16}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Company Name"
                  name="email"
                  autoComplete="email"
                  onChange={(e)=>setname(e.target.value)}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Company Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={(e)=>setemail(e.target.value)}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Category"
                  name="Category"
                  autoComplete="email"
                  onChange={(e)=>setcategory(e.target.value)}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="products"
                  label="Products(separated by comma)"
                  name="products"
                  autoComplete="products"
                  onChange={(e)=>setproducts(e.target.value)}
                />
              </Grid>


              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="lic"
                  label="License number"
                  name="lic"
                  autoComplete="lic"
                  onChange={(e)=>setlic(e.target.value)}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="factory"
                  label="Factory location"
                  type="factory"
                  id="factory"
                  autoComplete="new-password"
                  onChange={(e)=>setfactory(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="warehouses"
                  label="Number of warehouses"
                  type="warehouses"
                  id="warehouses"
                  autoComplete="new-password"
                  onChange={(e)=>setnoofwarehouses(e.target.value)}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="location"
                  label="warehouse location (separated by comma)"
                  type="location"
                  id="location"
                  autoComplete="new-password"
                  onChange={(e)=>setlocation(e.target.value)}
                />
              </Grid>

             
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit for review
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
               
                <Link href="/login" variant="body2">
                 
                </Link>
              </Grid>
              <br />
             
            </Grid>
           
          </Box>
          <Grid item>
               
              </Grid>
        </Box>
        
      </Container>
    </ThemeProvider>
  );
}