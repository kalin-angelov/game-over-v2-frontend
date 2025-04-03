import { Link } from "react-router-dom";
import styles from "./Home.module.css";

const Home = () => {
    return (
        <main>
            <section className={styles.home}>
                <h1>GAME OVER</h1>
                <p>PLAY AGAIN</p>
                <ul>
                    <li><Link to="/register">YES</Link></li>
                    <li><Link to="/register">NO</Link></li>
                </ul>
            </section>
        </main>
    );
};

export default Home;
