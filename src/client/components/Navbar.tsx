import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="bg-secondary p-2 d-flex justify-content-around">
            <NavLink
                to={"/"}
                className="btn btn-info m-2"
            >
                Home
            </NavLink>
            <NavLink
                to={"/login"}
                className="btn btn-info m-2"
            >
                Login
            </NavLink>
            <NavLink
                to={"/pizza"}
                className="btn btn-info m-2"
            >
                Pizza Time!
            </NavLink>
        </div>
    );
};

export default Navbar;
