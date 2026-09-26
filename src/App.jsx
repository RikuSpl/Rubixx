import Nav from "./components/Nav"
import Scramble from "./components/Scramble"
import Timer from "./components/Timer"
import History from "./components/History"
import "./style.css"


function App() {

  return (
    <div className="main-div">
      <Nav />
      <Scramble />
      <Timer />
      <History />
    </div>
  )
}

export default App
