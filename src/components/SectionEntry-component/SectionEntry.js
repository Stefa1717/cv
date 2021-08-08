import './SectionEntry.css';
import Components from '../../components'

function SectionEntry(props){
    return (
        <div className="sectionEntry">
            <a href={props.link}>
                <div className="title">{props.title}</div>
            </a>
            <div className={props.descriptionClass}>{props.description}</div>
            <div>{props.date}</div>
            {props.projects?.map(block => Components(block))}
        </div>
    );
}

export default SectionEntry;