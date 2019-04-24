import React, { Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { GlobalStyle } from "../styles/main-styles";
import { DetailSection } from "../sections/DetailSection";
import { DinnerSection } from "../sections/DinnerSection";
import { FootSection } from "../sections/FootSection";
import { HeadSection } from "../sections/HeadSection";
import { RSVPSection } from "../sections/RSVPSection";
import { AccessModal } from "../components/AccessModal";

import { auth } from "../actions/auth";
import { rsvp } from "../actions/rsvp";

class Page extends React.Component {
    renderSubSite() {
        const { authDone, authData, rsvp } = this.props;
        return authDone ? (
            <Fragment>
                <DetailSection />
                <DinnerSection />
                <RSVPSection authData={authData} rsvp={rsvp} />
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
                <AccessModal open={!authDone} validate={validateAuth} yar />
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
        authData: state.auth.data
    }),
    dispatch => ({
        rsvp: bindActionCreators(rsvp, dispatch),
        validateAuth: bindActionCreators(auth, dispatch)
    })
)(Page);
