/* eslint-disable react/prop-types */
import { DateRange, Image, InsertEmoticon, PersonAddAlt, Videocam } from "@mui/icons-material";
import {
    Avatar,
    Box,
    Button,
    ButtonGroup,
    Modal,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import styled from "styled-components";

const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
});

const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px",
});

export default function AddModal({ setOpen, open }) {
    // console.log(open)
    return (
        <StyledModal
            open={open}
            onClose={() => setOpen()}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box width={400} height={320} bgcolor={"background.default"} p={3} borderRadius={5}>
                <Typography variant="h6" color="gray" textAlign="center">
                    Create post
                </Typography>
                <UserBox>
                    <Avatar alt="Trevor Henderson" src="/images/avtr.png" />
                    <Typography fontWeight={500} variant="span">
                        samet
                    </Typography>
                </UserBox>
                <TextField
                    sx={{ width: "100%" }}
                    id="standard-multiline-static"
                    multiline
                    rows={3}
                    placeholder="What's on your mind?"
                    variant="standard"
                />
                <Stack direction="row" gap={1} mt={2} mb={3}>
                    <InsertEmoticon color="primary" />
                    <Image color="secondary" />
                    <Videocam color="success" />
                    <PersonAddAlt color="error" />
                </Stack>
                <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
                    <Button>Post</Button>
                    <Button sx={{width:"100px"}}>
                        <DateRange />
                    </Button>
                </ButtonGroup>
            </Box>
        </StyledModal>
    );
}
