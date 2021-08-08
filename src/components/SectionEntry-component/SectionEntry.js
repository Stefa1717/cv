import './SectionEntry.css';
import Components from '../../components'

function SectionEntry(props){
    return (
        <div className="row">
            <div className="col-3">
                <div>{props.date}</div>
                <div>({props.experience})</div>
            </div>
            <div className="col-9">
                <div><a href={props.link}><span className="title">{props.title}</span></a><span className="additionalInfo"></span></div>
                <div className={props.descriptionClass}>{props.description}</div>
                {/* <div className="emphasis">{props.stack}</div> */}
                <div className="projects">
                    {props.projects?.map(block => Components(block))}
                </div>
            </div>
        </div>
    );
}

export default SectionEntry;