import { Link } from "react-router-dom"
export default function Navi(){
    return(<nav>
        <ul>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/About">ABOUT</Link></li>
            <li><Link to="/Contact">CONTACT</Link></li>
        </ul>
    </nav>)
}