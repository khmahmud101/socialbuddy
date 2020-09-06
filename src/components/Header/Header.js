import React from 'react';
import {
    Link
} from "react-router-dom";
const Header = () => {
    const headerStyle = {
        textAlign: "center",
        display: "block",
        background: "blue",
        margin: "0",
        padding: "30px",
        color: "#fff"
    }
    return (
        <div>
            <h1 style={headerStyle}>Social Buddy Post List</h1>
            <h1> <Link to="/">Home</Link></h1>
        </div>
    );
};

export default Header;