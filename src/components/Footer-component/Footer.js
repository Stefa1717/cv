import './Footer.css';

function Footer(props){
    return (
        <div className = "footer">
            <div>{props.text}</div>
        </div>
    );
}

export default Footer;