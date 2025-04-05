import styles from "./Navbar.module.css";

import { Link } from "react-router-dom";

import { useState } from "react";

const Navbar = () => {

    const [authenticated, setAuthenticated] = useState(true);

    return (
        <nav className={styles.navbar}>

            {authenticated ?
                <ul>
                    <li><Link to="/create">Add Game</Link></li>
                    <li><Link to="/" onClick={() => {setAuthenticated(false)}}>logout</Link></li>
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
