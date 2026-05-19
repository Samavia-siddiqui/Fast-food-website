import { Routes, Route, NavLink } from 'react-router-dom';
import { Home } from './routes/Home';
import { Menu } from './routes/Menu';
import { About } from './routes/About';
import { Contact } from './routes/Contact';
import { Footer } from './components/Footer';
import { Navigation } from './components/Navigation';

function App() {
  return (
    <div className="min-h-screen text-slate-100">
      <Navigation />
      <main className="relative overflow-hidden">
        <div className="hero-glow bg-hero-glow" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
