import React from "react";
import Header from './components/Header-component/Header'
import Section from './components/Section-component/Section'
import Footer from './components/Footer-component/Footer'

const Components = {
    header: Header,
    section: Section,
    footer: Footer
  };

export default block => {
    // component does exist
    if (typeof Components[block.component] !== "undefined") {
        return React.createElement(Components[block.component], block);
    }
    // component doesn't exist yet
    return React.createElement(
        () => <div>The component {block.component} has not been created yet.</div>
    );
}