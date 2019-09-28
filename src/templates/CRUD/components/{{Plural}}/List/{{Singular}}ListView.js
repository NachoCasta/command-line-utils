import React from "react";
import { List } from "components/UI";
import Item from "./Item";

const {{Singular}}List = ({ {{plural}}, ...rest }) => (
    <List
        bordered
        itemLayout="vertical"
        dataSource={ {{plural}} }
        renderItem={id => <Item id={id} />}
        {...rest}
    />
);

export default {{Singular}}List;
