import { zustand } from "zustand";

export const useAuthStore = create (( set ) => ({
    auths: [],
    createAuths: (auth) => set ({ auths }),
    createAuth: async(newAuth) => {

        if (!newAuth.email || !newAuth.password || !newAuth.rePassword) {

            return { success: false, message: "All fields are required" };
        }

        if (newAuth.password !== newAuth.rePassword) {

            return { success: false, message: "Password don't match" };
        }

        try {
            
            const response = await fetch(`/api/auth/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newAuth)
            });

            const data = await response.json();

            if (data.status !== 201) {
                throw { massage: data.massage }
            }

            set((state) => ({auths: [...state.auths, data.data]}));
            return { success: true, message: "Successfully register."}

        } catch (error) {
            return { success: false, error: error.message };
        }
    },
    singInAuth: async(auth) => {

        if(!auth.username  || !auth.password) {
            return { success: false, message: "Please provide all fields"};
        }

        try {
            const response = await fetch(`/api/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(auth)
            });

            const data = await response.json();
            console.log(data);
            
            if (data.status !== 200) {
               throw { message: data.message }
            }
            
            return { success: true, message: "Welcome"};

        } catch (error) {
            return { success: false, message: error.message };
        }   
    }
}));