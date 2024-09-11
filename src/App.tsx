import { useEffect, useState } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './routes/Home';
import Header from './components/header/header';
import About from './routes/About';
import Work from './routes/Work';
import Contact from './routes/Contact';
import Footer from './components/footer';
import ScrollToTop from './components/scrollToTop';
import Loader from './components/loader';
import Services from './routes/Services';

function App() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        const newProgress = oldProgress + 1;
        if (newProgress >= 100) {
          clearInterval(interval);
          setLoading(false);
        }
        return newProgress;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {loading ? (
        <Loader value={progress} />
      ) : (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="work" element={<Work />} />
            <Route path="services" element={<Services />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      )}
    </>
  );
}

function Layout() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
