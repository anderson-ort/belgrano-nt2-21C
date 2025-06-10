import { create } from "zustand";
import { persist } from "zustand/middleware";
import { supabase } from "../auth/supabase.auth";
import { fetchAllRecetasById } from "../features/recetas/service/receta.service";


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

                console.log(existData);


                if (!existData) {

                    const { error: insertionError } = await supabase
                        .from("favorites")
                        .insert([{ user_id: user.id, recipe_id: normalizedId }])

                    if (insertionError) throw insertionError


                    set({
                        favoriteIds: [...favoriteIds, normalizedId]
                    })


                }





            } catch (error) {
                console.error('Error al agregar favorito:', error)

            }

        },

        removeFavorite: async (id) => {
            const normalizedId = Number(id)
            const { user, favoriteIds, favoriteRecetas } = get()

            const { error } = await supabase
                .from('favorites')
                .delete()
                .eq('user_id', user.id)
                .eq('recipe_id', normalizedId)

            if (error) throw new Error(" Opps algo malio sal");


            const new_recipes = favoriteIds.filter(r => r != normalizedId)

            set(
                {
                    favoriteIds: new_recipes
                }
            )


        },
        loadFavoriteRecetas: async () => {
            const ids = get().favoriteIds
            if (!ids || ids.length === 0) return set({ favoriteRecetas: [] })

            set({ loadingFavorites: true, favoritesError: null })

            try {
                const recetas = await fetchAllRecetasById(ids)
                set({ favoriteRecetas: recetas })
            } catch (error) {
                console.error('Error al cargar recetas favoritas:', error)
                set({ favoritesError: 'Error al cargar favoritos' })
            } finally {
                set({ loadingFavorites: false })
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