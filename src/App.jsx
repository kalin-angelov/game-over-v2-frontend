import { Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./components/pages/home/Home";
import Login from "./components/pages/login/Login";
import Register from "./components/pages/register/Register";
import Navbar from "./components/reusable/navbar/Navbar";
// import Footer from "./components/reusable/footer/Footer";
import CreateGame from "./components/pages/createGame/CreateGame";

function App() {
  
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/create" element={<CreateGame />} />
            </Routes>
            {/* <Footer /> */}
        </>
    );
};

export default App;
