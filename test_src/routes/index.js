import React from "react";
import { Switch, Route } from "react-router-dom";
import { Heading } from "pcln-design-system";
import { AppContainer, AppNavBar } from "components/App";
import About from "./about";
import Counter from "./counter";
import Skeleton from "./skeleton";
import Login from "./login";
import Component from "./component";
import NotFound from "components/NotFound";
import Users from "./users";
import Users from "./users";

const Root = props => {
    return (
        <React.Fragment>
            <AppNavBar current={props.location.pathname} />
            <AppContainer>
                <Switch>
                    <Route
                        path="/"
                        exact
                        render={() => <Heading color="white">Home</Heading>}
                    />
                    <Route path="/about" component={About} />
                    <Route path="/counter" component={Counter} />
                    <Route path="/skeleton" component={Skeleton} />
                    <Route path="/component" component={Component} />
                    <Route path="/users" component={Users} />
                    <Route path="/users" component={Users} />
                    <Route path="/login" component={Login} />
                    <Route path="" component={NotFound} />
                </Switch>
            </AppContainer>
        </React.Fragment>
    );
};

export default Root;
