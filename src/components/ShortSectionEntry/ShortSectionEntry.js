function ShortSectionEntry({title, titleUrl, description, descriptionUrl, date}){
    return (
        <div>
            <a href={titleUrl}><div className="title">{title}</div></a>
            <a href={descriptionUrl}><div>{description}</div></a>
            <div>{date}</div>
        </div>
    );
}

export default ShortSectionEntry;