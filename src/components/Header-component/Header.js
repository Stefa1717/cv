import './Header.css';

function Header(props){
    return (
        <div className="row">
            <div className="col">
                <img src={props.photoPath} width="80" height="100" alt="profile" />
            </div>
            <div className="col-9">
                {props.firstName} {props.lastName} {props.jobTitle}
            </div>
        </div>
    );
}

export default Header;