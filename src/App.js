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
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {routes}
    </div>
  );
}

export default App;

// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Home from './routes/Home';
// import Projects from './routes/Projects';

// class App extends React.Component {

//   render() {
//     const { loading, user } = this.state;

//     const routes = (
//       <Routes className="appBody">
//         <Route path="/" element={<Home />} />
//         <Route path="/projects" element={<Projects />} />
//       </Routes>
//     )

//     return (
//       <div>
//       <h1>hello</h1>
//         {/* {routes} */}
//         </div>
//     );
//   }
// }

// export default App;