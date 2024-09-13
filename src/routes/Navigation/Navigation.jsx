import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
display: flex;
justify-content: space-between;
margin: 3rem 0;
align-items: center;
font-size: 2rem;
`

export const NavLinksContainer = styled.div`
display: flex;
gap: 3rem;
align-items: center;
`

export const NavLink = styled(Link)`
text-transform: uppercase;
cursor: pointer;
`







// .nav - container {
//     display: flex;
//     justify - content: space - between;
//     margin: 3rem 0;
//     align - items: center;
//     font - size: 2rem;

//     .nav - links - container {
//         display: flex;
//         gap: 3rem;
//         align - items: center;

//         .nav - link {
//             text - transform: uppercase;
//             cursor: pointer;
//         }
//     }

// }