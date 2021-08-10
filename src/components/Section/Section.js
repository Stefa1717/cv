import Components from '../../components'

function Section({sectionName, elements}){
    return (
        <div className="section">
            <div className="sectionName">{sectionName}</div>
            {elements?.map(block => Components(block))}
        </div>
    );
}

export default Section;