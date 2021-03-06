import React from "react";
import './Button.scss';
import { Link } from "react-router-dom";

const NavButton: React.FC<{content: any, component:string}>= (props) => {
    return (
            <Link to={props.component} className="nav-btn">{props.content}</Link>
    );
}
export default NavButton;