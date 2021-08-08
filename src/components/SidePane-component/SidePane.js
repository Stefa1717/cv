import './SidePane.css';
import Components from '../../components'

function SidePane(props){
    return (
        <div id="sidepane" className="col-3">
            {props.elements?.map(block => Components(block))}
        </div>
    );
}

export default SidePane;