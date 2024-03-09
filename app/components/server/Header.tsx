import { Box, Stack, Typography, alpha, styled } from "@mui/material";
import Switch from "@mui/material/Switch";
import { pink } from "@mui/material/colors";
import Link from "next/link";
import { useContext } from "react";
import { LuListTodo } from "react-icons/lu";
import HeaderSwitch from "../client/HeaderSwitch";
import setTheme from "@/app/serverFunctions/themeFunctions/setTheme";
import getTheme from "@/app/serverFunctions/themeFunctions/getTheme";
import CustomHeader from "../shared/custom/CustomHeader";

const Header = async () => {
    const theme = await getTheme();
    return (
        <CustomHeader>
            <Link href={"/"}>
                <Stack
                    direction={"row"}
                    spacing={1}
                    display={"flex"}
                    alignItems={"center"}
                >
                    <LuListTodo
                        size={47}
                        style={{
                            color: "#db7485",
                        }}
                    />{" "}
                    {/*color='#753f48'  */}
                    <Typography
                        variant="h1"
                        fontWeight={600}
                        fontSize={"32px"}
                        sx={{
                            display: {
                                xs: "none",
                                sm: "block",
                                md: "block",
                            },
                        }}
                    >
                        Welab Todo
                    </Typography>
                </Stack>
            </Link>
            <HeaderSwitch toggleTheme={setTheme} theme={theme} />
        </CustomHeader>
    );
};

export default Header;
