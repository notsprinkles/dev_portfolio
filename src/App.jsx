import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext.jsx';
import BackgroundFX from './components/BackgroundFX.jsx';
import Header from './components/Header.jsx';
import ScrollProgress from './components/ScrollProgress.jsx';
import Footer from './components/Footer.jsx';
import BackToTop from './components/BackToTop.jsx';
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ProjectsPage from './pages/ProjectsPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import ResumePage from './pages/ResumePage.jsx';
import NotFound from './pages/NotFound.jsx';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <BackgroundFX />  
        <Header />
        <ScrollProgress />

        <main className="app-main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </Router>

      <BackToTop />
    </ThemeProvider>
  );
}

export default App;

