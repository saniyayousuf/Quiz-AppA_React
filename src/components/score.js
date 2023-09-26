export default function Score(props) {


    return <>
        <div className="show-score">
            Your Score : {props.score}
            <div className="abc">Total Questions : {props.totalscore}  </div>

            <button id="next-button" onClick={props.GoBack}>Go Back</button>
        </div>
    </>
}