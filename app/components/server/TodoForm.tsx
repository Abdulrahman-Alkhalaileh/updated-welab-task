// 'use client'
import { Stack, Typography } from "@mui/material";
import MyCard from "../shared/MyCard";
import addTodo from "../../serverFunctions/addTodo";
import FormElements from "../shared/FormElements";

const TodoForm = async () => {
    // I have turned this component to server component and added the new todos
    // by action server of form not onSubmit
    return (
        <MyCard>
            <form action={addTodo} style={{ width: "100%" }}>
                <Stack spacing={3} pb={1} px={2}>
                    <Typography
                        variant={"h4"}
                        fontWeight={"600"}
                        pt={3}
                        textAlign={"center"}
                        sx={{
                            fontSize: { xs: "20px", sm: "35px" },
                        }}
                    >
                        Write Your Todo
                    </Typography>
                    {/* I created new component of formElements as Client component so I can handle validations */}
                    <FormElements
                        updatedTodoTitle={""}
                        setUpdatedTodoTitle={null}
                        formType="submit"
                    />
                </Stack>
            </form>
        </MyCard>
    );
};

export default TodoForm;
