import React, { Component } from "react"
import './Header.css';

function Header(props){
    return (
        <article>
            <div>{props.userName}</div>
            <img src={props.photoPath} width="100" height="100" />
        </article>
    );
}

export default Header;