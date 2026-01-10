import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Header from './components/layout/Header';
import Footer from './components/sections/Footer';
import CaseStudies from './pages/CaseStudies';
import About from './pages/About';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App