import { TextField, styled } from "@mui/material";

const CustomTextField = styled(TextField)(({ theme }) => ({
    "&:hover": {
        ".MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.text.secondary,
        },
    },
    "& .MuiOutlinedInput-notchedOutline": {
        borderColor: theme.palette.text.disabled,
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: theme.palette.text.secondary,
    },
    "& .MuiOutlinedInput-input": {
        color: theme.palette.text.primary,
    },
}));

export default CustomTextField;
