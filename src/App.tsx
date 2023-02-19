import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./pages/Homepage";
import { createTheme, ThemeProvider } from "@mui/material";
import {BLUE} from './colors';
import UsedCars from "./pages/usedCars/UsedCars";

const theme = createTheme({
  palette: {
    primary: {
      main: BLUE,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="used-cars" element={<UsedCars/>}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
