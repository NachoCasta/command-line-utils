import React from "react";
import {{Plural}}Component from "components/{{Plural}}";
import { Switch, Route } from "react-router-dom";
import {{Singular}} from "./{{singular}}";

const {{Plural}} = props => (
    <Switch>
        <Route path="/{{plural}}" exact component={ {{Plural}}Component } />
        <Route path="/{{plural}}/:id" component={ {{Singular}} } />
    </Switch>
);

export default {{Plural}};
