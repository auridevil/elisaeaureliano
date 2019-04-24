import React from "react";
import { Col, Form, InputGroup, OverlayTrigger, Tooltip, Row } from "react-bootstrap";

import { DetailButton } from "../components/DetailButton";
import { Block, IconImg, InfoTitle, LineInput, LineLabel, Pane, RestaurantImage, SubTitle, Underline } from "../styles/rsvp-styles";
import rsvpImage from "../images/rsvp.png";

export class RSVPSection extends React.Component {
    handleSubmit = e => {
        const { authData, rsvp } = this.props;
        console.log("submit", this.state);
        e.preventDefault();
        rsvp({ ...this.state, Data: new Date() }, authData);
    };

    handleInputChange(event) {
        const state = {};
        console.log();
        state[event.target.name] = event.target.value;
        this.setState(state);
    }

    /*Chi sei, quanti siete, quanti bambini, eventuali intolleranze, note + password, email*/
    render() {
        console.log(this.state);

        return (
            <Pane>
                <InfoTitle>{"Conferma la tua presenza"}</InfoTitle>
                <IconImg src={rsvpImage} />
                <Underline />

                <Block>
                    <Form inline={false}>
                        <Form.Group className={"float-label-control"}>
                            <Row>
                                <LineLabel for="Nome">Nomi degli invitati</LineLabel>
                                <LineInput
                                    name="Nome"
                                    id="Nome"
                                    aria-label="name"
                                    onChange={this.handleInputChange.bind(this)}
                                    placeholder={"Inserisci i nomi delle persone per cui confermi la presenza"}
                                    size={"lg"}
                                />
                            </Row>
                        </Form.Group>

                        <Form.Group>
                            <Row>
                                <LineLabel>Necessità alimentari e note</LineLabel>
                                <LineInput placeholder="Aggiungi eventuali necessità alimentari, allergie o annotazioni" aria-label="notes" name="Note" onChange={this.handleInputChange.bind(this)} />
                            </Row>
                        </Form.Group>

                        <Form.Group>
                            <Row>
                                <LineLabel>Email</LineLabel>
                                <LineInput placeholder="Lasciaci la tua email" aria-label="email" name="Email" onChange={this.handleInputChange.bind(this)} />
                            </Row>
                        </Form.Group>

                        <DetailButton variant="primary" type="submit" handler={this.handleSubmit.bind(this)}>
                            Conferma
                        </DetailButton>
                    </Form>
                </Block>
            </Pane>
        );
    }
}

export default RSVPSection;
