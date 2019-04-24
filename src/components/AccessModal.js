import React from "react";
import { FormControl, InputGroup, Modal, Tooltip } from "react-bootstrap";
import styled from "styled-components";

const StyledInputText = styled(InputGroup.Text)`
    font-family: "Brandon Grotesque";
    font-weight: 500;
    font-size: 1.8rem;
`;

const StyledFormControl = styled(FormControl)`
    font-family: "Brandon Grotesque";
    font-size: 1.8rem;
    width: 1%;
    flex: 1 1 auto;
    position: relative;
`;

export class AccessModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.input.focus();
    }

    handleSubmit = e => {
        console.log("submit", this.state);
        e.preventDefault();
    };

    handleChange = e => {
        const { validate } = this.props;
        const value = e.target.value;
        if (value.length > 5) {
            validate(value.toLowerCase());
            console.log("Validating:", e.target.value);
        }
    };

    render() {
        const { open } = this.props;
        console.log("ciao");
        return (
            <Modal show={open} size={"lg"} centered={true} onHide={() => console.log("insert password before")}>
                <InputGroup>
                    <InputGroup.Prepend>
                        <StyledInputText>Inserisci la password</StyledInputText>
                    </InputGroup.Prepend>
                    <StyledFormControl
                        placeholder="Qui"
                        aria-label="Password"
                        onChange={this.handleChange}
                        ref={i => {
                            this.input = i;
                        }}
                    />
                </InputGroup>
            </Modal>
        );
    }
}
