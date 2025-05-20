import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { deleteRecetaById, fetchAllRecetasById } from '../features/recetas/service/receta.service'
import { supabase } from '../auth/supabaseAuth'

const useUserStore = create(
    persist(
        (set, get) => ({
            // --- ESTADO GLOBAL ---
            user: null,
            favoriteIds: [],
            favoriteRecetas: [],
            loadingFavorites: false,
            favoritesError: null,

            // --- SETTERS ---
            setUser: (user) => set({ user }),
            setFavorites: (ids) => set({ favoriteIds: ids }),
            setFavoriteRecetas: (recetas) => set({ favoriteRecetas: recetas }),

            // --- ACCIONES ---
            addFavorite: async (recipeId) => {
                const { user, favoriteIds, favoriteRecetas } = get()
                const numericId = Number(recipeId)

                if (!user) {
                    console.warn('Usuario no logueado.')
                    return
                }

                // Ya está en el store
                if (favoriteIds.includes(numericId)) {
                    console.log('Ya está en favoritos del store.')
                    return
                }

                try {
                    // Verificar si ya existe en Supabase
                    const { data: existing, error: checkError } = await supabase
                        .from('favorites')
                        .select('recipe_id')
                        .eq('user_id', user.id)
                        .eq('recipe_id', numericId)
                        .maybeSingle()

                    if (checkError) throw checkError
                    if (existing) {
                        console.log('Ya está en Supabase, actualizando Zustand...')
                        set({
                            favoriteIds: [...favoriteIds, numericId]
                        })

                        const recetaNueva = await fetchAllRecetasById([numericId])
                        if (recetaNueva?.length) {
                            set({
                                favoriteRecetas: [...favoriteRecetas, ...recetaNueva]
                            })
                        }

                        return
                    }

                    // Insertar en Supabase
                    const { error: insertError } = await supabase.from('favorites').insert([
                        { user_id: user.id, recipe_id: numericId }
                    ])

                    if (insertError) throw insertError

                    // Actualizar store
                    const recetaNueva = await fetchAllRecetasById([numericId])
                    set({
                        favoriteIds: [...favoriteIds, numericId],
                        favoriteRecetas: [...favoriteRecetas, ...recetaNueva]
                    })
                } catch (error) {
                    console.error('Error al agregar favorito:', error)
                }
            },

            removeFavorite: async (recipeId) => {
                const { user, favoriteIds, favoriteRecetas } = get()
                const numericId = Number(recipeId)

                if (!user) {
                    console.warn('Usuario no logueado.')
                    return
                }

                const existsInStore = favoriteIds.includes(numericId)
                if (!existsInStore) {
                    console.log('No está en favoritos del store.')
                    return
                }

                try {
                    // Verificar si existe en Supabase
                    const { error: deleteError } = await supabase
                        .from('favorites')
                        .delete()
                        .eq('user_id', user.id)
                        .eq('recipe_id', numericId)

                    if (deleteError) throw deleteError

                    // Actualizar estado local
                    set({
                        favoriteIds: favoriteIds.filter((id) => Number(id) !== numericId),
                        favoriteRecetas: favoriteRecetas.filter((r) => Number(r.id) !== numericId)
                    })
                } catch (error) {
                    console.error('Error al eliminar favorito:', error)
                }
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

            // --- RESET TOTAL ---
            reset: () =>
                set({
                    user: null,
                    favoriteIds: [],
                    favoriteRecetas: [],
                    loadingFavorites: false,
                    favoritesError: null
                })
        }),
        {
            name: 'user-store',
            partialize: (state) => ({
                user: state.user,
                favoriteIds: state.favoriteIds,
                favoriteRecetas: state.favoriteRecetas
            })
        }
    )
)

export default useUserStore
