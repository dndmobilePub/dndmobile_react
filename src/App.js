import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Project from './pages/Project';
import About from './pages/About';
import Recruit from './pages/Recruit';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import MainLayout from './layout/MainLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route index element={<Home isMain={true} />}  />
          <Route path="/project" element={<Project />} />
          <Route path="/about" element={<About />} />
          <Route path="/recruit" element={<Recruit />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
