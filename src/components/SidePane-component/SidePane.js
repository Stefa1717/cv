import './SidePane.css';
import Components from '../../components'

function SidePane(props){
    return (
        <div className="sidepane">
            {props.elements?.map(block => Components(block))}
        </div>
    );
}

export default SidePane;