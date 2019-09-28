import { useSelector, useActions } from "./";

export const useUsers = () => useSelector(state => state.users.list);

export const useFilteredUsers = (filter, keys = false) => {
    const users = useUsers();
    const filteredKeys = Object.keys(users).filter(key => filter(users[key]));
    if (keys) {
        return filteredKeys;
    } else {
        const filtered = {};
        filteredKeys.forEach(key => (filtered[key] = users[key]));
        return filtered;
    }
};

export const useFilteredUsersKeys = filter => useFilteredUsers(filter, true);

export const useUser = id => useSelector(state => state.component.list[id]);

export const useUsersActions = () => useActions(actions => actions.component);

export const useUsersState = () =>
    useSelector(state => {
        const { query } = state.users;
        return { query };
    });
