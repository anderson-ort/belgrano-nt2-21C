import { Navigate } from "react-router"

const ProtectedRoute = ({ user, children }) => {
    if(!user){
        return (<Navigate to={"/"}/>)
    }

    return children
}

export default ProtectedRoute