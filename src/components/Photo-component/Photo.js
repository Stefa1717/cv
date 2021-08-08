import './Photo.css';

function Photo(props){
    return (
        <div className = "photo">
            <img src={props.photoPath} alt="profile" />
        </div>
    );
}

export default Photo;