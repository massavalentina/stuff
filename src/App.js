
import React from 'react';
import {  BrowserRouter,
  Routes,
  Route,
  Link,} from 'react-router-dom';
import Home  from './Components/Home';
import Personal from './Components/Personal';
import Academic from './Components/Academic';
import Projects from './Components/Projects';
import Resume from './Components/Resume';





function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/academic" element={<Academic/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/cv-resume" element={<Resume/>} />
        <Route path="/personal" element={<Personal/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;