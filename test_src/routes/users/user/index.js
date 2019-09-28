import React from "react";
import UserComponent from "components/Users/User";
import { Switch, Route } from "react-router-dom";

const User = ({
    match: {
        params: { id }
    }
}) => <UserComponent id={id} />;

export default User;
