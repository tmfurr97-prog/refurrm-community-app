import Navigation from './Navigation';
import Hero from './Hero';
import MissionSection from './MissionSection';
import StatsBar from './StatsBar';
import ValueProp from './ValueProp';
import SubscriptionPlans from './SubscriptionPlans';
import Testimonials from './Testimonials';
import NewsletterSignup from './NewsletterSignup';
import CTASection from './CTASection';
import Footer from './Footer';

const AppLayout = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <StatsBar />
      <MissionSection />
      <ValueProp />
      <SubscriptionPlans />
      <Testimonials />
      <CTASection />
      <NewsletterSignup />
      <Footer />
    </div>
  );
};

export default AppLayout;

