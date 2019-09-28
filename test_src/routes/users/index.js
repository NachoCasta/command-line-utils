import React from "react";
import UsersComponent from "components/Users";
import { Switch, Route } from "react-router-dom";
import User from "./user";

const  = props => (
    <Switch>
        <Route path="/user" exact component={ Component } />
        <Route path="/user/:id" component={ User } />
    </Switch>
);

export default ;
