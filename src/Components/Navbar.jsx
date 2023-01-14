import React from "react";
import "../Stylesheets/Navbar.css"

function Navbar(){
    return(
        <>
        <div className="nav">
            <a id="logodiv" href="https://www.myntra.com/men-footwear" target="_blank" rel="noreferrer">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo86V8DNn7gB518n86LA5ZOlx9XMzMQ07TlSllBTah0LPx2XurX-9oCBYhmjJFceNyb3Y&usqp=CAU" alt="logo" id="logo">

                </img>
            </a>
            <ul id="navtools">
                <li>Home</li>
                <li>Products</li>
                <li>About</li>
                <li>Contact Us</li>
            </ul>

            <ul id="login">
                <li>LogIn</li>
                <li>SignUp</li>
            </ul>
        </div>
        </>
    );
}

export default Navbar;