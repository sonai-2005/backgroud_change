import React, { useState } from "react";

export const Button = () => {
    const [bgColor, setBgColor] = useState("white");

    const changeColor = (color) => {
        setBgColor(color);
    };

    return (
        <div style={{ backgroundColor: bgColor, height: "100vh", padding: "2vh" }}>
            <button type="button" className="btn btn-primary" onClick={() => changeColor("blue")}>Blue</button>
            <button type="button" className="btn btn-secondary" onClick={() => changeColor("grey")}>Grey</button>
            <button type="button" className="btn btn-success" onClick={() => changeColor("green")}>Green</button>
            <button type="button" className="btn btn-danger" onClick={() => changeColor("red")}>Red</button>
            <button type="button" className="btn btn-warning" onClick={() => changeColor("yellow")}>Yellow</button>
            <button type="button" className="btn btn-info" onClick={() => changeColor("magenta")}>Magenta</button>
            <button type="button" className="btn btn-light" onClick={() => changeColor("white")}>White</button>
            <button type="button" className="btn btn-dark" onClick={() => changeColor("black")}>Black</button>
        </div>
    );
};
