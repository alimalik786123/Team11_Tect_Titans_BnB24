import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './main.css'
import Button from '@mui/material/Button';
export default function Card(props) {
  const [new1,setnew]=useState(props.data3.candidates)
  const location=useNavigate() 
  const handle=(e)=>{
    // setnew(e.target.value)
    console.log(new1);
    window.localStorage.setItem("currid",e.target.name)
    let data=new1
    window.localStorage.setItem("currdata",JSON.stringify(new1))

    location("/detail",new1 && {state:data})
  }
  return (
    <>
    <div className='col-12 mx-3'>
    <div class="card col" id='card1' >
            <div class="card-body">
              <h3 class="card-title">Seller name</h3>
              <h4>status : </h4>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              {/* <Link to='/vote' className='rem' state={new1}>vote</Link> */}
             <div className='d-flex'> 
             <Button variant="contained" >Details</Button>
             </div>
            </div>
          </div>
          </div>
    </>
  )
}
