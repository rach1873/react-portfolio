import { Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Links/Home';
import Contact from './Links/Contact';
import HTML from './Links/HTML';
import About from './Links/About';
import Projects from './Links/Projects';
import Rproject from './Links/Rproject';
import Nproject from './Links/Nproject';


function App() {
  return (
    <main className='w-screen min-h-screen font-source'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/projects/html' element={<HTML />} />
        <Route path='/projects/react' element={<Rproject />} />
        <Route path='/projects/nextjs' element={<Nproject />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
    </main>
  );
}

export default App;
