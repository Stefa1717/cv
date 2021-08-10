import Components from '../../components'

function SidePane({elements}){
    return (
        <div id="sidepane" className="col-3">
            {elements?.map(block => Components(block))}
        </div>
    );
}

export default SidePane;