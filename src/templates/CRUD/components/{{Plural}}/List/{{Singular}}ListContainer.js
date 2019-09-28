import React from "react";
import {{Singular}}ListView from "./{{Singular}}ListView";
import { useFiltered{{Plural}}Keys, use{{Plural}}State } from "utils";

const {{Singular}}List = props => {
    const { query } = use{{Plural}}State();
    // Function to filter list elements. By default checks if the query is included in the title
    const filter = {{singular}} => {{singular}}.title.includes(query);
    const {{plural}} = useFiltered{{Plural}}Keys(filter);
    return <{{Singular}}ListView {{plural}}={ {{plural}} } />;
};

export default {{Singular}}List;
