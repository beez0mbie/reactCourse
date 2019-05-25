import React from 'react';
import "./Header.css"

const name = "Alex"
const surname = "Shmel"

function Header() {
    return (
        <header className="navbar">
            Hello {`${name} ${surname}`} you are in the header component
        </header> 
    )
};

export default Header;