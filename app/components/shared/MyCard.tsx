"use client";
import { Card, CardProps, styled } from "@mui/material";
import CustomCard from "./custom/CustomCard";

const MyCard: React.FC<CardProps> = ({ children }) => {
    return <CustomCard>{children}</CustomCard>;
};

export default MyCard;
