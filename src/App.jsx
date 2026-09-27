import Nav from "./components/Nav"
import Scramble from "./components/Scramble"
import History from "./components/History"
import Stopwatch from "./components/Stopwatch"
import "./style.css"
import { useState } from "react"


function App() {


  const [timer, setTimer] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  
      function toggleTimer(e) {

          if(e.key == " ") {
            isRunning ? setIsRunning(false) : setIsRunning(true)
  
            if(isRunning === false) {
                setTimer(0)
            }

          }
      }

  return (
    <div className="main-div" tabIndex={0} onKeyUp={toggleTimer}>
      <Nav />
      <Scramble />
      <Stopwatch timer={timer} setTimer={setTimer} isRunning={isRunning} />
      <History />
    </div>
  )
}

export default App
