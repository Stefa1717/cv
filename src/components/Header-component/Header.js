import './Header.css';

function Header(props){
    return (
        <article>
            <div>{props.firstName} {props.lastName}</div>
            <img src={props.photoPath} width="80" height="100" alt="profile" />
        </article>
    );
}

export default Header;