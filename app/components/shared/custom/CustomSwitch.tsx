import { Switch, alpha, styled } from "@mui/material";
import { pink } from "@mui/material/colors";

const CustomSwitch = styled(Switch)(({ theme }) => ({
    "& .MuiSwitch-switchBase.Mui-checked": {
        color: "#db7485",
        "&:hover": {
            backgroundColor: alpha(
                pink[600],
                theme.palette.action.hoverOpacity
            ),
        },
    },
    "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
        backgroundColor: pink[600],
    },
}));

export default CustomSwitch;
