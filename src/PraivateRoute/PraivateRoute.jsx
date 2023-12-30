import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";


const PraivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log(location.pathname)


    if (loading) {
        return <span className="loading loading-spinner loading-lg justify-center my-72 ml-[700px]"></span>
    }
    if (user?.email) {
        return children;
    }

    return <Navigate state={{from: location.pathname}} to="/login" replace></Navigate>

};

export default PraivateRoute;