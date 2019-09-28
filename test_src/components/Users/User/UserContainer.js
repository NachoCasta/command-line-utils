import React from "react";
import UserView from "./UserView";
import { useUser, useUsersActions, useEdit, history } from "utils";

const User = ({ id }) => {
    const { setUser, removeUser } = useUsersActions();
    const user = useUser(id);
    const { data, edit, onEdit, onCancel, onSave, getOnChange } = useEdit(
        user,
        user => setUser(id, user)
    );
    const onDelete = () => {
        removeUser(id);
        history.push("/component");
    };
    return (
        <UserView
            {...data}
            edit={edit}
            onTitleChange={getOnChange("title")}
            onDescriptionChange={getOnChange("description")}
            onContentChange={getOnChange("content")}
            onEdit={onEdit}
            onCancel={onCancel}
            onSave={onSave}
            onDelete={onDelete}
        />
    );
};

export default User;
