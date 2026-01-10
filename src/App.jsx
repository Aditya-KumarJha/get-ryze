import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Header from './components/layout/Header';
import Footer from './components/sections/Footer';
import CaseStudies from './pages/CaseStudies';
import About from './pages/About';
import NotFound from './pages/NotFound';

const App = () => {
  const routesWithHeaderFooter = [
    "/",
    "/case-studies",
    "/about"
  ];

  return (
    <Routes>
      {routesWithHeaderFooter.map((path) => (
        <Route
          key={path}
          path={path}
          element={
            <>
              <Header />
              {path === "/" && <HomePage />}
              {path === "/case-studies" && <CaseStudies />}
              {path === "/about" && <About />}
              <Footer />
            </>
          }
        />
      ))}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App