import {Link} from "react-router-dom";
import React from "react";

const NavMenu = () => {

    return (
        <div>
            <Link to='/'>Home</Link>
            <br/>
            <Link to='/lists'>Lists users</Link>
            <br/>
            <Link to='/user1'>User1</Link>
            <Link to='/counter'>Counter</Link>
        </div>
    )
}

export default NavMenu;