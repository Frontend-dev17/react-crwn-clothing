

import styled, { css } from "styled-components";

const mainClr = 'black'
const subClr = 'grey'

const shrinkLabel = css`

    top: -14px;
    font-size: 12px;
    color: ${mainClr};
`

export const FormInputLabel = styled.label`
    color: ${subClr};
    font-size: 16px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: 300ms ease all;

    ${({ shrink }) => shrink && shrinkLabel}

    
`

export const FormInputStyle = styled.input`
    background: none;
    background-color: white;
    color: ${subClr};
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 100 %;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid ${subClr};
    margin: 25px 0;

    
    &:focus {
        outline: none;
    }

        &:focus~ ${FormInputLabel}{
        ${shrinkLabel}
    }

`



export const Group = styled.div`
position: relative;
margin: 35px 0;

input[type = 'password'] {
    letter-spacing: 0.3em;
}
`

