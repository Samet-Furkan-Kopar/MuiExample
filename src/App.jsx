// import { Box, styled } from "@mui/material";
// import Button from "@mui/material/Button";
// import SettingsIcon from "@mui/icons-material/Settings";
// import AddIcon from "@mui/icons-material/Add";
// const App = () => {
//   const BlueButton = styled(Button) (({theme})=>({
//     color: "#888",
//     backgroundColor: theme.palette.primary.light,
//     margin: 5,
//     "&:hover": {
//         backgroundColor: "lightblue",
//     },
//     "&:disabled": {
//         backgroundColor: "gray",
//         color: "white",
//     },
//   }));
//     return (
//         <Box>
//             <Button variant="text" color="secondary" size="small">
//                 Text
//             </Button>
//             <Button variant="contained" color="otherColor" size="small" startIcon={<SettingsIcon />}>
//                 Settings
//             </Button>
//             <Button variant="contained" color="success" size="small" startIcon={<AddIcon />}>
//                 Add new post
//             </Button>
//             <Button variant="outlined">Outlined</Button>

//            <BlueButton>My Button</BlueButton>
//            <BlueButton>Another Button</BlueButton>
//         </Box>
//     );
// };

// export default App; 

import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Rightbar from './components/Rightbar'
import Feed from './components/Feed'
import { Box, Stack, ThemeProvider, createTheme } from '@mui/material'
import Add from './components/Add'
import { useState } from "react";

export default function App() {
const [mode, setMode] = useState("dark");
const darkTheme = createTheme({
  palette: {
    mode: mode
  }})

  return ( 
    <ThemeProvider theme={darkTheme}>
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent={"space-between"}>
        <Sidebar mode={mode} setMode={setMode}/>
        <Feed />
        <Rightbar />
      </Stack>
      <Add/>
    </Box>
    </ThemeProvider>
  )
}
