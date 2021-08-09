import './SectionEntry.css';
import Components from '../../components'

function SectionEntry(props){
    return (
        <div className="sectionEntry">
            <div><a href={props.link}><span className="title">{props.title}</span></a><span className="additionalInfo">{props.experience} {props.date}</span></div>
            <div className={props.descriptionClass}>{props.description}</div>
            {/* <div className="emphasis">{props.stack}</div> */}
            <div className="projects">
                {props.projects?.map(block => Components(block))}
            </div>
        </div>
    );
}

export default SectionEntry;