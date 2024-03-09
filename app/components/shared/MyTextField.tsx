import CustomTextField from "./custom/CustomTextField";

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
    return (
        <CustomTextField
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
        />
    );
};

export default MyTextField;
