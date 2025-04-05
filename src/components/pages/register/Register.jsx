import styles from "./Register.module.css";

import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {


    const register = () => {

        toast.error("Successfully register");

    };

    return (
        <main className={styles.register}>
            <section className={styles.header}>
                <h2><Link to="/">THE <span>GAME</span> IS NEVER <span>OVER</span></Link></h2>
                <p className={styles.logo}></p>
            </section>

            <form className={styles.registerForm} action={register}>

                <h3>Register</h3>

                <fieldset>
                    <label htmlFor="email">Email</label>
                    <div className={styles.formInput}>
                        <i className="fa-solid fa-at"></i>
                        <input type="text" placeholder="Email" id="email" />
                    </div>
                </fieldset>
                
                <fieldset>
                    <label htmlFor="password">Password</label>
                    <div className={styles.formInput}>
                        <i className="fa-solid fa-key"></i>
                        <input type="password" placeholder="Password" id="password" />
                    </div>
                </fieldset>
                
                <fieldset>
                    <label htmlFor="confirmPassword">Password</label>
                    <div className={styles.formInput}>
                        <i className="fa-solid fa-key"></i>
                        <input type="password" placeholder="Confirm Password" id="confirmPassword" />
                    </div>
                </fieldset>

                <button type="submit" className={styles.registerBtn}>Register</button>
                <p> Already have account? Click here <i className="fa-regular fa-hand-point-right"> </i> <Link to='/login'>Login</Link> </p>
            </form>
        
        </main>
    )
}

export default Register;
