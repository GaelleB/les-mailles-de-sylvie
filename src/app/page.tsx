'use client';

import { useLoading } from './hooks/useLoading';
import YarnLoader from './components/YarnLoader';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Creations from './components/Creations';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

export default function Home() {
  const { isLoading } = useLoading();

  return (
    <>
      {/* Loader - s'affiche pendant 3 secondes */}
      <YarnLoader isLoading={isLoading} />
      
      {/* Site principal - apparaît après le loader */}
      <div className={`transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Header />
        <main>
          <Hero />
          <About />
          <Creations />
          <Gallery />
        </main>
        <Footer />
      </div>
    </>
  );
}