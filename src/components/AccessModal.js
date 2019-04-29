import React from "react";
import { FormControl, InputGroup, Modal } from "react-bootstrap";
import styled from "styled-components";

const StyledInputText = styled(InputGroup.Text)`
    font-family: "Brandon Grotesque";
    font-weight: 500;
    @media (max-width: 600px) {
        font-size: 4vw;
    }
    @media (min-width: 601px) {
        font-size: 1.6rem;
    }
`;

const StyledFormControl = styled(FormControl)`
    font-family: "Brandon Grotesque";
    width: 1%;
    flex: 1 1 auto;
    position: relative;
    @media (max-width: 600px) {
        font-size: 4.1vw;
    }
    @media (min-width: 601px) {
        font-size: 1.65rem;
    }
`;

export class AccessModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.props.validate("pre-auth");
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
        if (value.length > 12) {
            validate(value.toLowerCase());
            console.log("Validating:", e.target.value);
        }
    };

    render() {
        const { open } = this.props;
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
