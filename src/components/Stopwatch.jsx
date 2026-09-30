
import { useEffect } from "react"
import "./component-styles.css"
import Options from "./Options"

function Stopwatch({ timer, setTimer, isRunning}){

    useEffect(() => {

        let interval = null

        if(isRunning) {
            interval = setInterval(() => {
                setTimer((time) => time + 10)
           }, 10)
        } else {
            clearInterval(interval)
        }

        return () => {
            clearInterval(interval)
        }

    }, [isRunning, setTimer] )


    return (
        <div>
            <div className="timer-container">
                <div className="timer">
                    <span className="digits">
                        {("0" + Math.floor((timer / 1000) % 60)).slice(-2)}.
                    </span>
                    <span className="digits mili-sec">
                        {("0" + ((timer / 10) % 100)).slice(-2)}
                    </span>
                </div>
            </div>
            <Options timer={timer} isRunning={isRunning} />
        </div>
    )
} 

export default Stopwatch