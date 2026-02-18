import { ArrowDown } from 'lucide-react';

export const HeroSection = () => {
    return <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">
        <div className="container max-w-4xl mx-auto text-center z-10 ">
            <div className="space-y-6">

                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                <span className="opacity-0 animate-fade-in-delay-1 "> Hi, I am </span>
                <span className="text-primary opacity-0 animate-fade-in-delay-2"> Prathamesh</span>
                <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-3"> Chikkali</span>
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground opacity-0 max-w-2xl mx-auto animate-fade-in-delay-4">
                     I’m a Computer Science student with a passion for AI and web development.
                     <br />
                     <span className="text-primary"> I build intelligent systems and seamless digital experiences. </span>
                     I’m a student at Shri Ramdeobaba College of Engineering and Management with a passion for building intelligent systems and seamless digital experiences.
                     I enjoy working on AI models that solve real-world problems and developing websites with intuitive, responsive user interfaces. 
                     I'm always eager to learn, experiment, and turn ideas into impactful solutions.
                </p>
            <div className="pt-4 opacity-0 animate-fade-in-delay-5">
                <a href="#projects" className="cosmic-button inline-block">
                    View My Work
                </a>
            </div>
            </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
            <span className="text-sm text-muted-foreground mb-2">
                Scroll
            </span>
            <ArrowDown className="h-5 w-5 text-primary animate-bounce" />
        </div>
    </section>
}