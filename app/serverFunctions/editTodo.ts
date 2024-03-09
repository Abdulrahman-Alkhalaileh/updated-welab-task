import { revalidatePath } from "next/cache";
import { Todo } from "../components/server/TodoList";

export default async function editTodo(todo: Todo, newTodoTitle: string) {
    "use server";
    let newTodo = {
        id: todo.id,
        title: newTodoTitle,
        completed: todo.completed,
        edited: todo.edited,
    };
    await fetch(`http://localhost:5000/todos/${todo.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newTodo),
    });
    revalidatePath("/");
}
