import React from 'react'
import { Route, Routes } from 'react-router'
import LandingPage from '../components/LandingPage'
import SignIn from '../components/SignIn'
import SignOut from '../components/SignOut'
import Profile from '../features/user/pages/Profile'
import RecipeDetail from '../features/recetas/pages/RecetaDetail/RecetaDetail'

const Router = () => {
  return (
    <Routes>
      <Route index element={<LandingPage />} />
      <Route path='/signin' element={<SignIn />} />
      <Route path='/signout' element={<SignOut />} />
      <Route path='/profile' element={<Profile />} />

      <Route path="/receta/:id" element={<RecipeDetail />} />

    </Routes>
  )
}

export default Router