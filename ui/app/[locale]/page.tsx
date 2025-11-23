import Hero from '../components/Hero';
import LuxuryGallery from '../components/LuxuryGallery';
import About from '../components/About';
import Services from '../components/Plans';
import Blog from '../components/Blog';
import News from '../components/News';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <LuxuryGallery />
      <About />
      <Services />
      <Blog />
      <News />
      <Footer />
    </div>
  );
}

