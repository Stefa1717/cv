import './Section.css';
import Components from '../../components'

function Section(props){
    return (
        <div>
            <div>{props.sectionName}</div>
            {props.elements?.map(block => Components(block))}
        </div>
    );
}

export default Section;