import styles from "./Navbar.module.css";

import { useContext, useRef, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { AuthContext } from "@/contexts/AuthContext";

const Navbar = () => {
    const navigate = useNavigate();
    const dropdownRef = useRef(null);
    const [showMenu, setShowMenu] = useState(false);
    const { setAuth, setUserInfo, isAuthenticated } = useContext(AuthContext);
   
    const logout = () => {
        setAuth({});
        setUserInfo({});
        setShowMenu(false);
        navigate("/");
    };

    const onClickUserMenu = () => {
        setShowMenu(!showMenu);
    };

    const onClickFromUserMenu = () => {
        setShowMenu(false);
    };

    const handleClickOutside = (e) => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
            setShowMenu(false);
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        }
    },[]);

    
    return (

        <nav className={styles.navbar}>

            {!isAuthenticated ?
                <div className={styles.isAuth}>
                    <h1 className={styles.mainPageLogo}><Link to="/">GO</Link></h1>

                    <div className={styles.menu} ref={dropdownRef}>
                        <button className={styles.menuBtn} type="button" onClick={onClickUserMenu}>
                            <img className={styles.navUserImg} src="images/default-img-pic.webp" alt="User Img" width={40} height={40} />
                        </button>
                        {showMenu &&
                            <ul className={styles.dropMenu}>
                                <li onClick={onClickFromUserMenu}> 
                                    <Link to="/profile">
                                        Profile
                                    </Link> 
                                </li>
                                <li onClick={onClickFromUserMenu}> 
                                    <Link to="/create">
                                        Add game
                                    </Link> 
                                </li>
                                <li onClick={logout}> 
                                    Logout
                                </li>
                            </ul>
                        }
                        </div>
                </div>
                :
                <ul className={styles.defaultMenu}>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                </ul>
            }

        </nav>
    );
};

export default Navbar;
