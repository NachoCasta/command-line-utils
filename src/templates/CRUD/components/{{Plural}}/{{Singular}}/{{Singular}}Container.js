import React from "react";
import {{Singular}}View from "./{{Singular}}View";
import { use{{Singular}}, use{{Plural}}Actions, useEdit, history } from "utils";

const {{Singular}} = ({ id }) => {
    const { set{{Singular}}, remove{{Singular}} } = use{{Plural}}Actions();
    const {{singular}} = use{{Singular}}(id);
    const { data, edit, onEdit, onCancel, onSave, getOnChange } = useEdit(
        {{singular}},
        {{singular}} => set{{Singular}}(id, {{singular}})
    );
    const onDelete = () => {
        remove{{Singular}}(id);
        history.push("/{{plural}}");
    };
    return (
        <{{Singular}}View
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

export default {{Singular}};
