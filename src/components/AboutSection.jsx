

import { Briefcase, Code, User } from "lucide-react"


export const AboutSection = () => {
    return(
         <section id="about" className="py-2 px-4 relative ">
            <div className="container max-w-5xl mx-auto text-center z-10 space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 tracking-tight">
                    About <span className="text-primary"> Me </span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">

                        <h3 className="text-2xl font-semibold">
                            AI & Web Developer — Student, Problem Solver
                        </h3>

                        <p className="text-muted-foreground">
                            I'm a Computer Science student focused on building production-ready web apps and practical AI systems. I combine strong fundamentals in algorithms and systems with hands-on experience in modern web frameworks and ML toolkits to deliver performant, maintainable solutions.
                        </p>

                        <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-muted-foreground">
                            <li>
                                <strong>Core:</strong>
                                <div className="inline-flex flex-wrap gap-2 ml-2">
                                    {['DSA','System Design','REST APIs'].map((c) => (
                                        <button
                                            key={c}
                                            onClick={() => {
                                                window.dispatchEvent(new CustomEvent('filter-skills', { detail: { category: 'Programming' } }));
                                                const el = document.getElementById('skills');
                                                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                            }}
                                            className="text-xs px-2 py-1 rounded-md bg-secondary/20 hover:scale-105 transform transition-all duration-150"
                                            aria-label={`Show ${c} skills`}
                                        >{c}</button>
                                    ))}
                                </div>
                            </li>
                            <li>
                                <strong>Frontend:</strong>
                                <div className="inline-flex flex-wrap gap-2 ml-2">
                                    {['React','Tailwind','TypeScript'].map((c) => (
                                        <button
                                            key={c}
                                            onClick={() => {
                                                window.dispatchEvent(new CustomEvent('filter-skills', { detail: { category: 'Front-End' } }));
                                                const el = document.getElementById('skills');
                                                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                            }}
                                            className="text-xs px-2 py-1 rounded-md bg-secondary/20 hover:scale-105 transform transition-all duration-150"
                                            aria-label={`Show ${c} skills`}
                                        >{c}</button>
                                    ))}
                                </div>
                            </li>
                            <li>
                                <strong>Backend:</strong>
                                <div className="inline-flex flex-wrap gap-2 ml-2">
                                    {['Node.js','Spring Boot','FastAPI'].map((c) => (
                                        <button
                                            key={c}
                                            onClick={() => {
                                                window.dispatchEvent(new CustomEvent('filter-skills', { detail: { category: 'Backend' } }));
                                                const el = document.getElementById('skills');
                                                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                            }}
                                            className="text-xs px-2 py-1 rounded-md bg-secondary/20 hover:scale-105 transform transition-all duration-150"
                                            aria-label={`Show ${c} skills`}
                                        >{c}</button>
                                    ))}
                                </div>
                            </li>
                            <li>
                                <strong>AI/ML:</strong>
                                <div className="inline-flex flex-wrap gap-2 ml-2">
                                    {['TensorFlow','PyTorch','BERT'].map((c) => (
                                        <button
                                            key={c}
                                            onClick={() => {
                                                window.dispatchEvent(new CustomEvent('filter-skills', { detail: { category: 'AI/ML' } }));
                                                const el = document.getElementById('skills');
                                                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                            }}
                                            className="text-xs px-2 py-1 rounded-md bg-secondary/20 hover:scale-105 transform transition-all duration-150"
                                            aria-label={`Show ${c} skills`}
                                        >{c}</button>
                                    ))}
                                </div>
                            </li>
                        </ul>

                        <div className="mt-4 text-left">
                            <h4 className="font-semibold text-lg">Certifications & Highlights</h4>
                            <ul className="text-muted-foreground list-disc list-inside">
                                <li>5-Star HackerRank (Java & Python); Level 4 CodeChef</li>
                                <li>NPTEL — Data Structures & Algorithms (Elite/Silver)</li>
                                <li>1st Place — Samarthana Hackathon (National)</li>
                            </ul>
                        </div>

                        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                            <a href="#contact" aria-label="Get in touch" className="cosmic-button">
                                Get in Touch
                            </a>

                             <a href="/resume.pdf" download aria-label="Download CV" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                                Download CV
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Web Development</h4>
                                    <p className="text-muted-foreground">Creating responsive websites and web application with modern frameworks.</p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                                <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">UI/UX Design</h4>
                                    <p className="text-muted-foreground">Designing intuitive user interface and seamless user experiences.</p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                                    <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Project Management</h4>
                                    <p className="text-muted-foreground">Leading projects from conception to completion with agile methodologies.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
         </section>
    )
}