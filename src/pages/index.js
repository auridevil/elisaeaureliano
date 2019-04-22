import "bootstrap/dist/css/bootstrap.css";

import React from "react";
import { Provider } from "react-redux";

import { store } from "../state";
import Page from "./Page";

class IndexPage extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Page />
            </Provider>
        );
    }
}

export default IndexPage;
