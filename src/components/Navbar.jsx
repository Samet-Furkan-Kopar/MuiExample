import {
    AppBar,
    Avatar,
    Box,
    InputBase,
    Menu,
    MenuItem,
    Toolbar,
    Typography,
    styled,
} from "@mui/material";
import FitbitIcon from "@mui/icons-material/Fitbit";
import Badge from "@mui/material/Badge";
import { Mail, Notifications } from "@mui/icons-material";
import { useState } from "react";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const StyledToolbar = styled(Toolbar)({
        display: "flex",
        justifyContent: "space-between",
    });
    const Search = styled("div")(({ theme }) => ({
        backgroundColor: "white",
        padding: "0 10px",
        borderRadius: theme.shape.borderRadius,
        width: "40%",
    }));
    const Icons = styled(Box)(({ theme }) => ({
        display: "none",
        gap: "20px",
        alignItems: "center",
        [theme.breakpoints.up("sm")]: {
            display: "flex",
        },
    }));
    const UserBox = styled(Box)(({ theme }) => ({
        display: "flex",
        gap: "10px",
        alignItems: "center",
        [theme.breakpoints.up("sm")]: {
            display: "none",
        },
    }));
    return (
        <AppBar position="sticky">
            <StyledToolbar>
                <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
                    My App
                </Typography>
                <FitbitIcon sx={{ display: { xs: "block", sm: "none" } }} />
                <Search>
                    <InputBase placeholder="Search..." />
                </Search>
                <Icons>
                    <Badge badgeContent={4} color="error">
                        <Mail />
                    </Badge>
                    <Badge badgeContent={4} color="error">
                        <Notifications />
                    </Badge>
                    <Avatar onClick={()=>setOpen(true)} sx={{ width: 30, height: 30 }} src="/images/avtr.png" />
                </Icons>
                <UserBox onClick={()=>setOpen(true)}>
                    <Avatar sx={{ width: 30, height: 30 }} src="/images/avtr.png" />
                    <Typography variant="span">John Doe</Typography>
                </UserBox>
            </StyledToolbar>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                // anchorEl={anchorEl}
                open={open}
                onClose={()=>setOpen(false)}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
            >
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem>Logout</MenuItem>
            </Menu>
        </AppBar>
    );
};

export default Navbar;
