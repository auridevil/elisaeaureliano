import React from "react";
import { Col, Navbar, Nav, Row } from "react-bootstrap";
import styled from "styled-components";

import { black } from "../data/colors.yaml";

const HeaderVoice = styled(Nav.Link)`
    color: ${black};
    font-family: "Brandon Grotesque";
    padding-left: 35px;
    padding-right: 35px;
    letter-spacing: 0.3em;
    &:hover {
        color: ${black};
        cursor: grab;
    }
`;

export const Header = () => (
    <Navbar className="justify-content-center">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-center">
            <Nav className="justify-content-center">
                <Row>
                    <Col>
                        <Nav.Item className="d-flex align-items-center">
                            <HeaderVoice href="#details" tabIndex="01">
                                DETTAGLI
                            </HeaderVoice>
                        </Nav.Item>
                    </Col>
                    <Col>
                        <Nav.Item className="d-flex align-items-center">
                            <HeaderVoice href="#dinner" tabIndex="02">
                                RINFRESCO
                            </HeaderVoice>{" "}
                        </Nav.Item>
                    </Col>
                    <Col>
                        <Nav.Item className="d-flex align-items-center">
                            <HeaderVoice href="#rsvp" tabIndex="03">
                                CONFERMA LA PRESENZA
                            </HeaderVoice>{" "}
                        </Nav.Item>
                    </Col>
                    <Col>
                        <Nav.Item className="d-flex align-items-center">
                            <HeaderVoice href="#present" tabIndex="04">
                                REGALO
                            </HeaderVoice>
                        </Nav.Item>
                    </Col>
                </Row>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);
