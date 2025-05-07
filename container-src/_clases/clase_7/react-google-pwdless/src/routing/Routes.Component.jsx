import React from 'react'
import { Routes, Route } from 'react-router'
import LandingPage from '../components/LandingPage'
import SignUp from '../components/SignUp'
import SignIn from '../components/SignIn'


const RoutesComponent = () => {
    return (
        <Routes>
            <Route index element={<LandingPage />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
        </Routes>
    )
}

export default RoutesComponent
