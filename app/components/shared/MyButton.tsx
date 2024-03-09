import { Button, styled } from "@mui/material";
import CustomButton from "./custom/CustomButton";

type MyButtonType = {
    disabled: boolean;
    handleClearInput: () => void;
    children: any;
};

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
