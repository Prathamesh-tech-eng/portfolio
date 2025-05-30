import { ThemeToggle } from "../components/ThemeToggle"

export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

            {/* first adding theme toggle, that is a button to change darkmode and light mode */}
            <ThemeToggle />

            {/*baground effect of particles moving representing stars*/}


            {/* navbar */}


            {/* Main content: hero section-about section-skill section-projects and so on...*/}


            {/* Footer */}
            <h1>Welcome to My Portfolio</h1>
            <p>This is the home page of my portfolio website.</p>
            <p>Here you can find information about my projects, skills, and experience.</p>
        </div>
    )
}