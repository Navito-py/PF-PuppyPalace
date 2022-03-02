import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/Home/Home';


function App() {
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
