import { Button, styled } from "@mui/material";

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

export default CustomButton;
