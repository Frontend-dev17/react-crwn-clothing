import { Link, Outlet } from "react-router-dom"
import { Fragment, useContext } from "react";
import { ReactComponent as Crown } from "../../Assests/Svg/Crown.svg"

import CartIcon from "../../Components/CartIcon/CartIcon";
import CartDropdown from "../../Components/CartDropdown/CartDropdown";

import { UserContext } from "../../Components/Contexts/Contexts";
import { CartContexts } from "../../Components/Contexts/Cartcontexts";
import { signOutUser } from "../../Utils/Firebase/Firebase";

import { NavLink, NavLinksContainer, NavigationContainer } from "./Navigation.jsx";

const Navigation = () => {

    const { currentUser } = useContext(UserContext)
    const { isCartOpen } = useContext(CartContexts)



    return (
        <Fragment>
            <NavigationContainer>
                <Link to="/" className="logo-container">
                    <Crown />
                </Link>
                <NavLinksContainer>
                    <NavLink to="/shop">Shop</NavLink>
                    <NavLink to="/">Contact</NavLink>
                    {currentUser ?
                        (
                            <NavLink as='span' onClick={signOutUser}>SignOut</NavLink>
                        )
                        :
                        (

                            <NavLink to="/auth">Sign in</NavLink>
                        )
                    }
                    <CartIcon />
                </NavLinksContainer>
                {isCartOpen && <CartDropdown />}
            </NavigationContainer>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;