import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './main.css'
import Button from '@mui/material/Button';
export default function Card(props) {
  const location=useNavigate()
  const handleclick=(e)=>{
    let id=e.target.id 
    window.localStorage.setItem("currid",id)
    location("/details")
  }

  const [new1,setnew]=useState(props.data3.candidates)
   
  const temp=props.data3.status 
  var status1
  var style
  if(temp==="uv"){
    status1="Unverified"
    style={ color: 'red' }
  }

  else if(temp==="v"){
    status1="Verified"
    style={ color: 'green' }
  }
  const handle=(e)=>{
    // setnew(e.target.value)
    console.log(new1);
    //window.localStorage.setItem("currid",e.target.name)
    let data=new1
    window.localStorage.setItem("currdata",JSON.stringify(new1))

    location("/detail",new1 && {state:data})
  }
  return (
    <>
    <div className='col-12 mx-3'>
    <div class="card col" id='card1' >
            <div class="card-body">
              <h3 class="card-title">Seller name : {props.data3.companyname}</h3>
              <h4 >status : <h4 style={style}> {status1} </h4></h4>
              <p class="card-text">Category : {props.data3.category}</p>
              {/* <Link to='/vote' className='rem' state={new1}>vote</Link> */}
             <div className='d-flex'> 
             <Button id={props.data3.userid} variant="contained" onClick={handleclick} >Details</Button>
             </div>
            </div>
          </div>
          </div>
    </>
  )
}
