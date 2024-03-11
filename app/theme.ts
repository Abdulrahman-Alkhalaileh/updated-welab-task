"use client";
import { createTheme } from "@mui/material/styles";
import getTheme from "./serverFunctions/themeFunctions/getTheme";

const theme = getTheme();

export const darkTheme = createTheme({
    palette: {
        mode: "dark",
    },
});

export const lightTheme = createTheme({
    palette: {
        mode: "light",
    },
});
