import { Link, Outlet } from "react-router-dom"
import { Fragment, useContext } from "react";
import { ReactComponent as Crown } from "../../Assests/Svg/Crown.svg"

import CartIcon from "../../Components/CartIcon/CartIcon";
import CartDropdown from "../../Components/CartDropdown/CartDropdown";

import { UserContext } from "../../Components/Contexts/Contexts";
import { CartContexts } from "../../Components/Contexts/Cartcontexts";
import { signOutUser } from "../../Utils/Firebase/Firebase";

import './Navigation.scss';

const Navigation = () => {

    const { currentUser } = useContext(UserContext)
    const { isCartOpen } = useContext(CartContexts)



    return (
        <Fragment>
            <div className="nav-container">
                <Link to="/" className="logo-container">
                    <Crown />
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to="/shop">Shop</Link>
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
                    <CartIcon />
                </div>
                {isCartOpen && <CartDropdown />}
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;