"use client";

import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import MyButton from "./MyButton";
import MyTextField from "./MyTextField";

type FormELementsTypes = {
    updatedTodoTitle: string;
    setUpdatedTodoTitle: ((value: string) => void) | null;
    formType: string;
};

// this component is shared between TodoCard for edit todo & TodoForm to create new Todo
const FormElements: React.FC<FormELementsTypes> = ({
    updatedTodoTitle,
    setUpdatedTodoTitle,
    formType,
}) => {
    const [newTodoTitle, setNewTodoTitle] = useState(updatedTodoTitle);
    const [validation, setValidation] = useState(false);

    function handleClearInput() {
        setTimeout(() => setNewTodoTitle(""), 300);
    }

    function handleTitleChange(e: any) {
        setNewTodoTitle(e.target.value);
        if (setUpdatedTodoTitle !== null) setUpdatedTodoTitle(e.target.value);
    }

    function isInputValid() {
        newTodoTitle.length < 4 ? setValidation(true) : setValidation(false);
    }

    return (
        <Box>
            <Stack direction={"row"} spacing={1}>
                {/* Single Responsability (MyTextField/MyButton) */}
                <MyTextField
                    formType={formType}
                    handleTitleChange={handleTitleChange}
                    newTodoTitle={newTodoTitle}
                    isInputValid={isInputValid}
                />
                {/* For more modulerity (Open-Close principle) MyButton*/}
                <MyButton
                    disabled={newTodoTitle.length < 4}
                    handleClearInput={handleClearInput}
                >
                    {formType}
                </MyButton>
            </Stack>
            {newTodoTitle.length < 4 &&
                newTodoTitle.length > 0 &&
                validation && (
                    <Typography
                        variant="body1"
                        color={"#e05a62"}
                        mt={1}
                        fontSize={{ xs: "11px", sm: "15px" }}
                    >
                        The todo should be at least 4 characters
                    </Typography>
                )}
        </Box>
    );
};

export default FormElements;
