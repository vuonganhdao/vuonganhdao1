import Navbar from "./conponent/Navbar";
import Home from "./pages/Home";
import {Route,Routes } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContex';
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";




function App() {
  return (
    <>
    <AuthContextProvider>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/SignUp' element={<SignUp/>}/>
  
      
    </Routes>
    </AuthContextProvider>
    </>
  );
}

export default App;
