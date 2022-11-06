import logo from '../logo.svg';
import Title from "../components/Title";
import Navi from "../components/Navi";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom"

export default function Layout() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <Title />
            </header>
            <div className="App-body">
                <div id='navi'>
                    <Navi />
                </div>
                <Outlet />
            </div>
            <div id='foot'>
                <Footer />
            </div>
        </div>
    )
}