import { create } from "zustand";
import { persist } from "zustand/middleware";


const storeData = persist((set) => ({
    user: null,
    loginUser: (user) => set({ user }),
    logoutUser: () => set({ user: null })

}), { name: "log-user" }
)


export const useStoreUser = create(storeData)