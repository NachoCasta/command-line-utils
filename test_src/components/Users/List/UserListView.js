import React from "react";
import { List } from "components/UI";
import Item from "./Item";

const UserList = ({ users, ...rest }) => (
    <List
        bordered
        itemLayout="vertical"
        dataSource=users
        renderItem={id => <Item id={id} />}
        {...rest}
    />
);

export default UserList;
