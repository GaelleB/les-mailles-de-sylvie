import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Creations from './components/Creations';
import Gallery from './components/Gallery';

export default function Home() {
  return (
    <div className="relative">
      <Header />
      <main>
        <Hero />
        <About />
        <Creations />
        <Gallery />
      </main>
    </div>
  );
}