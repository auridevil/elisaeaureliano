import React from "react";

import DetailButton from "../components/DetailButton";
import { Description, IconImg, InfoBlock, InfoTitle, Pane, PaneRow, SubDescription, TitleSection, Underline, WhoBlock } from "../styles/detail-styles";
import watchIcon from "../images/icons_watch.svg";
import tentIcon from "../images/icons_tent.svg";
import mountainIcon from "../images/icons_mountains.svg";

const castleMap = "https://goo.gl/maps/FeGxYMqCmcp";

export class DetailSection extends React.Component {
    render() {
        return (
            <Pane id={this.props.id}>
                <WhoBlock>
                    <TitleSection>
                        <IconImg src={tentIcon} />
                        <InfoTitle>{"Chi"}</InfoTitle>
                        <Underline />
                    </TitleSection>
                    <Description>{"Le persone che ci sono più care"}</Description>
                    <SubDescription>{"famiglia e amici"}</SubDescription>
                </WhoBlock>
                <PaneRow>
                    <InfoBlock>
                        <TitleSection>
                            <IconImg src={watchIcon} />
                            <InfoTitle>{"Quando"}</InfoTitle>
                            <Underline />
                        </TitleSection>
                        <Description>{"21 Giugno 2019 - 16:30"}</Description>
                        <SubDescription>{"Un venerdì"}</SubDescription>
                        <p>
                            <DetailButton link={"elisaeaureliano.ics"} tabIndex={"20"}>
                                {"Aggiungi al calendario"}{" "}
                            </DetailButton>
                        </p>
                    </InfoBlock>
                    <InfoBlock>
                        <TitleSection>
                            <IconImg src={mountainIcon} />
                            <InfoTitle>{"Dove"}</InfoTitle>
                            <Underline />
                        </TitleSection>
                        <Description>{"Fossano (CN)"}</Description>
                        <SubDescription>{"Al castello degli acaja"}</SubDescription>
                        <p>
                            <DetailButton link={castleMap} tabIndex={"21"}>
                                {"Visualizza sulla mappa"}
                            </DetailButton>
                        </p>
                    </InfoBlock>
                </PaneRow>
            </Pane>
        );
    }
}

export default DetailSection;
