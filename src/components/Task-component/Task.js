import './Task.css';

function Task(props){
    return (
        <li>
            <a href={props.titleUrl}><span>{props.title}</span></a> {props.text}
        </li>
    );
}

export default Task;
