import "./component-styles.css"

function History({ solveTimesShort }) {

    const reversedTimes = [...solveTimesShort].reverse()


    return(
        <div className="history-container">

            <ul>
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

            <ul>
                <h3>ao5</h3>
                <li>30.00</li>
                <h3>ao10</h3>
                <li>30.00</li>
                <h3>ao50</h3>
                <li>30.00</li>
            </ul>
            

        </div>
    )
}
export default History