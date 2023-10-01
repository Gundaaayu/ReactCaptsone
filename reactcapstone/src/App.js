import Body from './Component/Body';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Category from './Component/Category';
import './App.css';

function App() {
  return (
   <>
    <Router>
      <Routes>
        <Route path="/" exact element={<Body/>} />
        <Route path="/category" element={<Category/>} />
      </Routes>
    </Router>
   </>
  );
}

export default App;
