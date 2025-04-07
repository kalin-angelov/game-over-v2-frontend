import styles from "./Register.module.css";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { useAuthStore } from "@/store/auth";

const Register = () => {
    const navigate = useNavigate();
    const { createAuth } = useAuthStore();
    const [newUser, setNewUser] = useState({
        email: "",
        password: "",
        confPassword: ""
    });

    const handleRegister = async (e) => {
        e.preventDefault();

        const { success, message } = await createAuth(newUser);
        
        if (!success) {
            toast.error(message);
        } else {
            toast.success(message);

            setNewUser({
                email: "",
                password: "",
                confPassword: ""
            });
            navigate("/login");
        }
       
    };

    return (
        <main className={styles.register}>
            <section className={styles.header}>
                <h2><Link to="/">THE <span>GAME</span> IS NEVER <span>OVER</span></Link></h2>
                <p className={styles.logo}></p>
            </section>

            <form className={styles.registerForm}>

                <h3>Register</h3>

                <fieldset>
                    <label htmlFor="email">Email</label>
                    <div className={styles.formInput}>
                        <i className="fa-solid fa-at"></i>
                        <input type="text" placeholder="Email" id="email" value={newUser.email} onChange={(e) => setNewUser({...newUser, email: e.target.value})} />
                    </div>
                </fieldset>
                
                <fieldset>
                    <label htmlFor="password">Password</label>
                    <div className={styles.formInput}>
                        <i className="fa-solid fa-key"></i>
                        <input type="password" placeholder="Password" id="password" value={newUser.password} onChange={(e) => setNewUser({...newUser, password: e.target.value})} />
                    </div>
                </fieldset>
                
                <fieldset>
                    <label htmlFor="confirmPassword">Confirm password</label>
                    <div className={styles.formInput}>
                        <i className="fa-solid fa-key"></i>
                        <input type="password" placeholder="Confirm Password" id="confirmPassword" value={newUser.confPassword} onChange={(e) => setNewUser({...newUser, confPassword: e.target.value})}/>
                    </div>
                </fieldset>

                <button type="submit" onClick={(e) => {handleRegister(e)}} className={styles.registerBtn}>Register</button>
                <p> Already have account? Click here <i className="fa-regular fa-hand-point-right"> </i> <Link to='/login'>Login</Link> </p>
            </form>
        
        </main>
    )
}

export default Register;
