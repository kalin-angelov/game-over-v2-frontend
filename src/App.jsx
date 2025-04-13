import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useState } from "react";
import "./App.css";

import { RouteGuard } from "./components/reusable/routeGuard/RouteGuard";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { AuthContext } from "./contexts/AuthContext";

import Home from "./components/pages/home/Home";
import Login from "./components/pages/login/Login";
import Register from "./components/pages/register/Register";
import Navbar from "./components/reusable/navbar/Navbar";
// import Footer from "./components/reusable/footer/Footer";
import CreateGame from "./components/pages/createGame/CreateGame";
import Profile from "./components/pages/profile/Profile";
import PageNotFound from "./components/pages/notFound/PageNotFound";
import Details from "./components/pages/details/Details";
import Catalog from "./components/pages/catalog/Catalog";


function App() {
    const [auth, setAuth] = useLocalStorage('auth', {});
    const [userInfo, setUserInfo] = useState({});

    const valueContext = {
        auth,
        setAuth,
        userInfo,
        setUserInfo,
        isAuthenticated: auth.length > 0,
    };
    
    return (
        
        <>
            <AuthContext.Provider value={valueContext}>
                <Navbar />
                <Routes>
                    <Route path="*" element={<PageNotFound />} />
                    <Route path="/" element={<Home />} />

                    {/* <Route element={<RouteGuard />}> */}
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/create" element={<CreateGame />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/details" element={<Details />} />
                        <Route path="/catalog" element={<Catalog />} />
                    {/* </Route> */}
                </Routes>
                <ToastContainer position="bottom-right"/>
                {/* <Footer /> */}
            </AuthContext.Provider>
        </>
    );
};

export default App;
