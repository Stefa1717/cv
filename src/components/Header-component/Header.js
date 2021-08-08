import './Header.css';

function Header(props){
    return (
        <div className="header">
            {props.firstName} {props.lastName} {props.jobTitle}
        </div>
    );
}

export default Header;