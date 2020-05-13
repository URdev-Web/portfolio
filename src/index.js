import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


import history from "./utils/history";
const onRedirectCallback = appState => {
    history.push(
        appState && appState.targetUrl
            ? appState.targetUrl
            : window.location.pathname
    );
};
ReactDOM.render(

        <App />,

    document.getElementById("root")
);