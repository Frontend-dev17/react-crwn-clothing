import "./SignUpForm.scss";
import { useContext, useState } from "react";
import { signUpUserWithEmailAndPassword, createUserDocFromStore } from "../../Utils/Firebase/Firebase"
import FormInput from './../FormInput/FormInput';
import Button from './../Button/Button';
import { UserContext } from "../Contexts/Contexts";


const defaultFormFields = {
    "displayName": "",
    "email": "",
    "password": "",
    "confirmPassword": ""
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { displayName, email, password, confirmPassword } = formFields;

    const resetFields = () => {
        setFormFields(defaultFormFields)
    }

    const { setCurrentUser } = useContext(UserContext)

    const formOnSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {
            const { user } = await signUpUserWithEmailAndPassword(email, password)
            setCurrentUser(user);
            await createUserDocFromStore(user, { displayName })
            resetFields()


        } catch (err) {
            if (err.code === "auth/email-already-exist") {
                alert("Email already exists")
            } else {
                console.error("Error creating user", err)
            }
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormFields({ ...formFields, [name]: value })
    }

    return (
        <div className="sign-up-container">
            <h2>Don't have a account?</h2>
            <span>Sign Up using email and password</span>
            <form onSubmit={formOnSubmit} className="group">
                <FormInput
                    label="Display Name"
                    required
                    type="text"
                    onChange={handleChange}
                    value={displayName}
                    name="displayName"
                />

                <FormInput label="Email" type="email" required onChange={handleChange} value={email} name="email" />

                <FormInput label="Password" type="password" required onChange={handleChange} value={password} name="password" />

                <FormInput label="Confirm Password" type="password" required onChange={handleChange} value={confirmPassword} name="confirmPassword" />

                <Button type="submit">Sign Up</Button>
            </form>
        </div>
    )
}

export default SignUpForm;