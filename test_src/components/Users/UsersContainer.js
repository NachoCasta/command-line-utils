import React from "react";
import View from "./UsersView";
import { useUsersActions, useUsersState } from "utils";

const  = props => {
    const { newUser, setQuery } = useUsersActions();
    const { query } = useUsersState();
    return (
        <View
            onNew={newUser }
            query={query}
            onQueryChange={e => setQuery(e.target.value)}
        />
    );
};

export default ;
