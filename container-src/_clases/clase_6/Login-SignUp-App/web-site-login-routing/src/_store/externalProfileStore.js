import { create } from "zustand";
import { persist } from "zustand/middleware";

const storeProfileData = persist(
	(set) => ({
		profile: null,
		setProfile: (data) => set({ profile: data }),
		clearProfile: () => set({ profile: null }),
	}),
	{ name: "profile-storage" },
);

export const externalProfileStore = create(storeProfileData);
