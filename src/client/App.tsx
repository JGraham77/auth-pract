import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Login from "./views/Login";
import Pizza from "./views/Pizza";
import PrivateRoute from "./components/PrivateRoute";

const App = (props: AppProps) => {
    return (
        <BrowserRouter>
            <Navbar />
            <main className="container">
                <Routes>
                    <Route
                        path="/"
                        element={<Home />}
                    />
                    <Route
                        path="/login"
                        element={<Login />}
                    />
                    <Route
                        path="/pizza"
                        element={
                            <PrivateRoute>
                                <Pizza />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/*"
                        element={<h1 className="text-center text-danger">404 Not Found</h1>}
                    />
                </Routes>
            </main>
        </BrowserRouter>
    );
};

interface AppProps {}

export default App;
