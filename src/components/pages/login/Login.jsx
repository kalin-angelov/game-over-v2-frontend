import styles from "./Login.module.css";

import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { useAuthStore } from "@/store/auth";
import { AuthContext } from "@/contexts/AuthContext";

const Login = () => {
    const navigate = useNavigate();
    const { setAuth, isAuthenticated } = useContext(AuthContext);
    const { singInAuth } = useAuthStore();
    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const login = async (e) => {
        e.preventDefault();

        const { success, message, data } = await singInAuth(user);
        
        if (!success) {
            toast.error(message);
        } else {
            setAuth(data);
            toast.success(message);
            
            setUser({
                email: "",
                password: "",
            });

            navigate("/profile");
        }
    };

    return (
        <main className={styles.login}>
            <section className={styles.header}>
                <h2><Link to="/">THE <span>GAME</span> IS NEVER <span>OVER</span></Link></h2>
                <p className={styles.logo}></p>
            </section>

            <form className={styles.loginForm} >

                <h3>Login</h3>

                <fieldset>
                    <label htmlFor="email">Email</label>
                    <div className={styles.formInput}>
                        <i className="fa-solid fa-at"></i>
                        <input type="text" placeholder="Email" id="email" value={user.email} onChange={(e) => setUser({...user, email: e.target.value})}/>
                    </div>
                </fieldset>
                
                <fieldset>
                    <label htmlFor="password">Password</label>
                    <div className={styles.formInput}>
                        <i className="fa-solid fa-key"></i>
                        <input type="password" placeholder="Password" id="password" value={user.password} onChange={(e) => setUser({...user, password: e.target.value})}/>
                    </div>
                </fieldset>

                <button type="submit" onClick={(e) => login(e)} className={styles.loginBtn}>Login</button>

                <p> Don't have an account? Click here <i className="fa-regular fa-hand-point-right"> </i> <Link to='/register'>Register</Link> </p>
            </form>

        </main>
    );
};

export default Login;
