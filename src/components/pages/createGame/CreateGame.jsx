import styles from "./CreateGame.module.css";

import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useState } from "react";

import { useGameStore } from "@/store/game";

const CreateGame = () => {
    const navigate = useNavigate();
    const { createGame } = useGameStore();
    const [game, setGame] = useState({
        title: "",
        imgUrl: "",
        platform: "",
        description: ""
    });

    const addGame = async (e) => {
        e.preventDefault();
        const { success, message } = await createGame(game);
        
        if (!success) {
            toast.error(message);
        } else {
            
            toast.success(message);  
            setGame({
                title: "",
                imgUrl: "",
                platform: "",
                description: ""
            });
            navigate("/");
        }
        
    }

    return (
        <main className={styles.addGame}>
            <section className={styles.header}>
                <h2><Link to="/">THE <span>GAME</span> IS NEVER <span>OVER</span></Link></h2>
                <p className={styles.logo}></p>
            </section>

            <form className={styles.addGameForm}>

                <h3>Add Game</h3>

                <fieldset>
                    <label htmlFor="title">Title</label>
                    <div className={styles.formInput}>
                        <i className="fa-solid fa-file-signature"></i>
                        <input type="text" placeholder="Title" id="title" value={game.title} onChange={(e) => setGame({...game, title: e.target.value})}/>
                    </div>
                </fieldset>

                <fieldset>
                    <label htmlFor="imgUrl">Image URL</label>
                    <div className={styles.formInput}>
                        <i className="fa-regular fa-image"></i>
                        <input type="url" placeholder="Image URL" id="imgUrl" value={game.imgUrl} onChange={(e) => setGame({...game, imgUrl: e.target.value})}/>
                    </div>
                </fieldset>

                <fieldset>
                    <label htmlFor="platform">Platform</label>
                    <div className={styles.formInput}>
                    <i className="fa-solid fa-gamepad"></i>
                        <select
                            name="platform" 
                            id="platform"
                            value={game.platform} onChange={(e) => setGame({...game, platform: e.target.value})}>
                                <option value="" selected disabled hidden>PLATFORM</option>
                                <option>OTHER</option>
                                <option>PLAYSTATION</option>
                                <option>XBOX</option>
                                <option>NINTENDO</option>
                                <option>PC</option>
                        </select>
                    </div>
                </fieldset>

                <fieldset>
                    <label htmlFor="description">Image URL</label>
                    <div className={styles.formInput}>
                        <i className='fa-solid fa-pen-to-square'></i>
                        <textarea
                            typeof="text"
                            placeholder="Description"
                            name="summary"
                            id="description"
                            value={game.description} 
                            onChange={(e) => setGame({...game, description: e.target.value})}
                        ></textarea>
                    </div>
                </fieldset>
                
                <button type="submit" onClick={(e) => addGame(e)} className={styles.createBtn}>Add</button>

            </form>

        </main>
    );
};

export default CreateGame;