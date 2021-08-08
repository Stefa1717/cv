import './Section.css';
import Components from '../../components'

function Section(props){
    return (
        <div>
            <div className="sectionName">{props.sectionName}</div>
            {props.elements?.map(block => Components(block))}
        </div>
    );
}

export default Section;