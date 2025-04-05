import styles from "./CreateGame.module.css";

import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const CreateGame = () => {

    const addGame = () => {

        toast.success("Game successfully saved.");
        
    }

    return (
        <main className={styles.addGame}>
            <section className={styles.header}>
                <h2><Link to="/">THE <span>GAME</span> IS NEVER <span>OVER</span></Link></h2>
                <p className={styles.logo}></p>
            </section>

            <form className={styles.addGameForm} action={addGame}>

                <h3>Add Game</h3>

                <fieldset>
                    <label htmlFor="title">Title</label>
                    <div className={styles.formInput}>
                        <i className="fa-solid fa-file-signature"></i>
                        <input type="text" placeholder="Title" id="title" />
                    </div>
                </fieldset>

                <fieldset>
                    <label htmlFor="imgUrl">Image URL</label>
                    <div className={styles.formInput}>
                        <i className="fa-regular fa-image"></i>
                        <input type="url" placeholder="Image URL" id="imgUrl" />
                    </div>
                </fieldset>

                <fieldset>
                    <label htmlFor="platform">Platform</label>
                    <div className={styles.formInput}>
                    <i className="fa-solid fa-gamepad"></i>
                        <select
                            name="platform" 
                            id="platform">
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
                        ></textarea>
                    </div>
                </fieldset>
                
                <button type="submit" className={styles.createBtn}>Add</button>

            </form>

        </main>
    );
};

export default CreateGame;