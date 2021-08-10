function Photo({photoPath}){
    return (
        <div className = "photo">
            <img src={photoPath} alt="profile" />
        </div>
    );
}

export default Photo;