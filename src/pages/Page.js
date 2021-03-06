import React, { Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Header } from "../components/Header";
import { AccessModal } from "../components/AccessModal";
import { GlobalStyle } from "../styles/main-styles";
import { DetailSection } from "../sections/DetailSection";
import { DinnerSection } from "../sections/DinnerSection";
import { FootSection } from "../sections/FootSection";
import { HeadSection } from "../sections/HeadSection";
import { PresentSection } from "../sections/PresentSection";
import { RSVPSection } from "../sections/RSVPSection";

import { auth } from "../actions/auth";
import { rsvp } from "../actions/rsvp";

class Page extends React.Component {
    renderSubSite() {
        const { authDone, authData, rsvp, rsvpDone } = this.props;
        return authDone ? (
            <Fragment>
                <DetailSection id="details" />
                <DinnerSection id="dinner" />
                <RSVPSection authData={authData} rsvp={rsvp} rsvpDone={rsvpDone} id="presence" />
                <PresentSection id="present" />
                <FootSection />
            </Fragment>
        ) : (
            undefined
        );
    }

    render() {
        const { authDone, validateAuth } = this.props;
        return (
            <Fragment>
                <AccessModal open={!authDone} validate={validateAuth} />
                <Header />
                <HeadSection />
                {this.renderSubSite()}
                <GlobalStyle />
            </Fragment>
        );
    }
}

export default connect(
    state => ({
        authDone: state.auth.authDone,
        authData: state.auth.data,
        rsvpDone: state.rsvp.rsvpDone
    }),
    dispatch => ({
        rsvp: bindActionCreators(rsvp, dispatch),
        validateAuth: bindActionCreators(auth, dispatch)
    })
)(Page);
