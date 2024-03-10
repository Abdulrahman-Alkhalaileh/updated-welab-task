"use client";
import { Box, Checkbox, Typography } from "@mui/material";
import { FaEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import MyCard from "../shared/MyCard";
import { useEffect, useState } from "react";
import { Todo } from "@/app/serverFunctions/editTodo";
import FormElements from "../shared/FormElements";

interface TodoCardPropsType {
    todo: Todo;
    toggleCompleted: (todo: Todo) => void;
    deleteTodo: (id: string) => void;
    editTodo: (todo: Todo, updatedTodoTitle: string) => void;
}

const TodoCard: React.FC<TodoCardPropsType> = ({
    todo,
    toggleCompleted,
    deleteTodo,
    editTodo,
}) => {
    const [updatedTodoTitle, setUpdatedTodoTitle] = useState<string>("");
    const [edited, setEdited] = useState(false);

    useEffect(() => {
        setUpdatedTodoTitle(todo.title);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [edited]);

    function handleEditTodo(e: any) {
        e.preventDefault();
        editTodo(todo, updatedTodoTitle);
        setEdited(false);
    }

    return (
        <MyCard>
            <Box display={"flex"} alignItems={"center"} width={"100%"}>
                <Checkbox
                    checked={todo.completed}
                    color="default"
                    onChange={() => toggleCompleted(todo)}
                />
                {edited ? (
                    <form onSubmit={handleEditTodo} style={{ width: "100%" }}>
                        <FormElements
                            updatedTodoTitle={todo.title}
                            setUpdatedTodoTitle={setUpdatedTodoTitle}
                            formType="update"
                        />
                    </form>
                ) : (
                    <Typography
                        variant="body1"
                        fontWeight={600}
                        pt={"3px"}
                        sx={{
                            textDecoration: todo.completed
                                ? "line-through"
                                : "none",
                            color: todo.completed ? "#2bb35e" : "inherit",
                            fontSize: { xs: "14px", sm: "20px" },
                        }}
                    >
                        {todo.title}
                    </Typography>
                )}
            </Box>
            <Box display={"flex"} alignItems={"center"}>
                {!edited && (
                    <FaEdit
                        size={18}
                        style={{ cursor: "pointer" }}
                        onClick={() => setEdited(!edited)}
                    />
                )}
                <MdDeleteOutline
                    size={22}
                    style={{ cursor: "pointer" }}
                    onClick={() => deleteTodo(todo.id)}
                />
            </Box>
        </MyCard>
    );
};

export default TodoCard;
