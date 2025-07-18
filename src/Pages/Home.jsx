import Navbar from "../components/Navbar";
import StarBackground from "../components/StarBackground";
import ThemeToggle from "../components/ThemeToggle";
import AboutSection from "../components/AboutSection";
import HeroSection from "../components/HeroSection"; 
import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";
import { Footer } from "../components/Footer";
export const Home = () => {
    return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
{/* Theme Toggle */}
<ThemeToggle />
{/* background effects*/}
<StarBackground />
{/* Navbar */}
<Navbar />
{/* Main Content */}
<main>
<HeroSection />
<AboutSection />
<SkillsSection />
<ProjectsSection />
<ContactSection />
</main>
<Footer />
    </div>
    );
};
