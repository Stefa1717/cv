import './MainPane.css';
import Components from '../../components'

function MainPane(props){
    return (
        <div className="mainpane">
            {props.elements?.map(block => Components(block))}
        </div>
    );
}

export default MainPane;