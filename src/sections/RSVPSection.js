import React from "react";
import { Form, Row } from "react-bootstrap";
import isEmail from "validator/lib/isEmail";

import { DetailButton } from "../components/DetailButton";
import { Block, Centered, IconImg, InfoTitle, LineInput, LineLabel, Pane, SubTitle, Underline } from "../styles/rsvp-styles";
import rsvpImage from "../images/rsvp.png";

export class RSVPSection extends React.Component {
    constructor(...args) {
        super(...args);
    }

    handleSubmit(e) {
        const { authData, rsvp } = this.props;
        const { Email, Nome, Note } = this.state;
        console.log("submit", this.state);
        e.preventDefault();
        if (isEmail(Email) && Nome.length > 2) {
            rsvp({ Email, Nome, Note, Data: new Date() }, authData);
        }
    }

    handleInputChange(event) {
        const state = {};
        console.log();
        state[event.target.name] = event.target.value;
        this.setState(state);
    }

    render() {
        console.log(this.state);
        const { rsvpDone } = this.props;

        return (
            <Pane id={this.props.id}>
                <InfoTitle>{"Conferma la tua presenza"}</InfoTitle>
                <IconImg src={rsvpImage} />
                <Underline />
                {!rsvpDone ? (
                    <Block>
                        <Form.Group className={"float-label-control"}>
                            <Row>
                                <LineLabel>Nomi degli invitati</LineLabel>
                                <LineInput size="lg" required name="Nome" id="Nome" aria-label="name" onChange={this.handleInputChange.bind(this)} placeholder={"Inserisci i nomi"} size={"lg"} />
                                <Form.Text className="text-muted" tabIndex={"40"}>
                                    {"Inserisci i nomi delle persone per cui confermi la presenza"}
                                </Form.Text>
                            </Row>
                        </Form.Group>

                        <Form.Group>
                            <Row>
                                <LineLabel>Necessità alimentari e note</LineLabel>
                                <LineInput placeholder="Inserisci le note" aria-label="notes" name="Note" onChange={this.handleInputChange.bind(this)} />
                                <Form.Text className="text-muted" tabIndex={"41"}>
                                    {"Aggiungi eventuali necessità alimentari, allergie o annotazioni"}
                                </Form.Text>
                            </Row>
                        </Form.Group>

                        <Form.Group>
                            <Row>
                                <LineLabel>Email</LineLabel>
                                <LineInput placeholder="Inserisci l'email" type="email" aria-label="email" name="Email" onChange={this.handleInputChange.bind(this)} />
                                <Form.Text className="text-muted" tabIndex={"42"}>
                                    {"Lasciaci la tua email"}
                                </Form.Text>
                            </Row>
                        </Form.Group>
                        <Centered>
                            <DetailButton variant="primary" type="submit" handler={this.handleSubmit.bind(this)} tabIndex={43}>
                                Conferma
                            </DetailButton>
                        </Centered>
                    </Block>
                ) : (
                    <SubTitle>{"grazie per la conferma!"}</SubTitle>
                )}
            </Pane>
        );
    }
}

export default RSVPSection;
