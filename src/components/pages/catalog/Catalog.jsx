import styles from "./Catalog.module.css";

import { useNavigate } from "react-router-dom";

import { FaFolderOpen } from "react-icons/fa";

const Catalog = () => {
    const navigate = useNavigate();

    return (
        <main className={styles.catalog}>
            <div className={styles.container}>

                <div className={styles.gameContainer} onClick={() => navigate("/details")}>
                    <figure className={styles.gameCoverContainer}>
                        <img className={styles.gameImg} src="https://upload.wikimedia.org/wikipedia/en/7/77/Assassins_Creed_2_Box_Art.JPG" alt="game cover" />
                    </figure>

                    <p><span>AC 2:</span> Some problem</p>

                    <div className={styles.folder}>
                        <FaFolderOpen fontSize={30}/>
                    </div>
                    
                </div>

                <div className={styles.gameContainer} onClick={() => navigate("/details")}>
                    <figure className={styles.gameCoverContainer}>
                        <img className={styles.gameImg} src="https://upload.wikimedia.org/wikipedia/en/thumb/b/b5/God_of_War_%282005%29_cover.jpg/250px-God_of_War_%282005%29_cover.jpg" alt="game cover" />
                    </figure>

                    <p><span>God of war:</span> Some problem</p>

                    <FaFolderOpen fontSize={30}/>
                </div>

                <div className={styles.gameContainer} onClick={() => navigate("/details")}>
                    <figure className={styles.gameCoverContainer}>
                        <img className={styles.gameImg} src="https://image.api.playstation.com/vulcan/ap/rnd/202009/1710/UUnpHLJqLAIJX5HioswiPuAm.png" alt="game cover" />
                    </figure>

                    <p><span>DMC 5:</span> Some problem</p>

                    <FaFolderOpen fontSize={30}/>
                </div>

            </div>
        </main>
    );
};

export default Catalog;
