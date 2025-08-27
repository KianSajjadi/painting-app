import "@radix-ui/themes/styles.css";
import styles from "./styles.module.scss"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Theme, Box, Flex, Grid } from '@radix-ui/themes'
import Homepage from "./pages/Homepage"
import Manufacturers from "./pages/Manufacturers"
import Paints from "./pages/Paints"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"

function App() {
  return (
    <html>
      <body>
        <BrowserRouter>
          <Theme
            accentColor="mint"
            appearance="dark"
            grayColor="gray"
            panelBackground="solid"
            radius="large"
            className={styles.root}
          > 
            <Grid columns="auto 1fr" rows="auto 1fr auto" width="100%" height="100vh">
              {/* Header */}
              <Box gridColumn="1 / -1" gridRow="1">
                <Navbar />
              </Box>
              {/* Body */}
              <Box gridColumn="2 / -1"></Box>
              {/* Sidebar */}
              <Box gridColumn="1" gridRow="2">
                <Sidebar />
              </Box>
              {/* Footer */}
              <Box gridColumn="1 / -1" gridRow="3"></Box>
            </Grid>
            <Flex>
            </Flex>
            <Routes>
              <Route path="/manufacturers" element={<Manufacturers />}></Route>
              <Route path="/paints" element={<Paints />}></Route>
              <Route path="/" element={<Homepage />}></Route>
            </Routes>
          </Theme>
        </BrowserRouter>
      </body>
    </html>
  )
}

export default App