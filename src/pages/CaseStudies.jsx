
import CaseStudiesHero from '../components/sections/CaseStudies/CaseStudiesHero';
import ClientMarquee from '../components/sections/ClientMarquee';
import CaseStudiesGrid from '../components/sections/CaseStudies/CaseStudiesGrid';
import InsightsSection from '../components/sections/CaseStudies/InsightsSection/InsightsSection';

const CaseStudies = () => {
  return (
    <div>
      <CaseStudiesHero />
      <div className='-mt-4'>
        <ClientMarquee />
      </div>
      <CaseStudiesGrid />
      <InsightsSection />
    </div>
  );
};

export default CaseStudies;
