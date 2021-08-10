import React from "react";
import Header from './components/Header/Header'
import SidePane from './components/SidePane/SidePane'
import MainPane from './components/MainPane/MainPane'
import Footer from './components/Footer/Footer'
import Section from './components/Section/Section'
import SectionEntry from './components/SectionEntry/SectionEntry'
import ShortSectionEntry from './components/ShortSectionEntry/ShortSectionEntry'
import Photo from './components/Photo/Photo'
import Language from './components/Language/Language'
import Task from './components/Task/Task'

const Components = {
    header: Header,
    sidepane: SidePane,
    mainpane: MainPane,
    footer: Footer,
    section: Section,
    sectionEntry: SectionEntry,
    shortSectionEntry: ShortSectionEntry,
    photo: Photo,
    language: Language,
    task: Task
  };

 var components = block => {
    // component does exist
    if (typeof Components[block.componentName] !== "undefined") {
        return React.createElement(Components[block.componentName], block);
    }
    // component doesn't exist yet
    return React.createElement(
        () => <div>The component {block.componentName} has not been created yet.</div>
    );
}

export default components;