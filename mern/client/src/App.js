import React from "react";
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
 // We import all the components we need in our app

//import Login from "./components/login";     setup login
import Navbar from "./components/navbar";
import AgentList from "./components/agentList";
import Edit from "./components/edit";
import Create from "./components/create";
//import { AuthProvider } from "./auth/AuthContext";
 const App = () => {

  // return {
  //   <AuthProvider>
  //     <App />
  //   </AuthProvider>

  // }

  // const [isLoggedIn, setIsLoggedIn] = useState(false); 
  // const handleLogin = () => {
  //   // Handle login logic here
  //   setIsLoggedIn(true);
  // };
  
  //<Route path="/login" element={<Login onLogin={handleLogin} />} />
  //<Route path="/dashboard" element={isLoggedIn ? <AgentList /> : <Navigate to="/login" />} />

 return (
   <div>
     <Navbar />
     <Routes>
       <Route exact path="/" element={<AgentList />} />
       <Route path="/edit/:id" element={<Edit />} />
       <Route path="/create" element={<Create />} />

     </Routes>
   </div>
 );
};
 export default App;
 