import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import "./App.css";
import SideBar from "./Components/SideBar";
import Navbar from "./Components/Navbar";
import Add from "./Components/Add";
import Feed from "./Components/Feed";
import RightBar from "./Components/RightBar";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
      primary: {
        main: "#056e01",
        light: "#1a7317",
      },
      secondary: {
        main: "#15c630",
      },
      otherColor: {
        main: "#999",
      },
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <SideBar setMode={setMode} mode={mode} />
          <Feed />
          <RightBar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;
