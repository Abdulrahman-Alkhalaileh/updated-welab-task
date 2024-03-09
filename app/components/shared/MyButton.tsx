import { Button, styled } from "@mui/material";

type MyButtonType = {
    disabled: boolean;
    handleClearInput: () => void;
    children: any;
};

const CustomButton = styled(Button)(({ theme }) => ({
    backgroundColor: "#f18194",
    fontWeight: "bold",
    [theme.breakpoints.up("xs")]: {
        fontSize: "11px",
    },
    [theme.breakpoints.up("sm")]: {
        fontSize: "15px",
    },
    "&:hover": {
        backgroundColor: "#b65e6d",
    },
}));

const MyButton: React.FC<MyButtonType> = ({
    disabled,
    handleClearInput,
    children,
}) => {
    return (
        <CustomButton
            variant="contained"
            disabled={disabled}
            type="submit"
            onClick={handleClearInput}
        >
            {children}
        </CustomButton>
    );
};

export default MyButton;
