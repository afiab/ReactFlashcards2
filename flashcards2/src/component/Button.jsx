import React from "react";
import "./button.css";
const Button = (cards) =>  {
    return(
        <button {...cards}>
            {cards.children}
        </button>
    )
}

export default Button;