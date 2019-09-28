import React from "react";
import {{Singular}}Component from "components/{{Plural}}/{{Singular}}";
import { Switch, Route } from "react-router-dom";

const {{Singular}} = ({
    match: {
        params: { id }
    }
}) => <{{Singular}}Component id={id} />;

export default {{Singular}};
