import Nav from "./components/Nav"
import Scramble from "./components/Scramble"
import History from "./components/History"
import Stopwatch from "./components/Stopwatch"
import "./style.css"
import { useState } from "react"


function App() {


  const [timer, setTimer] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const [solveTimesShort, setSolveTimesShort] = useState([])


  function handleNewSolve() {

    if(solveTimesShort.length >= 5) {
      solveTimesShort.splice(0, 1)
    }

    setSolveTimesShort(solve => [...solve, {id: crypto.randomUUID(), solveTime: timer}])
  }
  
  function toggleTimer(e) {

      if(e.key == " ") {
        isRunning ? setIsRunning(false) : setIsRunning(true)
  
        if(isRunning === false) {
            setTimer(0)
        } else {
          handleNewSolve()
          console.log(solveTimesShort)
        }

      }
      
          
      }

  return (
    <div className="main-div" tabIndex={0} onKeyUp={toggleTimer}>
      <Nav />
      <Scramble />
      <Stopwatch timer={timer} setTimer={setTimer} isRunning={isRunning} />
      <History solveTimesShort={solveTimesShort} />
    </div>
  )
}

export default App
