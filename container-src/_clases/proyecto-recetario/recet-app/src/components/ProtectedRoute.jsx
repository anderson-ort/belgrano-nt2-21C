
import { Navigate, Outlet } from 'react-router'

export const ProtectedRoute = ({ isAuthenticated }) => {
    return isAuthenticated ? <Outlet /> : <Navigate to="/" reset />
}

export default ProtectedRoute