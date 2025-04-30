import { create } from "zustand";


const storeData = (set) => ({
    repos: null,
    addRepositories: (repos) => set({ repos }),

})


export const useStoreRepos = create(storeData)