import './Photo.css';

function Photo(props){
    return (
        <div className = "photo">
            <img src={props.photoPath} width="80" height="100" alt="profile" />
        </div>
    );
}

export default Photo;