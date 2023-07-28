import SignInForm from "../../Components/SignInForm/SignInForm";
import SignUpForm from "../../Components/SignUpForm/SignUpForm";

import "./Authentication.scss"

const Authentication = () => {

    return (
        <div className="auth-page-container">
            <SignInForm />
            <SignUpForm />
        </div>
    )
}

export default Authentication

