import React from "react";
import { Col, Navbar, Nav, Row } from "react-bootstrap";

import { HeaderVoice } from "../styles/header-styles";
export const Header = () => (
    <Navbar className="justify-content-center">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-center">
            <Nav className="justify-content-center">
                <Row>
                    <Col>
                        <Nav.Item className="d-flex align-items-center">
                            <HeaderVoice href="#details">DETTAGLI</HeaderVoice>
                        </Nav.Item>
                    </Col>
                    <Col>
                        <Nav.Item className="d-flex align-items-center">
                            <HeaderVoice href="#dinner">RINFRESCO</HeaderVoice>{" "}
                        </Nav.Item>
                    </Col>
                    <Col>
                        <Nav.Item className="d-flex align-items-center">
                            <HeaderVoice href="#rsvp">CONFERMA LA PRESENZA</HeaderVoice>{" "}
                        </Nav.Item>
                    </Col>
                    <Col>
                        <Nav.Item className="d-flex align-items-center">
                            <HeaderVoice href="#present">REGALO</HeaderVoice>
                        </Nav.Item>
                    </Col>
                </Row>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

/*
                    <HeaderVoice>{"DETTAGLI"}</HeaderVoice>
                    <HeaderVoice>{"RINFRESCO"}</HeaderVoice>
                    <HeaderVoice>{"CONFERMA LA PRESENZA"}</HeaderVoice>
                    <HeaderVoice>{"REGALO"}</HeaderVoice>
                    */
