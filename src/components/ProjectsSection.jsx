import { ArrowRight, ExternalLink, Github } from 'lucide-react';

const Projects = [
    {
    id: 1,
    title: "Project One",
    description: "This is a brief description of Project One.",
    image: "/Projects/image.png",
    link: "https://example.com/project-one",
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://example.com/demo-project-one",
    githubUrl: "https://github.com/Prathamesh-tech-eng"
    },
    {
    id: 2,
    title: "Project two",
    description: "This is a brief description of Project two.",
    image: "/Projects/image.png",
    link: "https://example.com/project-one",
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://example.com/demo-project-one",
    githubUrl: "https://github.com/Prathamesh-tech-eng"

    },
    {
    id: 3,
    title: "Project three",
    description: "This is a brief description of Project three.",
    image: "/Projects/image.png",
    link: "https://example.com/project-one",
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://example.com/demo-project-one",
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
                    {Projects.map((project, key) => (
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="h-48 overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            </div>
                            <div className="p-4">
                                <div className="flex wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span className="text-xs bg-primary font-medium text-secondary-foreground px-2 py-1 rounded-full">
                                            {tag}
                                        </span>
                                    ))}    
                                </div>
                           

                            <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                            <p className="text-muted-foreground text-sm ">{project.description}</p> 
                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3 mb-2 mt-4">
                                    <a href={project.demoUrl} target="_blank" className='text-foreground/80 hover:text-primary transition-colors duration-300'> <ExternalLink/> </a>
                                    <a href={project.githubUrl} target="_blank" className='text-foreground/80 hover:text-primary transition-colors duration-300'> <Github/> </a>

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