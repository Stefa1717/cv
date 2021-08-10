function Header({firstName, lastName, jobTitle}){
    return (
        <div id="header">
            <div id="name">
                <span>{firstName}</span><span className="lastName">{lastName}</span>
            </div>
            <div className="jobTitle">{jobTitle}</div>
            <hr />
        </div>
    );
}

export default Header;