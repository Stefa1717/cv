import './SectionEntry.css';

function SectionEntry(props){
    return (
        <div>
            <div>{props.title}</div>
            <div>{props.description}</div>
        </div>
    );
}

export default SectionEntry;