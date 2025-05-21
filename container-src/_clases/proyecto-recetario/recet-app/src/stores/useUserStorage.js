import { create } from "zustand";
import { persist } from "zustand/middleware";
import { supabase } from "../auth/supabase.auth";


const dataToPersit = persist(
    (set, get) => ({
        user: null,
        favoriteIds: [],
        favoriteRecetas: [],

        setUser: user => set({ user }),
        setFavorites: ids => set({ favoriteIds: ids }),
        setFavoriteRecetas: recetas => set({ favoriteRecetas: recetas }),

        addFavorite: async (id) => {
            const { user, favoriteIds, favoriteRecetas } = get()
            const normalizedId = Number(id)

            if (favoriteIds.includes(normalizedId)) {
                console.log("Ya se encuentra en mi lista");

                return
            }


            try {
                const { data: existData, error: checkError } = await supabase
                    .from("favorites")
                    .select("recipe_id")
                    .eq("user_id", user.id)
                    .eq("recipe_id", normalizedId)
                    .maybeSingle()


                if (checkError) throw checkError

                if (existData) {

                    set({ favoriteIds: [...favoriteIds, normalizedId] })

                }


                const { error: insertionError } = await supabase
                    .from("favorites")
                    .insert([{ user_id: user.id, recipe_id: normalizedId }])

                if (insertionError) throw insertionError

            } catch (error) {
                console.error('Error al agregar favorito:', error)

            }

        },

        reset: () =>
            set({
                user: null,
                favoriteIds: [],
                favoriteRecetas: []
            })
    })
    ,
    {
        name: 'user-storage',
        partialize: (state) => ({
            user: state.user,
            favoriteIds: state.favoriteIds,
            favoriteRecetas: state.favoriteRecetas
        })
    }
)

export const useUserStorage = create(dataToPersit)