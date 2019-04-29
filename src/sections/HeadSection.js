import React from "react";
import { sample } from "lodash";

import { header } from "../data/sentences.yaml";
import { HeadSubtitle, HeadTitle, Pane, ScrollDown } from "../styles/head-styles";

export class HeadSection extends React.Component {
    render() {
        return (
            <Pane>
                <div id="mark">
                    <svg width="200" id="markSvg" viewBox="0 0 521 52" fill="currentColor" version="1.1" id="markSvg" x="0px" y="0px" viewBox="0 0 200 52" style={{ opacity: "80%" }}>
                        <rect id="Rectangle-1" x="33.8" y="24.8" width="140.9" height="2.3" />
                        <g>
                            <path
                                d="M179.7,35.2l8.5-18.8c0.1-0.2,0.2-0.3,0.5-0.3h0.3c0.3,0,0.4,0.1,0.5,0.3l8.5,18.8c0.2,0.4-0.1,0.7-0.5,0.7h-1.1
		c-0.3,0-0.4-0.2-0.5-0.3l-2.1-4.6h-9.9l-2,4.6c-0.1,0.1-0.2,0.3-0.5,0.3h-1.1C179.8,35.9,179.6,35.6,179.7,35.2z M193,29.3
		c-1.4-3.1-2.7-6.1-4.1-9.2h-0.2l-4.1,9.2H193z"
                            />
                        </g>
                        <g>
                            <path
                                d="M16,16.7c0-0.3,0.2-0.5,0.5-0.5h11c0.3,0,0.5,0.3,0.5,0.5v0.8c0,0.3-0.2,0.5-0.5,0.5h-9.4v6.8h8c0.3,0,0.5,0.3,0.5,0.5v0.8
		c0,0.3-0.3,0.5-0.5,0.5h-8v7.1h9.4c0.3,0,0.5,0.3,0.5,0.5v0.8c0,0.3-0.2,0.5-0.5,0.5h-11c-0.3,0-0.5-0.3-0.5-0.5V16.7z"
                            />
                        </g>
                    </svg>
                </div>
                <HeadTitle>{sample(header)}</HeadTitle>
                <HeadSubtitle>si sposano</HeadSubtitle>
                <ScrollDown>
                    <h3>{"Scorri giù"}</h3>
                    <svg id="scrollplz-arrow" height="50px" viewBox="0 0 5 27" stroke="none" fill="currentColor">
                        <rect x="2" y="0" width="1" height="23" />
                        <path d="M0,22.244 L2.493,26.562 L4.986,22.244 L0,22.244 Z" />
                    </svg>
                </ScrollDown>
            </Pane>
        );
    }
}

export default HeadSection;
