import './App.css';
import Navigation from './Pages/Navigation/Navigation';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contact';
import Error from './Pages/Error/Error';
import LoginPage from './Pages/Login/LoginPage/LoginPage';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './Contex/AuthProvider/AuthProvider';
import Services from './Pages/Home/Services/Services';
import Dashboard from './Pages/Login/Dashboard/Dashboard';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import MakeAdmin from './Pages/Login/Dashboard/MakeAdmin/MakeAdmin';
import AdminRoute from './Pages/Login/AdminRoute/AdminRoute';
import Review from './Pages/Login/LoginPage/Review/Review';


function App() {
  return (
    <div>
      <AuthProvider>
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/contact" element={<Contact />}/> 
      <Route path="/login" element={<LoginPage />}/> 
      <Route path="/register" element={<Register />}/> 
      <Route path="/services" element={<Services />}/> 
      <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>}/> 
      <Route path="/makeAdmin" element={<MakeAdmin />}/> 
      <Route path="/review" element={<Review />}/> 

      {/* <Route path="makeadmin" element={<AdminRoute><Dashboard /></AdminRoute>}/> 

      </Route>
      <Route path="makeAdmin" element={<AdminRoute><MakeAdmin /></AdminRoute>}/>  */}
      <Route path="*" element={<Error />}/> 
      
    </Routes>
  </BrowserRouter>
      </AuthProvider>
      {/* <h1>this is main</h1>
         <Navigation></Navigation> */}
         
      </div>
  );
}

export default App;
