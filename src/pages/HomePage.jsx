import HeroSection from '../components/sections/HeroSection';
import HowItWorks from '../components/sections/HowItWorks';
import FeaturesShowcase from '../components/sections/FeaturesShowcase';
import ClientMarquee from '../components/sections/ClientMarquee';
import Testimonials from '../components/sections/Testimonials';
import AIShowcase from '../components/sections/AIShowcase';
import TickerSection from '../components/sections/TickerSection';
import MarketerSection from '../components/sections/MarketerSection';

const HomePage = () => {
    return (
        <div className="min-h-screen bg-white">
            <main>
                <HeroSection />
                <HowItWorks />
                <FeaturesShowcase />
                <ClientMarquee />
                <Testimonials />
                <AIShowcase />
                <TickerSection />
                <MarketerSection />
            </main>
        </div>
    );
};

export default HomePage;
