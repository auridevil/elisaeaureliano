import React, { Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { GlobalStyle } from "../styles/main-styles";
import { DetailSection } from "../sections/DetailSection";
import { DinnerSection } from "../sections/DinnerSection";
import { FootSection } from "../sections/FootSection";
import { HeadSection } from "../sections/HeadSection";
import { AccessModal } from "../components/AccessModal";

import { auth } from "../actions/auth";

class Page extends React.Component {
    renderSubSite() {
        const { authDone } = this.props;
        return authDone ? (
            <Fragment>
                <DetailSection />
                <DinnerSection />
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
        authDone: state.auth.authDone
    }),
    dispatch => ({
        validateAuth: bindActionCreators(auth, dispatch)
    })
)(Page);
