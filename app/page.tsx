// "use client";
import { Box, Stack } from "@mui/material";
import AboutQuestionMark from "./components/server/AboutQuestionMark";
import TodoForm from "./components/server/TodoForm";
import TodoList from "./components/server/TodoList";

const Home = ({ searchParams }: any) => {
    // console.log(searchParams)

    return (
        // I'ts not allowable to wrap root components in a MUI element, so i used a div
        <div className={"container"}>
            <TodoForm />
            <TodoList queryParam={searchParams} />
            <AboutQuestionMark />
        </div>
    );
};

export default Home;
