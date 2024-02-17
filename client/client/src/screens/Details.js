import React, { useEffect, useState } from 'react'
import Badge from '@mui/material/Badge';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link, useNavigate } from "react-router-dom"
import Footer from '../components/Footer'
import Card from '../Admin/Admincard'
import Skeleton from '@mui/material/Skeleton';
import Navadmin from '../Navadmin';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import Corousel from '../components/Corousel'
const Details=()=>{ 
    const [cat, setcat] = useState([])
    const [food, setfood] = useState([])
    const [search, setsearch] = useState('')
    const datafood = async () => {
        let data = await fetch('http://localhost:8080/foodData', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        data = await data.json()
        // console.log()
        setfood(data[0])
        setcat(data[1])


    }
    console.log(food);
    console.log(cat);
    useEffect(() => {
        datafood()
    }, [])
    return (<><>
        <nav class="navbar navbar-expand-lg bg-white">
          <div class="container-fluid">
            <Link class="navbar-brand fs-1" to="/sfae">ADMIN</Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto me-auto mb-2 mb-lg-0">
    
                <li class="nav-item">
                 </li>
    
                <div>
                <Button  className="mt-1 mx-4" variant="outlined" >
                    Previous
                  </Button>
                </div>
                <div>
            
                </div>
                <div>
                <Button  className="mt-1 mx-4" variant="outlined" >
                    about
                  </Button>
                </div>
    
    
    
              </ul>
              {
    
                localStorage.getItem("token") ?
                  <div>
    
                    <div className="btn btn-success mx-1">Cart</div><div className="btn btn-success mx-1" >logout</div></div>
                  :
                  <div className="d-flex">
                    
                    <Button variant="outlined" className="mx-1">Signout</Button>
                    {/* <Link class="btn bg-white mx-1" to="/login">Login</Link>
              <Link class="btn bg-white mx-1" to='/signup'  >signup</Link> */}
                  </div>
    
              }
            </div>
          </div>
        </nav>
      </>


    {/* {----------------------------------------------------------------------------------------------------} */}
        <Paper className="container p-3 mt-2">
            <Grid className='mt-3' container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
               
            <Stack direction="row" spacing={2}>
      <Avatar alt="Remy Sharp" className=' mt-3 mx-4' sx={{ width: 220, height: 220 }} src="https://source.unsplash.com/random/200x200?sig=1" />
      <Stack className='mt-3'>
        <h1>Name : </h1>
        <h2>company email : </h2>
        <h2>category : </h2>
        <h2>products : </h2>
        <h3>lic no.: </h3>
        <h3>factory location : </h3>
        <h3>Number of warehouse : </h3>
        <h3>warehouse locations : lvnsjvnjerbksbfkjbfjbjcndknbjzjk,jbcv nx cvj fjbncjvbjkcvbncv ncv zv ,cnv  cv mcv cv </h3>
        <h2></h2>
        <br />
        <Stack direction="row">
        <Button className='mx-2 md-2' variant="contained" color="success">
        Approve
      </Button>
      <Button className='mx-2 md-2' variant="contained" color="error">
        Reject
      </Button></Stack>
      </Stack>
    </Stack>
                        
                       
                
            </Grid>
        </Paper>
        <div className=" m-5">
            <Skeleton />
            <Skeleton animation="wave" />
            <Skeleton animation={false} />
        </div>
        <Footer />
    </>)
}
export default Details