
import Hero from '@/components/Hero';
import FeaturedProperties from '@/components/FeaturedProperties';
import AgentSection from '@/components/AgentSection';
import PartnerSection from '@/components/PartnerSection';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <FeaturedProperties />
      <AgentSection />
      <PartnerSection />
    </div>
  );
};

export default HomePage;
