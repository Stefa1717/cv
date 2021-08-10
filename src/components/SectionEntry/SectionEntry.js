import Components from '../../components'

function SectionEntry({url, title, experience, date, descriptionClass, description, tasks}){
    return (
        <div className="sectionEntry">
            <div><a href={url}><span className="title">{title}</span></a><span className="additionalInfo">{experience} {date}</span></div>
            <div className={descriptionClass}>{description}</div>
            <div className="tasks">
                <ul>{tasks?.map(block => Components(block))}</ul>
            </div>
        </div>
    );
}

export default SectionEntry;