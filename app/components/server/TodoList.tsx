import { Box, Button, ButtonGroup, Typography } from "@mui/material";
import TodoCard from "../client/TodoCard";
import { useContext, useEffect, useState } from "react";
import TodoThemeContext from "../../context/TodoThemeContext";
import Link from "next/link";
import getTodos from "../../serverFunctions/getTodos";
import { revalidatePath } from "next/cache";
import toggleCompleted from "../../serverFunctions/toggleCompleted";
import deleteTodo from "../../serverFunctions/deleteTodo";
import editTodo from "../../serverFunctions/editTodo";

export type Todo = {
    id: string;
    title: string;
    completed: boolean;
    edited: boolean;
};

const TodoList = async ({ queryParam }: any) => {
    let todos = await getTodos();
    todos = todos.reverse();

    function filteredTodos() {
        // return queryParam.completed
        let booleanCompleted = queryParam.completed == "true";
        if (queryParam.completed !== undefined) {
            return todos.filter(
                (todo: Todo) => todo.completed == booleanCompleted
            );
        } else {
            return todos;
        }
    }

    return (
        <>
            <Box
                width={"100%"}
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column-reverse", sm: "row" },
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <Typography
                    variant="body1"
                    fontWeight={"bold"}
                    color={"#cc6879"}
                >
                    Todos Count: {filteredTodos() && filteredTodos().length}
                </Typography>
                <ButtonGroup variant="text" aria-label="Basic button group">
                    <Button
                        sx={{ color: "#cc6879", fontWeight: "bold" }}
                        // onClick={()=>handleFilter(true)}
                    >
                        <Link href="?completed=true">Completed</Link>
                    </Button>
                    <Button
                        sx={{ color: "#cc6879", fontWeight: "bold" }}
                        // onClick={()=>handleFilter(false)}
                    >
                        <Link href="?completed=false">Uncompleted</Link>
                    </Button>
                    <Button
                        sx={{ color: "#cc6879", fontWeight: "bold" }}
                        // onClick={()=>setFilteredTodos(todos)}
                    >
                        <Link href="/">All</Link>
                    </Button>
                </ButtonGroup>
            </Box>
            {/* {filteredTodos?
                (filteredTodos.length>0 ? filteredTodos.map((todo)=>(
                    <TodoCard key={todo.id} todo={todo} setFilteredTodos={setFilteredTodos}/>
                )) : <h2 style={{color: theme==='dark'?'#bdbbbb': 'black'}}>There is no Todos</h2>) :
                <h2 style={{color: theme==='dark'?'#bdbbbb': 'black'}}>Loading Todos...</h2>} */}
            {filteredTodos().length > 0 ? (
                filteredTodos().map((todo: Todo) => (
                    <TodoCard
                        key={todo.id}
                        todo={todo}
                        toggleCompleted={toggleCompleted}
                        deleteTodo={deleteTodo}
                        editTodo={editTodo}
                    />
                ))
            ) : (
                <h2
                    style={{
                        color: "#bdbbbb",
                        textAlign: "center",
                        marginTop: "20px",
                    }}
                >
                    There is no Todos
                </h2>
            )}
        </>
    );
};

export default TodoList;
