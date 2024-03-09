import { Button } from "@mui/material";

type MyButtonType = {
    newTodoTitle: string;
    handleClearInput: () => void;
    children: any;
};

const MyButton: React.FC<MyButtonType> = ({
    newTodoTitle,
    handleClearInput,
    children,
}) => {
    return (
        <Button
            variant="contained"
            disabled={newTodoTitle.length < 4}
            type="submit"
            onClick={handleClearInput}
            sx={{
                backgroundColor: "#f18194",
                fontWeight: "bold",
                fontSize: { xs: "11px", sm: "15px" },
                "&:hover": {
                    backgroundColor: "#b65e6d",
                },
            }}
        >
            {children}
        </Button>
    );
};

export default MyButton;
