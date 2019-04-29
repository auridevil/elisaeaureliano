import styled from "styled-components";

import { black, white } from "../data/colors.yaml";
import { Navbar, Nav } from "react-bootstrap";

export const HeaderVoice = styled(Nav.Link)`
    color: ${black};
    font-family: "Brandon Grotesque";
    padding-left: 35px;
    padding-right: 35px;
    letter-spacing: 0.3em;
`;

export const CenteredNavbar = styled(Navbar)`
    width: 100%;
    background-color: ${white};
    text-align: center;
`;
