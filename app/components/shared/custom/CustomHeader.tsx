"use client";
import { Box, styled } from "@mui/material";

const CustomHeader = styled(Box)(({ theme }) => ({
    padding: 24,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: theme.palette.action.selected,
}));

const MyHeader = ({ children }: { children: any }) => {
    return (
        <header>
            <CustomHeader>{children}</CustomHeader>
        </header>
    );
};

export default MyHeader;
