import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Header from './components/layout/Header';
import Footer from './components/sections/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App