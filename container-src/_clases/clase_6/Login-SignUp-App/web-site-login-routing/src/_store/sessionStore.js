import { create } from "zustand";
import { persist } from "zustand/middleware";
//esto me permite tener acceso de manera global a distintos puntos de mi app
//admeas me gustaria tener algo que me permita persistirlo en localstorage

const storageData = persist(
	(set) => ({
		user: null,
		login: (user) => set({ user }),
		logout: () => set({ user: null }),
	}),
	{ name: "session-storage" }, // esto nos permite mantenerlo en el localstorage
);

export const userSessionStore = create(storageData);
