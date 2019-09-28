import React from "react";
import UserListView from "./UserListView";
import { useFilteredUsersKeys, useUsersState } from "utils";

const UserList = props => {
    const { query } = useUsersState();
    // Function to filter list elements. By default checks if the query is included in the title
    const filter = user => user.title.includes(query);
    const users = useFilteredUsersKeys(filter);
    return <UserListView users=users />;
};

export default UserList;
