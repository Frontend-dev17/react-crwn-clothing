import "./SignInForm.scss";

import { signInUserWithEmailAndPassword } from "../../Utils/Firebase/Firebase";
import FormInput from "../FormInput/FormInput";
import { useState } from "react";
import Button from "../Button/Button";

import { signInWithGooglePopup, createUserDocFromStore } from "../../Utils/Firebase/Firebase"


const formDefaultfields = {
    email: "",
    password: "",
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(formDefaultfields);


    const { email, password } = formFields;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormFields({ ...formFields, [name]: value })
    }

    const googleSignIn = async () => {
        await signInWithGooglePopup();
    }
    const resetFields = () => {
        setFormFields(formDefaultfields)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { user } = await signInUserWithEmailAndPassword(email, password);
            resetFields();
        }
        catch (err) {
            switch (err.code) {
                case "auth/user-not-found":
                    alert("User not authenticated with the email");
                    break;
                case "auth/wrong-password":
                    alert("Password is incorrect")
                    break;
                default:
                    console.error(err);
            }
        }
    }

    return (
        <div className="sign-in-container" >
            <h2>Already have an account?</h2>
            <span>Sign Up using email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label="Email"
                    type="email"
                    required
                    onChange={handleChange}
                    value={email}
                    name="email"
                />
                <FormInput
                    label="Password"
                    type="password"
                    required
                    onChange={handleChange}
                    value={password}
                    name="password"
                />
                <div className="buttons-container">
                    <Button type="submit">Sign In</Button>
                    <Button buttonType="google" type="button" onClick={googleSignIn}>Google SignIn</Button>
                </div>
            </form>
        </div>
    )
}

export default SignInForm