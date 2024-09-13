import { InvertedBtn, BaseButton, GoogleSignIn } from "./Button.styles";

export const BUTTON_CLASS_TYPES = {
    base: 'base',
    google: "google-sign-in",
    inverted: "inverted",
}

const getButton = (buttonType = BUTTON_CLASS_TYPES.base) => ({
    [BUTTON_CLASS_TYPES.base]: BaseButton,
    [BUTTON_CLASS_TYPES.google]: GoogleSignIn,
    [BUTTON_CLASS_TYPES.inverted]: InvertedBtn,

}[buttonType])

const Button = ({ children, buttonType, ...otherProps }) => {
    const CustomeButton = getButton(buttonType)
    return (
        <CustomeButton  {...otherProps}> {children}</CustomeButton >
    )
}

export default Button