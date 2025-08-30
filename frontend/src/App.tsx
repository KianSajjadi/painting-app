import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Homepage from "./pages/Homepage";
import Models from "./pages/Models";
import Paints from "./pages/Paints";
import styles from "./styles.module.scss";
import { Theme, Box, Flex, Grid } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Theme accentColor="cyan" appearance="dark" grayColor="mauve" panelBackground="solid" radius="large" className={styles.root}>
        <Grid columns="auto 1fr" rows="auto 1fr auto" width="100%" height="100vh" className={styles.grid}>
          {/* Header */}
          <Box gridColumn="1 / -1" gridRow="1" className={styles.headerBox}>
            <Navbar />
          </Box>
          {/* Body */}
          <Box gridColumn="2 / -1">
            <Routes>
              <Route path="/models" element={<Models />}></Route>
              <Route path="/paints" element={<Paints />}></Route>
              <Route path="/" element={<Homepage />}></Route>
            </Routes>
          </Box>
          {/* Sidebar */}
          <Box gridColumn="1" gridRow="1 / -1">
            <Sidebar />
          </Box>
          {/* Footer */}
          <Box gridColumn="1 / -1" gridRow="3"></Box>
        </Grid>
        <Flex></Flex>
      </Theme>
    </BrowserRouter>
  );
}

export default App;
