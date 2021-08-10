import Components from '../../components'

function MainPane({elements}){
    return (
        <div className="col-9">
            {elements?.map(block => Components(block))}
        </div>
    );
}

export default MainPane;