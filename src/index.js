import React from "react";
import store from "./redux/reduxStore";
import ReactDOM from "react-dom";
import {BrowserRouter as Router} from "react-router-dom";
import App from "./App";
import {Provider} from "react-redux";

const renderApp = () => {
    ReactDOM.render(
        <Router>
            <Provider store={store}>
                <App/>
            </Provider>
        </Router>
        ,
        document.getElementById("root")
    );
}


renderApp()
store.subscribe(renderApp)
