import React from "react";
import { useState, useEffect } from "react";

const Pizza = (props: PizzaProps) => {
    const [pizzaTime, setPizzaTime] = useState<{ message: string }>();

    // useEffect(() => {
    //     const TOKEN = localStorage.getItem("token");
    //     fetch("/api/pizza", {
    //         method: "GET",
    //         headers: {
    //             Authorization: `Bearer ${TOKEN}`,
    //         },
    //     })
    //         .then((res) => res.json())
    //         .then((data) => setPizzaTime(data));
    // }, []);
    return (
        <div>
            <h1 className="text-center">{pizzaTime?.message}123</h1>
        </div>
    );
};

interface PizzaProps {}

export default Pizza;
