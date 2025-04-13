import styles from "./Profile.module.css";

import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

import { AuthContext } from "@/contexts/AuthContext";
import { useUserStore } from "@/store/user";

import { FaFolderOpen } from "react-icons/fa";
import { BsPlusSquare } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const navigate = useNavigate();
    const {userInfo} = useContext(AuthContext);
    const { getUser } = useUserStore();
    const [defaultUserInfo, setDefaultUserInfo] = useState({
        username: "",
        email: "orel40@gmail.com",
        profileImg: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
    })

    useEffect(() => {

        getUser()
            .then(data => console.log(data))
            .catch(error => console.error(error))

    },[userInfo]);
    
    const editProfileInfo = (e) => {
        e.preventDefault;

        toast.success("Profile successfully edit.");
    }

    return (
        <main className={styles.profile}>

            <div className={styles.userContainer}>
                <div className={styles.profileCard}>
                    <figure className={styles.profileImgContainer}>
                        <img className={styles.defaultProfileImg} src={defaultUserInfo.profileImg} alt="profile img" />
                    </figure>

                    <p>My profile</p>

                    <form className={styles.editProfileForm}>

                        <input type="text" placeholder="Username" value={defaultUserInfo.username} onChange={(e) => setDefaultUserInfo({...defaultUserInfo, username: e.target.value})}/>
                        <input type="text" value={defaultUserInfo.email} onChange={(e) => setDefaultUserInfo({...defaultUserInfo, email: e.target.value})}/>
                        <input type="text" placeholder="Profile Img" value={defaultUserInfo.profileImg} onChange={(e) => setDefaultUserInfo({...defaultUserInfo, profileImg: e.target.value})}/>

                        <button className={styles.editProfileBtn} type="submit" onClick={(e) => editProfileInfo(e)}>Edit</button>
                    </form>
                </div>

                <div className={styles.userGamesContainer}>

                    <div className={styles.addGameContainer} onClick={() => navigate("/create")}>
                        <BsPlusSquare fontSize={30}/>
                    </div>

                    <div className={styles.gameContainer} onClick={() => navigate("/details")}>
                        <figure className={styles.gameCoverContainer}>
                            <img className={styles.gameImg} src="https://upload.wikimedia.org/wikipedia/en/7/77/Assassins_Creed_2_Box_Art.JPG" alt="game cover" />
                        </figure>

                        <p>AC 2</p>

                        <FaFolderOpen fontSize={30}/>
                    </div>

                    <div className={styles.gameContainer} onClick={() => navigate("/details")}>
                        <figure className={styles.gameCoverContainer}>
                            <img className={styles.gameImg} src="https://upload.wikimedia.org/wikipedia/en/thumb/b/b5/God_of_War_%282005%29_cover.jpg/250px-God_of_War_%282005%29_cover.jpg" alt="game cover" />
                        </figure>

                        <p>God of war</p>

                        <FaFolderOpen fontSize={30}/>
                    </div>

                    <div className={styles.gameContainer} onClick={() => navigate("/details")}>
                        <figure className={styles.gameCoverContainer}>
                            <img className={styles.gameImg} src="https://image.api.playstation.com/vulcan/ap/rnd/202009/1710/UUnpHLJqLAIJX5HioswiPuAm.png" alt="game cover" />
                        </figure>

                        <p>DMC 5</p>

                        <FaFolderOpen fontSize={30}/>
                    </div>

                </div>
            </div>
            
        </main>
    );
};

export default Profile;
