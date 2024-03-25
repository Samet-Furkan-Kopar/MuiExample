
import { Fab, Tooltip } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import AddModal from "./AddModal";
// import { Avatar, Box, Typography } from "@mui/material";
// import styled from "styled-components";

// const StyledModal = styled(Modal)({
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
// });

// const UserBox = styled(Modal)({
//     display: "flex",
//     alignItems: "center",
//     gap: "10px",
//     marginBottom: "20px",
// });

export default function Add() {
    const [open, setOpen] = useState(false);
    console.log(open);
    const handleClickOpen = () => {
        setOpen(!open);
    };
    return (
        <>
            <Tooltip
                onClick={handleClickOpen}
                title="add"
                sx={{ position: "fixed", bottom: 20, left: { xs: "calc(50% - 25px)", md: 30 } }}
            >
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Tooltip>
            <AddModal setOpen={handleClickOpen} open={open} />
        </>
    );
}
