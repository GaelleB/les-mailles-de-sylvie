import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Creations from './components/Creations';

export default function Home() {
  return (
    <div className="relative">
      <Header />
      <main>
        <Hero />
        <About />
        <Creations />
      </main>
    </div>
  );
}