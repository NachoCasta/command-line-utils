import React from "react";
import UserListItemView from "./UserListItemView";
import { useUser } from "utils";

const UserListItem = ({ id }) => {
    const user = useUser(id);
    return <UserListItemView {...user } href={`/users/${id}`} />;
};

export default UserListItem;
