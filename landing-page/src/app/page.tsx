import Header from '@/components/Header';
import HeroSlider from '@/components/HeroSlider';
import AboutMeSection from '@/components/AboutMeSection'
import PlansSection from '@/components/PlansSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <HeroSlider />
      <AboutMeSection />
      <PlansSection />
      <TestimonialsSection />
      <Footer />
    </>
  );
}
