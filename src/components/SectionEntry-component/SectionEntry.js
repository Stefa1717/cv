import './SectionEntry.css';
import Components from '../../components'

function SectionEntry(props){
    return (
        <div>
            <a href={props.link}>
                <div>{props.title}{props.language}</div>
            </a>
            <div>{props.description}{props.stars}</div>    
            <div>{props.date}</div>
            {props.projects?.map(block => Components(block))}
        </div>
    );
}

export default SectionEntry;