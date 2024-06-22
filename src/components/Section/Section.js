import Components from '../../components'

function Section({sectionName, elements, className}){
    return (
        <div className="section" class={className}>
            <div className="sectionName">{sectionName}</div>
            {elements?.map(block => Components(block))}
        </div>
    );
}

export default Section;