import { create } from "zustand";

import { registerFormValidator } from "@/utils/formValidator";

const URL = "http://localhost:8080";

export const useAuthStore = create (( set ) => ({
    auths: [],
    createAuths: (auths) => set ({ auths }),
    createAuth: async(newAuth) => {

        try {

            registerFormValidator(newAuth);
            
            const response = await fetch(`${URL}/api/v1/auth/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newAuth)
            });

            const data = await response.json();

            if (data.status !== 200) {
                throw { massage: data.massage }
            }

            set((state) => ({auths: [...state.auths, data.data]}));
            return { success: true, message: "Successfully register."}

        } catch (error) {
            
            return { success: false, message: error.message };
        }
    },
    singInAuth: async(auth) => {

        if(!auth.email  || !auth.password) {
            return { success: false, message: "Please provide all fields"};
        }

        try {
            const response = await fetch(`${URL}/api/v1/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(auth)
            });

            const data = await response.json();

            if (data.status !== 200) {
               throw { message: data.message }
            }
            

            return { success: true, message: "Welcome", data: data };

        } catch (error) {
            return { success: false, message: error.message };
        }   
    }
}));