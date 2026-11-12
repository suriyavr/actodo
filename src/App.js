import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login.jsx";
import Signup from "./Pages/Signup";
import Landingpage from "./Pages/Landing";
import { useState } from "react";


function App() {
     const [users, setUsers] = useState([
    {
      userName: "Karthik",
      password: "Karthik",
    },
  ]);
  return (
   <>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Login user={users} setUsers={setUsers}/>} />
         <Route path="/Signup" element={<Signup  user={users} setUsers={setUsers} />} />
         <Route path="/Landing" element={<Landingpage />} />
      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
