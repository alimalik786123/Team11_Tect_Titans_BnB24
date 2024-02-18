import React, { useEffect, useState } from 'react'
import "./product.css"
import Button from '@mui/material/Button';

import { Link, useNavigate } from "react-router-dom"
import Footer from '../components/Footer'
import Card from '../Admin/Admincard'
import Skeleton from '@mui/material/Skeleton';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack'; 
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import Corousel from '../components/Corousel'

const Details=()=>{ 
    const [cat, setcat] = useState([])
    const [res,setres] = useState([])
    const [id, setid] = useState()
    const redirect=useNavigate()
    const approve=async()=>{
      let id=localStorage.getItem("currid")
      const response= await fetch("http://localhost:8080/approve",{ 
           method:'POST',
           headers:{
            'Content-Type':'application/json',
           },
           body:JSON.stringify({id:id})
        })
        const resp=await response.json()
        console.log(resp,"approved");
        redirect("/admin")
    }
  // const fetchdata=async()=>{
  //   let id=localStorage.getItem("currid")
  //   const response= await fetch("http://localhost:8080/getcompanyspec",{ 
  //        method:'POST',
  //        headers:{
  //         'Content-Type':'application/json',
  //        },
  //        body:JSON.stringify({id:id})
  //     })
  //     const resp=await response.json()
  //     console.log(resp);
      
  //   }

    // }
    
    // console.log(cat);
    useEffect(() => {
     let userid=localStorage.getItem("currid")
     if(!userid){
      redirect("/admin")
     }

     const fetchdata=async()=>{
      let id=localStorage.getItem("currid")
      const response= await fetch("http://localhost:8080/getcompanyspec",{ 
           method:'POST',
           headers:{
            'Content-Type':'application/json',
           },
           body:JSON.stringify({id:id})
        })
        const resp=await response.json()
        console.log(resp);
        setres(resp)
        
      }

    fetchdata();
    },[])
    return (<><>
        <nav class="navbar navbar-expand-lg bg-white">
          <div class="container-fluid">
            <Link class="navbar-brand fs-1" to="/sfae">SELLER</Link>
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
        <Paper className="container center1 p-3 mt-2" elevation={4}>
            <Grid className='mt-3' container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
               
            <Stack direction="column" spacing={2}>
     
      <Stack className='mt-3'>
       
        <Stack direction="row">
        {(res.data && res.data[0].status)==="uv"?<> <img src="https://pngimg.com/uploads/alarm_clock/alarm_clock_PNG80.png" className="h-20 w-20 clkimg" alt="" srcset="" />
         <h1 className='clkimg1'>You will be notified soon about your request</h1></>:<><h1>hello</h1></>}
       
       </Stack>
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