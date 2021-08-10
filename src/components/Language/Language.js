function Language({language, stars}){
    return (
        <div>
            {language} {PrintStars(stars)}
        </div>
    );
}

function PrintStars(blackStarsCount){
    let result = [];
    let key = 0;
    const blackStar = (k) => <span key={k}>&#9733;</span>;
    const whiteStar = (k) => <span key={k}>&#9734;</span>;
    const maxStarsCount = 5;
    const whiteStarsCount = maxStarsCount - blackStarsCount;
    
    function AddBlackStar(count){
        if (count === 0) return;
        result.push(blackStar(key++));
        AddBlackStar(count-1)
    }
    
    function AddWhiteStar(count){
        if (count === 0) return;
        result.push(whiteStar(key++))
        AddWhiteStar(count-1)
    }

    AddBlackStar(blackStarsCount);
    AddWhiteStar(whiteStarsCount);
    return result;
}

export default Language;
