import Navbar from "./components/Navbar";
import {Routes,Route} from 'react-router-dom'
import HomePage from "./pages/HomePage";
import { AuthContextProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Account from "./pages/Account";
import ProtectedRouter from "./components/ProtectedRouter";


function App() {
  return (
    <>
    <AuthContextProvider>
    <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="signup"  element={<SignUp/>}/>
        <Route path="account" element={<ProtectedRouter>
          <Account/>
        </ProtectedRouter>}/>
      </Routes>
    </AuthContextProvider>
      
     
    </>
  );
}

export default App;
