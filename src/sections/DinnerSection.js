import React from "react";

import { DetailButton } from "../components/DetailButton";
import { Details, InfoTitle, Pane, RestaurantImage, SubTitle, Underline } from "../styles/dinner-styles";
import pdragoimage from "../images/pdrago2.jpg";

const pdragoMap = "https://goo.gl/maps/TUey59Z8Cf72";
const pdragoInsta = "https://www.instagram.com/palazzo_drago/";

export class DinnerSection extends React.Component {
    render() {
        return (
            <Pane id={this.props.id}>
                <InfoTitle>{"Rinfresco"}</InfoTitle>
                <Underline />
                <br />
                <a href={pdragoInsta} target="_blank">
                    <RestaurantImage src={pdragoimage} />
                </a>
                <SubTitle>{"Palazzo Drago"}</SubTitle>
                <Details>{"In via Guglielmo Marconi 13, a Verzuolo (CN). Dalle 19 in poi."}</Details>
                <p>
                    <DetailButton link={pdragoMap} color={"white"} tabIndex={"30"}>
                        {"Visualizza sulla mappa"}
                    </DetailButton>
                </p>
            </Pane>
        );
    }
}

export default DinnerSection;
