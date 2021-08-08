import './Language.css';

function Language(props){
    return (
        <div>
            <div className="title">{props.language} {PrintStars(props.stars)}</div>
        </div>
    );
}

function PrintStars(blackStarsCount){
    let result = [];
    const blackStar = <span>&#9733;</span>;
    const whiteStar = <span>&#9734;</span>;
    const maxStarsCount = 5;
    const whiteStarsCount = maxStarsCount - blackStarsCount;

    function AddBlackStar(count){
        if (count == 0) return;
        result.push(blackStar);
        AddBlackStar(count-1)
    }
    
    function AddWhiteStar(count){
        if (count == 0) return;
        result.push(whiteStar)
        AddWhiteStar(count-1)
    }

    AddBlackStar(blackStarsCount);
    AddWhiteStar(whiteStarsCount);
    return result;
}

export default Language;
