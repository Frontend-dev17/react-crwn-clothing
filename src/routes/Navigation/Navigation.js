import { Link, Outlet } from "react-router-dom"
import { Fragment, useContext } from "react";
import { ReactComponent as Crown } from "../../Assests/Svg/Crown.svg"

import { UserContext } from "../../Components/Contexts/Contexts";
import { signOutUser } from "../../Utils/Firebase/Firebase";

import './Navigation.scss';

const Navigation = () => {

    const { currentUser } = useContext(UserContext)



    return (
        <Fragment>
            <div className="nav-container">
                <Link to="/" className="logo-container">
                    <Crown />
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to="/">Shop</Link>
                    <Link className="nav-link" to="/">Contact</Link>
                    {currentUser ?
                        (
                            <span className="nav-link" onClick={signOutUser}>SignOut</span>
                        )
                        :
                        (

                            <Link className="nav-link" to="/auth">Sign in</Link>
                        )
                    }
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;