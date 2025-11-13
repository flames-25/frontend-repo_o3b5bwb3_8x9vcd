import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Trending from './components/Trending';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#07080D]">
      <Navbar />
      <Hero />
      <Features />
      <Trending />
      <Footer />
    </div>
  );
}

export default App;
