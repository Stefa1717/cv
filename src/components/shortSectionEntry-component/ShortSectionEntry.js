import './ShortSectionEntry.css';

function ShortSectionEntry(props){
    return (
        <div className="shortSectionEntry">
            <a href={props.titleUrl}><div className="title">{props.title}</div></a>
            <a href={props.descriptionUrl}><div>{props.description}</div></a>
            <div>{props.date}</div>
        </div>
    );
}

export default ShortSectionEntry;