import Components from '../../components'

function MainPane(props){
    return (
        <div className="col-9">
            {props.elements?.map(block => Components(block))}
        </div>
    );
}

export default MainPane;