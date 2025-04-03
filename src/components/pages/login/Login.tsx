import styles from "./Login.module.css";

import { Link } from "react-router-dom";

const Login = () => {
    return (
        <main className={styles.login}>
            <section className={styles.header}>
                <h2><Link to="/">THE <span>GAME</span> IS NEVER <span>OVER</span></Link></h2>
                <p className={styles.logo}></p>
            </section>

            <form className={styles.loginForm} action="">

                <h3>Login</h3>

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

                <button type="submit" className={styles.loginBtn}>Login</button>

                <p> Don't have an account? Click here <i className="fa-regular fa-hand-point-right"> </i> <Link to='/register'>Register</Link> </p>
            </form>

        </main>
    );
};

export default Login;
