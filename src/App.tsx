import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./pages/Homepage";
import { createTheme, ThemeProvider } from "@mui/material";
import {BLUE} from './colors';
import UsedCars from "./pages/usedCars/UsedCars";
import CarDetailPage from "./pages/CarDetailPage/CarDetailPage";
import BookServicePage from "./pages/BookServicePage/BookServicePage";

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
          <Route path="preowned" element={<UsedCars/>}/>
          <Route path="buy-used-car/:id" element={<CarDetailPage/>}/>
          <Route path="book-service" element={<BookServicePage/>}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
