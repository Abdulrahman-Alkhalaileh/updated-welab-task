"use client";
import CustomSwitch from "../shared/custom/CustomSwitch";

const HeaderSwitch = ({
    toggleTheme,
    theme,
}: {
    toggleTheme: () => void;
    theme: string;
}) => {
    function handleThemeChange() {
        toggleTheme();
    }

    return (
        <CustomSwitch onChange={handleThemeChange} checked={theme == "dark"} />
    );
};

export default HeaderSwitch;
