import { Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './routes/Home';
import Header from './components/header/header';
import About from './routes/About';
import Work from './routes/Work';
import Contact from './routes/Contact';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="work" element={<Work />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
