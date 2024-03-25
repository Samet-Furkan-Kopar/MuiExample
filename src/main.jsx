import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme/theme.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </ThemeProvider>
);
