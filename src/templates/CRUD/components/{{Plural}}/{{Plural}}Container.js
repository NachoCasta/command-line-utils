import React from "react";
import {{Plural}}View from "./{{Plural}}View";
import { use{{Plural}}Actions, use{{Plural}}State } from "utils";

const {{Plural}} = props => {
    const { new{{Singular}}, setQuery } = use{{Plural}}Actions();
    const { query } = use{{Plural}}State();
    return (
        <{{Plural}}View
            onNew={new{{Singular}} }
            query={query}
            onQueryChange={e => setQuery(e.target.value)}
        />
    );
};

export default {{Plural}};
