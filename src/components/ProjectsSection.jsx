import { ArrowRight, ExternalLink, Github } from 'lucide-react';

const Projects = [
    {
        id: 1,
        title: "LogStream",
        description: "Distributed logging system built with Kafka and Redis for high-throughput ingestion and querying.",
        image: "/Projects/logstream.png",
        tags: ["Kafka", "Redis", "Java"],
        demoUrl: "#",
        githubUrl: "https://github.com/Prathamesh-tech-eng"
    },
    {
        id: 2,
        title: "Vanguard",
        description: "Secure API Gateway implementing Token-Bucket rate limiting and JWT-based authentication.",
        image: "/Projects/vanguard.png",
        tags: ["Node.js", "JWT", "API"],
        demoUrl: "#",
        githubUrl: "https://github.com/Prathamesh-tech-eng"
    },
    {
        id: 3,
        title: "FileSystem-Sim",
        description: "C++ filesystem simulator focusing on metadata management and LRU caching (OS concepts).",
        image: "/Projects/fs-sim.png",
        tags: ["C++", "Systems", "LRU"],
        demoUrl: "#",
        githubUrl: "https://github.com/Prathamesh-tech-eng"
    },
    {
        id: 4,
        title: "Lumina",
        description: "High-performance React financial dashboard with complex state management and animations.",
        image: "/Projects/lumina.png",
        tags: ["React", "Tailwind", "Framer Motion"],
        demoUrl: "#",
        githubUrl: "https://github.com/Prathamesh-tech-eng"
    },
    {
        id: 5,
        title: "Aura Design System",
        description: "Reusable component library built in TypeScript and documented with Storybook.",
        image: "/Projects/aura.png",
        tags: ["TypeScript", "Storybook", "Design System"],
        demoUrl: "#",
        githubUrl: "https://github.com/Prathamesh-tech-eng"
    },
    {
        id: 6,
        title: "SignSync",
        description: "Real-time sign language recognition using MediaPipe, LSTM models and live webcam input.",
        image: "/Projects/signsync.png",
        tags: ["MediaPipe", "TensorFlow", "CV"],
        demoUrl: "#",
        githubUrl: "https://github.com/Prathamesh-tech-eng"
    },
    {
        id: 7,
        title: "InsightStream",
        description: "NLP news aggregator using BERT for bias profiling and sentiment analysis.",
        image: "/Projects/insightstream.png",
        tags: ["BERT", "NLP", "Python"],
        demoUrl: "#",
        githubUrl: "https://github.com/Prathamesh-tech-eng"
    },
    {
        id: 8,
        title: "Fake News Detector",
        description: "Robust classifier using Random Forest with extensive feature engineering and evaluation.",
        image: "/Projects/fakenews.png",
        tags: ["ML", "Python", "Scikit-Learn"],
        demoUrl: "#",
        githubUrl: "https://github.com/Prathamesh-tech-eng"
    },
    {
        id: 9,
        title: "SolarCloud",
        description: "Hybrid cloud architecture for research data with S3 cost optimization strategies.",
        image: "/Projects/solarcloud.png",
        tags: ["AWS", "S3", "Architecture"],
        demoUrl: "#",
        githubUrl: "https://github.com/Prathamesh-tech-eng"
    },
    {
        id: 10,
        title: "Nexus CI/CD",
        description: "End-to-end CI/CD pipeline using Jenkins and Docker with Blue-Green deployments.",
        image: "/Projects/nexus.png",
        tags: ["Jenkins", "Docker", "CI/CD"],
        demoUrl: "#",
        githubUrl: "https://github.com/Prathamesh-tech-eng"
    },
    {
        id: 11,
        title: "KubeScale",
        description: "Elastic app deployment using Kubernetes HPA and autoscaling strategies.",
        image: "/Projects/kubescale.png",
        tags: ["Kubernetes", "HPA", "Docker"],
        demoUrl: "#",
        githubUrl: "https://github.com/Prathamesh-tech-eng"
    },
    {
        id: 12,
        title: "Banking Web App",
        description: "End-to-end FinTech application with SQL backend, Node.js API, and integrated chatbot.",
        image: "/Projects/banking.png",
        tags: ["Node.js", "SQL", "Full-Stack"],
        demoUrl: "#",
        githubUrl: "https://github.com/Prathamesh-tech-eng"
    }
]

export const ProjectsSection = () => {
    return(
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured <span className="text-primary">Projects</span>
                </h2>
                <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects that showcase my skills and creativity.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Projects.map((project) => (
                        <div key={project.id} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="relative h-48 overflow-hidden">
                                <img loading="lazy" src={project.image} alt={project.title} onError={(e) => { e.currentTarget.src = '/Projects/image.png'; }} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                <div className="absolute left-3 top-3 flex gap-2">
                                    {project.tags.slice(0,2).map((tag) => (
                                        <span key={tag} className="text-xs bg-primary font-medium text-secondary-foreground px-2 py-1 rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                                <p className="text-muted-foreground text-sm ">{project.description}</p>
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3 mb-2 mt-4">
                                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} demo`} className='text-foreground/80 hover:text-primary transition-colors duration-300'>
                                            <ExternalLink />
                                        </a>
                                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} repo`} className='text-foreground/80 hover:text-primary transition-colors duration-300'>
                                            <Github />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <a className='cosmic-button w-fit flex items-center mx-auto gap-2' target="_blank"  href='https://github.com/Prathamesh-tech-eng' >
                        Check my GitHub <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    )
}