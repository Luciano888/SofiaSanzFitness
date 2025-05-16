import Header from '@/components/Header';
import HeroSlider from '@/components/HeroSlider';
import PlansSection from '@/components/PlansSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <HeroSlider />
      <PlansSection />
      <TestimonialsSection />
      <Footer />
    </>
  );
}
