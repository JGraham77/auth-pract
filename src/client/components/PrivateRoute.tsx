import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = (props: PrivateRouteProps) => {
    const TOKEN = localStorage.getItem("token");

    if (!TOKEN) {
        return <Navigate to="/login" />;
    } else {
        return (
            <div>
                <Outlet />
            </div>
        );
    }
};

interface PrivateRouteProps {}

export default PrivateRoute;
