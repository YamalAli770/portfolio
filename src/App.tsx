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

import { preloadImages } from './lib/preloadImages';

function App() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const imagePaths = [
      '/assets/blogs-icon.png',
      '/assets/hang-star-icon.png',
      '/assets/star-icon.png',
      '/assets/profile-gradient.png',
      '/assets/profile-gradient-2.jpg',
      '/assets/profile-pic.jpg',
      '/assets/project-mockup.png',
      '/assets/work/guythatcooks.jpg',
      '/assets/work/kohaku.jpg',
      '/assets/work/kohaku.jpg',
      '/assets/work/synq.jpg',
      '/assets/work/zawiyah.jpg',
      '/assets/tech/firebase.png',
      '/assets/tech/git.png',
      '/assets/tech/js.png',
      '/assets/tech/mongodb.png',
      '/assets/tech/nest.png',
      '/assets/tech/next.png',
      '/assets/tech/node.png',
      '/assets/tech/postgres.png',
      '/assets/tech/react.png',
      '/assets/tech/redux.png',
      '/assets/tech/tailwind.png',
      '/assets/tech/ts.png',
    ];

    preloadImages(imagePaths, (loadedCount, totalCount) => {
      const newProgress = Math.round((loadedCount / totalCount) * 100);
      setProgress(newProgress);
      if (loadedCount === totalCount) {
        setLoading(false);
      }
    });
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
