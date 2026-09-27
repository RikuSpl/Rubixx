import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faRotateLeft} from "@fortawesome/free-solid-svg-icons"
import "./component-styles.css"

function Scramble() {

    return (
        <div className="scramble-container">
            <p className="scramble">U' F2 R2 L D L F2 B' R F' U2 F2 U R2 U2 F2 L2 B2 U B2 R2</p>
            
            <div className="reset-button">
                <FontAwesomeIcon icon={faRotateLeft} />
                <span className="reset-scramble">reset scramble</span>
            </div>
            
            
        </div>
    )
}
export default Scramble