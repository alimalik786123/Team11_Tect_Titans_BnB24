import React from "react";

import Badge from '@mui/material/Badge';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link, useNavigate } from "react-router-dom" 
const Navadmin = () => {
  const navigate = useNavigate()
  const logout = () => {
    localStorage.removeItem("token")
    navigate('/login')
  }
  return (<>
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
            <Button  className="mt-1 mx-4" variant="outlined" >
                all
              </Button>
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

                <div className="btn btn-success mx-1">Cart</div><div className="btn btn-success mx-1" onClick={logout}>logout</div></div>
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
  </>)
}
export default Navadmin