import { create } from "zustand";

import { createGameFormValidator } from "@/utils/formValidator";

const URL = "http://localhost:8080";
const token = JSON.parse(localStorage.getItem("auth"));

export const useGameStore = create (( set ) => ({
    games: [],
    createGames: (games) => set ({ games }),
    createGame: async (newGame) => {
        
        try {
        
            createGameFormValidator(newGame);
            
            const response = await fetch(`${URL}/api/v1/games/new`, {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newGame)
            });

            const data = await response.json();

            if (data.status !== 200) {
                throw { massage: data.massage }
            }

            set((state) => ({games: [...state.games, data.data]}));
            return { success: true, message: "Successfully created."}

        } catch (error) {
            
            return { success: false, message: error.message };
        }
    }

}));