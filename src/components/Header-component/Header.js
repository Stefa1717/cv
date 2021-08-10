function Header(props){
    return (
        <div id="header">
            <div id="name">
                <span>{props.firstName}</span><span className="lastName">{props.lastName}</span>
            </div>
            <div className="jobTitle">{props.jobTitle}</div>
            <hr />
        </div>
    );
}

export default Header;