import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Field from './pages/Field';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/field/:name" element={<Field />} />
    </Routes>
  );
}

export default App;
