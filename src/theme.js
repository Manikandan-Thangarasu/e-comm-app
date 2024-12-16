import { createTheme } from "@mui/material/styles";

// Custom Material UI theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // Primary color (blue)
      light: "#63a4ff",
      dark: "#004ba0",
      contrastText: "#ffffff", // Text color for primary buttons
    },
    secondary: {
      main: "#f50057", // Secondary color (pink)
      light: "#ff5983",
      dark: "#bb002f",
      contrastText: "#ffffff", // Text color for secondary buttons
    },
    background: {
      default: "#ffffff", // Light gray background for the app
      paper: "#ffffff", // White background for cards, dialogs
    },
    text: {
      primary: "#333333", // Default text color
      secondary: "#666666", // Subtle secondary text
    },
    action: {
      hover: "#282829", // Hover effect color for components
    },
  },
  typography: {
    fontFamily: "'Roboto', 'Arial', sans-serif", // Base font
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
      color: "#333333",
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 600,
      color: "#444444",
    },
    h3: {
      fontSize: "1.75rem",
      fontWeight: 500,
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: 500,
    },
    h5: {
      fontSize: "1.25rem",
      fontWeight: 400,
    },
    h6: {
      fontSize: "1rem",
      fontWeight: 400,
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: 1.6,
      color: "#333333",
    },
    body2: {
      fontSize: "0.875rem",
      fontWeight: 300,
      lineHeight: 1.5,
      color: "#dcddde",
    },
    button: {
      textTransform: "none", // Disable uppercase transformation for buttons
      fontWeight: 600,
    },
    caption: {
      fontSize: "0.75rem",
      fontWeight: 300,
    },
    overline: {
      fontSize: "0.75rem",
      fontWeight: 500,
      textTransform: "uppercase",
      letterSpacing: "0.1em",
    },
  },
  shape: {
    borderRadius: 8, // Global border radius for components
  },
  spacing: 8, // Default spacing unit (8px)
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "24px", // Rounded buttons
          padding: "8px 16px",
          fontWeight: 600,
        },
        containedPrimary: {
          boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.2)", // Add shadow to primary buttons
        },
        outlined: {
          borderColor: "#1976d2",
          "&:hover": {
            backgroundColor: "#f5f5f5",
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          "&:focus": {
            backgroundColor: "transparent",
          },
        },
        icon: {
          color: "#1976d2", // Dropdown arrow color
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none", // Remove shadow for AppBar
          borderBottom: "1px solid #e0e0e0", // Subtle border
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "16px", // Rounded card corners
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Subtle shadow
          padding: "16px",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          marginBottom: "8px",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          padding: "16px",
          borderRadius: "12px",
        },
      },
    },
  },
});

export default theme;
