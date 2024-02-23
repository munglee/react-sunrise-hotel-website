import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div>
                            <div className="headerDecoration1"></div>
                            <div className="navTitleDiv">
                <h1>⸙ SUNRISE HOTEL ⸙</h1>
            </div>
                <div className="headerDecoration2"></div>

            <div className="navDiv">
                <ul className="nav">
                    <li>
                        <Link className="nav-bar-link" to={"/"}>About Us</Link>
                    </li>
                    <li>
                        <Link className="nav-bar-link" to={"/room"}>Book Now!</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};
export default NavBar;