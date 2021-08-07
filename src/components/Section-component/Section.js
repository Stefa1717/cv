import React, { Component } from "react"
import './Section.css';

function Section(props){
    return (
        <div>
            <div>{props.sectionName}</div>
            <div>{props.title}{props.value}</div>
        </div>
    );
}

export default Section;