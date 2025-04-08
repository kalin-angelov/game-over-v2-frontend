import { Outlet, useNavigate } from "react-router-dom";

import { useContext, useEffect } from "react";

import { AuthContext } from "../../../contexts/AuthContext"; 

export const RouteGuard = () => {
    const navigate = useNavigate();
    const { isAuthenticated } = useContext(AuthContext);

    useEffect(() => {
        if (!isAuthenticated) {
            navigate("/login");
        }

        if (isAuthenticated) {
            navigate("/profile")
        }
    },[]);

    return <Outlet/>
};