import { useSelector, useActions } from "./";

export const use{{Plural}} = () => useSelector(state => state.{{plural}}.list);

export const useFiltered{{Plural}} = (filter, keys = false) => {
    const {{plural}} = use{{Plural}}();
    const filteredKeys = Object.keys({{plural}}).filter(key => filter({{plural}}[key]));
    if (keys) {
        return filteredKeys;
    } else {
        const filtered = {};
        filteredKeys.forEach(key => (filtered[key] = {{plural}}[key]));
        return filtered;
    }
};

export const useFiltered{{Plural}}Keys = filter => useFiltered{{Plural}}(filter, true);

export const use{{Singular}} = id => useSelector(state => state.{{plural}}.list[id]);

export const use{{Plural}}Actions = () => useActions(actions => actions.{{plural}});

export const use{{Plural}}State = () =>
    useSelector(state => {
        const { query } = state.{{plural}};
        return { query };
    });
