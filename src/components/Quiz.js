import { useState } from "react";
import "../App.css"
import { QuizData } from "../QuizData/QuizData";
import Score from "../components/score"

export default function QuizApp() {

    const [QuestionNo, setQuestionNo] = useState(0);
    const [score, setScore] = useState(0);
    const [selectOption, setSelectedOption] = useState(0)
    const [ShowResult, setResult] = useState(false);


    const Userscore = () => {
        if (selectOption === QuizData[QuestionNo].correctAns) {
            setScore(score + 1)

        }
    }

    const changeQuestion = () => {
        Userscore();
        if (QuestionNo < QuizData.length - 1) {
            setQuestionNo(QuestionNo + 1)
            setSelectedOption(0)
        }
        else {
            setResult(true)
        }
    }



    const resetAll = () => {
        setResult(false);
        setQuestionNo(0)
        setSelectedOption(0);
        setScore(0);

    }


    return <>

        <div  >
            <p className="heading"> Quiz App</p>
            <div className="container">
                {ShowResult ? (
                    <Score score={score} totalscore={QuizData.length} GoBack={resetAll} />
                ) : (
                    <>
                        <div className="question">
                            <span id="questionNo">{QuestionNo + 1}.</span>
                            <span id="questionNo" >{QuizData[QuestionNo].question}</span>
                        </div>
                        <div className="option-container">
                            {QuizData[QuestionNo].options.map((options, i) => {
                                return (
                                    <button
                                        className={`btn ${selectOption == i + 1 ? "checked" : null
                                            }`}
                                        key={i} onClick={() => { setSelectedOption(i + 1) }}>{options}</button>
                                )
                            })}
                        </div>
                        <input type="button" value="Next" id="next-button" onClick={changeQuestion} />
                    </>
                )}

            </div>
        </div>

    </>
}