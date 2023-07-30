import { Link, Outlet } from "react-router-dom"
import { Fragment, useContext } from "react";
import { ReactComponent as Crown } from "../../Assests/Svg/Crown.svg"

import { UserContext } from "../../Components/Contexts/Contexts";
import { signOutUser } from "../../Utils/Firebase/Firebase";

import './Navigation.scss';

const Navigation = () => {

    const { currentUser, setCurrentUser } = useContext(UserContext)

    const handleSignOut = async () => {
        await signOutUser(currentUser)
        setCurrentUser(null)
    }

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
                            <span className="nav-link" onClick={handleSignOut}>SignOut</span>
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