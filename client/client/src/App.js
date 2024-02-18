import Home from './screens/Home'
import './App.css';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"
import Signup from './authentication/Signup';
import Login from './authentication/Login';
import Cartprovider from './components/ContexReducer';
import Reduce from './components/Reduce';
import Admin from './screens/Admin';
import Details from './screens/Details'; 
import Companysignup from './authentication/Companysignup'
import Product from './screens/Product'
import Verification from "./screens/Verification"
import { ChakraProvider } from '@chakra-ui/react'
function App() {
  return (
   <> 
  
   <Cartprovider>
   <Router>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route  path='/signup' element={<Signup/>}/>
      <Route  path='/login' element={<Login/>}/>
      <Route  path='/signup/company' element={<Companysignup/>}/>
      <Route  path='/verification' element={<Verification/>}/>
      <Route  path='/admin' element={<Admin/>}/>
      <Route  path='/product' element={<Product/>}/>
      <Route  path='/details' element={<Details/>}/>
      <Route  path='/reduce' element={<Reduce/>}>
        




      </Route>
    </Routes>
   </Router>
   </Cartprovider>
   
   </>
  );
}

export default App;