import logo from './logo.svg';
import './App.css';

import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Projects from './routes/Projects';

function App() {

  const routes = (
    <Routes className="appBody">
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  )

  return (
    <div className="App">
      {routes}
    </div>
  );
}

export default App;
