import './App.css';
import Projects from './routes/Projects';

function App() {

  // const routes = (
  //   <Routes className="appBody">
  //     <Route path="/" element={<Projects />} />
  //     <Route path="/projects" element={<Projects />} />
  //     <Route path="/housing" element={<Housing />} />
  //   </Routes>
  // )

  return (
    <div className="App">
      <div className='display'>
        <Projects/>
      </div>
      
    </div>
  );
}

export default App;
