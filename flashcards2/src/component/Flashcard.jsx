import React, {useState} from 'react';
const Flashcard = (cards) => {
    const [isQuestion, setIsQuestions] = useState(true);
    function handleClick() {
        setIsQuestions(prev => !prev)
    }

    let backgroundColor = ''
    if(cards.difficulty === "easy") {
        backgroundColor ="#44f264"
    }else if(cards.difficulty === "medium") {
        backgroundColor ="#f2cc44"
    } else if(cards.difficulty === "hard") {
        backgroundColor ="#eb4034"
    } else{
        backgroundColor ="#cbaecf"
    }

    return isQuestion ? (
        <div className="card" onClick={handleClick}>
            <style>
                {`
                .card {
                    color:black;
                    display:flex;
                    background-color: ${backgroundColor};
                    width:500px;
                    height:200px;
                    padding:5%;
                    margin-left:auto;
                    margin-right:auto;
                    justify-content: center;
                }
                `}
            </style>
            <div className="content">
                <h2>{cards.question}</h2>
            </div>
        </div>
    ) : (
        <div className="card" onClick={handleClick}>
            <style>
                {`
                .card {
                    color: black;
                    background-color: ${backgroundColor};
                    width: 500px;
                    height: 200px;
                    padding: 5%;
                    margin-left: auto;
                    margin-right: auto;
                }
                `}
            </style>
        <div className="content">
            <h2>{cards.answer}</h2>
        </div>
    </div>

    )
}

export default Flashcard;