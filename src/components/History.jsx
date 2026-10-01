import "./component-styles.css"

function History({ solveTimesShort, solveTimes }) {

    const reversedTimes = [...solveTimesShort].reverse()

    let sumOfSolves = 0

    for(let i = 0; i<solveTimes.length; i++) {
        sumOfSolves += solveTimes[i].solveTime
    }
    
    console.log(sumOfSolves)



    return(
        <div className="history-container">

            <ul className="last5-container">
                <h3>Last 5 solves</h3>
                {reversedTimes.map((time, index) => {
                  
                    return (
                        <li key={time.id}>
                        
                            <span>{index + 1}. </span>
                            <span className="digits">
                                 {("0" + Math.floor((time.solveTime / 1000) % 60)).slice(-2)}.
                            </span>
                            <span className="digits mili-sec">
                                {("0" + ((time.solveTime / 10) % 100)).slice(-2)}
                            </span>
                        </li>
                    )
                })}
            </ul>

            <ul className="ao-container">
                <li>Average of 05: {sumOfSolves / solveTimes.length} </li>
                <li>Average of 12: 30.00</li>
                <li>Average of 50: 30.00</li>
                <li>Average of 100: 30.00</li>
            </ul>
            

        </div>
    )
}
export default History