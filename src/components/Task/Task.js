function Task({title, titleUrl, text}){
    return (
        <li>
            <a href={titleUrl}><span>{title}</span></a> {text}
        </li>
    );
}

export default Task;
