import AboutGallery from '../components/sections/About/AboutGallery';
import OurStory from '../components/sections/About/OurStory';
import AboutHero from '../components/sections/About/AboutHero';
import AboutExperience from '../components/sections/About/AboutExperience';
import AboutJourney from '../components/sections/About/AboutJourney';
import AboutAutomation from '../components/sections/About/AboutAutomation';
import AboutConclusion from '../components/sections/About/AboutConclusion';

const About = () => {
    return (
        <>
            <div className="max-w-4xl mx-auto px-6 mt-30">
                <OurStory />
                <AboutHero />
                <AboutExperience />
                <AboutJourney />
                <AboutAutomation />
                <AboutConclusion />
            </div>
            <div>
                <AboutGallery />
            </div>
        </>
        
    );
};

export default About;
