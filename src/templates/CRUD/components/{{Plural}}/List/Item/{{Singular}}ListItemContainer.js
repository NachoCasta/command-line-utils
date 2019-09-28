import React from "react";
import {{Singular}}ListItemView from "./{{Singular}}ListItemView";
import { use{{Singular}} } from "utils";

const {{Singular}}ListItem = ({ id }) => {
    const {{singular}} = use{{Singular}}(id);
    return <{{Singular}}ListItemView {...{{singular}} } href={`/{{plural}}/${id}`} />;
};

export default {{Singular}}ListItem;
