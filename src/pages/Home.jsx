import { AboutSection } from "../components/AboutSection"
import { HeroSection } from "../components/HeroSection"
import { Navbar } from "../components/Navbar"
import { StarBackground } from "../components/StarBackground"
import { ThemeToggle } from "../components/ThemeToggle"

export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

            {/* first adding theme toggle, that is a button to change darkmode and light mode */}
            <ThemeToggle />

            {/*baground effect of particles moving representing stars*/}
            <StarBackground />

            {/* navbar */}
            <Navbar />

            {/* Main content: hero section-about section-skill section-projects and so on...*/}
            <main>
                <HeroSection />
                <AboutSection />
            </main>

            {/* Footer */}
            </div>
    )
}