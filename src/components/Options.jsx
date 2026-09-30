

function Options({ timer, isRunning }) {

    return (

        isRunning == false && timer > 0 ? (
            <div className="options container">
                <ul className="options-list">
                    <li className="options-item">reset</li>
                    <li className="options-item">delete</li>
                    <li className="options-item">DNF</li>
                    <li className="options-item">+2</li>
                </ul>
            </div>
        ) : (
            <div className="options container">
                <ul className="options-list">
                    <li className="options-item"></li>
                    <li className="options-item"></li>
                    <li className="options-item"></li>
                    <li className="options-item"></li>
                </ul>
            </div>
            )
        
    )

}
export default Options