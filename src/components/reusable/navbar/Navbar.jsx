import styles from "./Navbar.module.css";

import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { AuthContext } from "@/contexts/AuthContext";

const Navbar = () => {
    const navigate = useNavigate();
    const { setAuth, setUserInfo, isAuthenticated } = useContext(AuthContext);

    const logout = () => {
        setAuth({});
        setUserInfo({});
        navigate("/");
    };
    
    return (

        <nav className={styles.navbar}>

            {isAuthenticated ?
                <ul>
                    <li><Link to="/create">Add Game</Link></li>
                    <li><Link to="/" onClick={logout}>logout</Link></li>
                </ul>
                :
                <ul>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                </ul>
            }

        </nav>
    );
};

export default Navbar;
