import ReactDOM from "react-dom";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import store from "./redux/redux-store";
import {Provider} from "react-redux";


ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App
                // store={store}
                /* dispatch={store.dispatch.bind(store)}*/></App>
        </Provider>

    </BrowserRouter>, document.getElementById("root")
);

// renderPage();
//
// store.subscribe(renderPage)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

