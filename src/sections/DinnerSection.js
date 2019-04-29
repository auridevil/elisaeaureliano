import React from "react";

import { DetailButton } from "../components/DetailButton";
import { Details, InfoTitle, Pane, RestaurantImage, SubTitle, Underline } from "../styles/dinner-styles";
import pdragoimage from "../images/pdrago.jpg";

const pdragoMap = "https://goo.gl/maps/TUey59Z8Cf72";

export class DinnerSection extends React.Component {
    render() {
        return (
            <Pane>
                <InfoTitle>{"Rinfresco"}</InfoTitle>
                <Underline />
                <br />
                <RestaurantImage src={pdragoimage} />
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
