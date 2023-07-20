import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Oop from './components/Oop';
import MathMagician from './components/MathMagician';
import Budjet from './components/Budjet';
import Stock from './components/Stock';
import Space from './components/SpaceHub';
import TodoList from './components/TodoList';
import Awesome from './components/Awesome';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contact" element={<ContactForm />} />
        <Route path="/oop" element={<Oop />} />
        <Route path="/math" element={<MathMagician />} />
        <Route path="/budget" element={<Budjet />} />
        <Route path="/stock" element={<Stock />} />
        <Route path="/space" element={<Space />} />
        <Route path="/todo" element={<TodoList />} />
        <Route path="/awesome" element={<Awesome />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
