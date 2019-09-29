import uuidv1 from "uuid/v1";
const loremIpsum = require("utils/loremIpsum");

export const initialState = {
    list: {
        "123": {
            title: "Element 1",
            description: loremIpsum.subtitle1,
            content: loremIpsum.paragraph1
        },
        "456": {
            title: "Element 2",
            description: loremIpsum.subtitle2,
            content: loremIpsum.paragraph2
        },
        "-023mvdjsfj23k": {
            title: "Element 3",
            description: loremIpsum.subtitle1,
            content: loremIpsum.paragraph3
        }
    },
    query: ""
};

export const reducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case "SET_{{PLURAL}}":
            return { ...state, list: payload };
        case "ADD_NEW_{{SINGULAR}}":
            return { ...state, list: { ...state.list, ...payload } };
        case "SET_{{SINGULAR}}":
            return { ...state, list: { ...state.list, ...payload } };
        case "REMOVE_{{SINGULAR}}":
            delete state.list[payload];
            return state;
        case "SET_{{PLURAL}}_QUERY":
            return { ...state, query: payload };
        default:
            return state;
    }
};

export const actions = dispatch => ({
    new{{Singular}}: () => {
        const {{singular}} = {
            title: loremIpsum.title,
            description: loremIpsum.subtitle2,
            content: loremIpsum.paragraph4
        };
        const id = uuidv1();
        dispatch(new{{Singular}}(id, {{singular}}));
    },
    set{{Singular}}: (id, {{singular}}) => dispatch(set{{Singular}}(id, {{singular}})),
    remove{{Singular}}: id => dispatch(remove{{Singular}}(id)),
    setQuery: query => dispatch(setQuery(query))
});

const set{{Plural}} = {{plural}} => ({
    type: "SET_ORGANIZATIONS",
    payload: {{plural}}
});

const new{{Singular}} = (id, {{singular}}) => ({
    type: "ADD_NEW_{{SINGULAR}}",
    payload: { [id]: {{singular}} }
});

const set{{Singular}} = (id, {{singular}}) => ({
    type: "SET_{{SINGULAR}}",
    payload: { [id]: {{singular}} }
});

const remove{{Singular}} = id => ({
    type: "REMOVE_{{SINGULAR}}",
    payload: id
});

const setQuery = query => ({ type: "SET_{{PLURAL}}_QUERY", payload: query });
