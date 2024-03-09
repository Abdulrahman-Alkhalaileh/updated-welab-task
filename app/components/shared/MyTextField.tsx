import TodoThemeContext from "@/app/context/TodoThemeContext";
import { TextField } from "@mui/material";
import { useContext } from "react";

type MyTextFieldType = {
    formType: string;
    newTodoTitle: string;
    handleTitleChange: (e: any) => void;
    isInputValid: () => void;
};

const MyTextField = ({
    formType,
    newTodoTitle,
    handleTitleChange,
    isInputValid,
}: MyTextFieldType) => {
    const { theme } = useContext(TodoThemeContext);

    return (
        <TextField
            name="title"
            id="outlined-textarea"
            // label="What is your todo?"
            placeholder="What is your todo?"
            fullWidth
            // multiline
            // focused
            size={formType == "submit" ? "medium" : "small"}
            value={newTodoTitle}
            onChange={handleTitleChange}
            onClick={isInputValid}
            sx={{
                "&:hover": {
                    ".MuiOutlinedInput-notchedOutline": {
                        borderColor: "#6e6e6e",
                    },
                },
                "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: theme === "dark" ? "#545454" : "black",
                },
                "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                        borderColor: theme === "dark" ? "white" : "black",
                    },
                "& .MuiOutlinedInput-input": {
                    color: theme === "dark" ? "white" : "black",
                },
            }}
        />
    );
};

export default MyTextField;
