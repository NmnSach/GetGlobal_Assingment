import './App.css';
import Navbar from './components/navbar.js';
import Hero from './components/hero.js';    
import Email from './components/email.js';
import Footer from './components/footer.js';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Hero />
        <Email />
        <Footer />
      </header>
    </div>
  );
}

export default App;
