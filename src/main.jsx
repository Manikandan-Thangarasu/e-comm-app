import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
import "@fontsource/roboto";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import theme from "./theme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      {/* Normalize browser styles */}
      <CssBaseline />
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </Provider>
);
