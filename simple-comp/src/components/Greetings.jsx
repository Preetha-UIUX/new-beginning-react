import React from "react";

const Greetings = ({ name }) => {
    return (
        <p className="text-lg">
            Hello, <span className="font-bold">{name}!</span>
        </p>
    )
}

export default Greetings