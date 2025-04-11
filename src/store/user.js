import { create } from "zustand";

const URL = "http://localhost:8080";
const token = JSON.parse(localStorage.getItem("auth"));

export const useUserStore = create (( set ) => ({
    users: [],
    createUsers: (users) => set ({ users }),
    getUser: async () => {
        
        try {
        
            const response = await fetch(`${URL}/api/v1/users/me`, {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });

            const data = await response.json();
            console.log(data.status);
            
            if (data.status !== 200) {
                throw { massage: data.massage }
            }

            set((state) => ({users: [...state.users, data.data]}));
            return { success: true, message: "Successfully created."}

        } catch (error) {
            
            return { success: false, message: error.message };
        }
    }

}));