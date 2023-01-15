import {Route, Routes} from 'react-router-dom';
import Homepage from './pages/homepage/Homepage';


function App() {
  console.log("checkingg")
  return (
    <Routes>
      <Route path='/' element={<Homepage/>}/>
    </Routes>
  )
}

export default App;
