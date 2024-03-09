"use server";
import FormElements from "../shared/FormElements";
import { Todo } from "./TodoList";

const TodoUpdateForm = async ({ todo }: { todo: Todo | undefined }) => {
    return (
        todo != undefined && (
            <form style={{ width: "100%" }}>
                <FormElements
                    updatedTodoTitle={todo.title}
                    setUpdatedTodoTitle={null}
                    formType="update"
                />
                <input type="hidden" name="id" value={todo.id} />
                <input
                    type="hidden"
                    name="edited"
                    value={todo.edited.toString()}
                />
                <input
                    type="hidden"
                    name="completed"
                    value={todo.completed.toString()}
                />
            </form>
        )
    );
};

export default TodoUpdateForm;
