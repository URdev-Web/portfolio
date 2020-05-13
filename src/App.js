import React, {Component} from 'react';
//import Main from './Page/Main'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
    Redirect
} from "react-router-dom";


import MainPage from "./Pages/Main";

import MainBody from "./Components/MainBody";
import Contact from "./Pages/ContactPage";






export default class App extends Component {
    render() {
        return (
            <div className="AppAuth">

                <Router>
                    {/*All our Routes goes here!*/}
                    <Route path="/" component={MainPage} />
                    <Redirect exact from="/" to="/MainBody" />

                    <Route exact path ="/MainBody" component={MainBody}/>
                    <Route exact path ="/Contact" component={Contact}/>

                </Router>
            </div>

        );
    }
}
