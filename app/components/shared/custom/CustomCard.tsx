import { Card, styled } from "@mui/material";

const CustomCard = styled(Card)(({ theme }) => ({
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.action.selected,
    width: "100%",
    display: "flex",
    [theme.breakpoints.up("xs")]: {
        padding: "16px 8px",
    },
    [theme.breakpoints.up("sm")]: {
        padding: "16px 16px",
    },
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 13,
    margin: "24px 0",
}));

export default CustomCard;
