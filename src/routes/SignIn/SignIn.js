import { signInWithGooglePopup, createUserDocFromStore } from "../../Utils/Firebase/Firebase"

const SignIn = () => {
    const openPopup = async () => {
        const { user } = await signInWithGooglePopup();
        const createdUser = await createUserDocFromStore(user);
    }
    return (
        <div>
            <button onClick={openPopup}>Sign In with Google Pop</button>
        </div>
    )
}

export default SignIn

