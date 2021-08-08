import './ShortSectionEntry.css';

function ShortSectionEntry(props){
    return (
        <div className="sectionEntry">
            <a href={props.link}><div className="title">{props.title}</div></a>
            <div>{props.description}</div>
            <div>{props.date}</div>
        </div>
    );
}

export default ShortSectionEntry;