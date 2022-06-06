import React from "react"
import { Link } from "react-router-dom"
import "./Footer.css"

export const FootNav = (props) => {
    return (
        <ul className="navbar">
            <button className="navbar__item active">
                <Link className="navbar__link" to="/Favorites">Favorites</Link>               
            </button>
            <button className="navbar__item active"> 
            <Link className="navbar__link" to="/WheelSpin">Spin The Wheel!</Link>
            </button>
            <button className="navbar__item active"> 
            <Link className="navbar__link" to="#"
                onClick={
                    () => {
                        localStorage.removeItem("MealWheel_User")
                    }
                }>
                Logout</Link>
            </button>
        </ul>
    )
}