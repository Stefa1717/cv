import './Footer.css';

function Footer(props){
    return (
        <div className = "footer">
            <div id="agreement">{props.text}</div>
        </div>
    );
}

export default Footer;