import { Link, Outlet } from "react-router-dom"
import { Fragment } from "react";
import { ReactComponent as Crown } from "../../Assests/Svg/Crown.svg"

import './Navigation.scss';

const Navigation = () => {
    return (
        <Fragment>
            <div className="nav-container">
                <Link to="/" className="logo-container">
                    <Crown />
                </Link>
                <div className="nav-links-container">
                    <Link className="shop-link" to="/">Shop</Link>
                    <Link className="shop-link" to="/">Contact</Link>
                    <Link className="shop-link" to="/auth">Sign in</Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;