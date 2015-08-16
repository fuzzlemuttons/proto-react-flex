import React from "react";
import Main from "../components/Main";
import Home from "../components/Home";
import Profile from "../components/Profile";
import {Router, DefaultRoute, Route} from "react-router";

export default (
    <Route name="app" path="/" handler={Main}>
        <Route name="profile" path="profile/:username" handler={Profile}></Route>
        <DefaultRoute handler={Home} />
    </Route>
);