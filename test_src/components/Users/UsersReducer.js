import { loremIpsum } from "utils";
import uuidv1 from "uuid/v1";

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
        case "SET_USERS":
            return { ...state, list: payload };
        case "ADD_NEW_USER":
            return { ...state, list: { ...state.list, ...payload } };
        case "SET_USER":
            return { ...state, list: { ...state.list, ...payload } };
        case "REMOVE_USER":
            delete state.list[payload];
            return state;
        case "SET_QUERY":
            return { ...state, query: payload };
        default:
            return state;
    }
};

export const actions = dispatch => ({
    newUser: () => {
        const user = {
            title: loremIpsum.title,
            description: loremIpsum.subtitle2,
            content: loremIpsum.paragraph4
        };
        const id = uuidv1();
        dispatch(newUser(id, user));
    },
    setUser: (id, user) => dispatch(setUser(id, user)),
    removeUser: id => dispatch(removeUser(id)),
    setQuery: query => dispatch(setQuery(query))
});

const setUsers = users => ({
    type: "SET_ORGANIZATIONS",
    payload: users
});

const newUser = (id, user) => ({
    type: "ADD_NEW_USER",
    payload: { [id]: user }
});

const setUser = (id, user) => ({
    type: "SET_USER",
    payload: { [id]: user }
});

const removeUser = id => ({
    type: "REMOVE_USER",
    payload: id
});

const setQuery = query => ({ type: "SET_QUERY", payload: query });
