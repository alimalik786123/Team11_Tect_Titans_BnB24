import Home from './screens/Home'
import './App.css';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"
import Signup from './screens/signup';
import Login from './authentication/Login';
import Cartprovider from './components/ContexReducer';
import Reduce from './components/Reduce';
import Admin from './screens/Admin';
import Details from './screens/Details'; 
function App() {
  return (
   <> 
   <Cartprovider>
   <Router>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route  path='/signup' element={<Signup/>}/>
      <Route  path='/login' element={<Login/>}/>
      <Route  path='/admin' element={<Admin/>}/>
      <Route  path='/admin/details' element={<Details/>}/>
      <Route  path='/reduce' element={<Reduce/>}>
        




      </Route>
    </Routes>
   </Router>
   </Cartprovider>
   </>
  );
}

export default App;