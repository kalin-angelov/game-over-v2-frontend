
import { useContext } from "react";

import { AuthContext } from "@/contexts/AuthContext";

const Profile = () => {

    const { userInfo } = useContext(AuthContext);
    console.log(userInfo);
    

    return (
        <main>
            <h1>Welcome: {userInfo.email} to your Profile page</h1>
        </main>
    );
};

export default Profile;
