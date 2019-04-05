import React from "react";
import { sample } from "lodash";

import Section from "../components/section";

import { mainColor } from "../data/colors.yaml";
import { header } from "../data/sentences.yaml";
import { HeadSubtitle, HeadTitle, ScrollDown } from "../styles/head-styles";
import topo from "../images/topo.svg";

export class HeadSection extends React.Component {
    render() {
        return (
            <Section background={topo} backgroundColor={mainColor} index={0}>
                <div id="mark">
                    <svg width="200" id="markSvg" viewBox="0 0 521 52" fill="currentColor" data-reactid=".4">
                        <path
                            d="M513.972288,10.3745848 C512.100856,7.30193188 509.716867,5.74808077 505.914404,5.74808077 C501.909302,5.74808077 497.522762,8.41182552 497.522762,12.7228861 C497.522762,16.566623 501.384824,18.5877978 504.50785,19.76779 L508.107674,21.1347116 C515.223882,23.880238 520.564018,27.7239749 520.564018,35.948871 C520.564018,44.8864356 513.50741,51.2887695 504.50785,51.2887695 C496.390367,51.2887695 490.060875,45.4121747 489,37.5144052 L495.329492,36.205899 C495.269892,41.6268532 499.656432,45.5406887 505.044248,45.5406887 C510.432064,45.5406887 514.294126,41.1011141 514.294126,35.948871 C514.294126,30.6564308 509.967186,28.378228 505.652165,26.6257644 L502.183461,25.1887442 C496.461886,22.7703444 491.26479,19.5691774 491.26479,12.7228861 C491.26479,4.76670113 498.452517,3.55271368e-15 506.045523,3.55271368e-15 C511.635978,3.55271368e-15 516.225158,2.67542784 518.954825,7.43044588 L513.972288,10.3745848 L513.972288,10.3745848 Z"
                            id="Shape"
                            data-reactid=".4.0"
                        />
                        <rect id="Rectangle-1" x="88" y="23" width="367" height="6" data-reactid=".4.1" />
                        <path
                            d="M12.456344,38.9514254 L6.7347697,51.2770864 L0,51.2770864 L23.9710122,0 L47.9420243,51.2770864 L41.2072546,51.2770864 L35.4976003,38.9514254 L12.456344,38.9514254 L12.456344,38.9514254 Z M23.9710122,13.4355547 L15.0548923,33.3318586 L32.899052,33.3318586 L23.9710122,13.4355547 L23.9710122,13.4355547 Z"
                            id="Shape"
                            data-reactid=".4.2"
                        />
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
            </Section>
        );
    }
}

export default HeadSection;
