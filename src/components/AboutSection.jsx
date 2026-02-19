import React, { useState } from 'react'

import { Briefcase, Code, User } from "lucide-react"
// resume selector inline in this section

export const AboutSection = () => {
    const [activeTag, setActiveTag] = useState('')
    const [selectedResume, setSelectedResume] = useState('/resumes/Resume_FrontEnd_PrathameshChikkali.pdf')

    return(
         <section id="about" className="py-2 px-4 relative ">
            <div className="container max-w-5xl mx-auto z-10 space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 tracking-tight text-center">
                    About <span className="text-primary"> Me </span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
                    <div className="gradient-border p-6 card-hover h-full">
                        <div className="flex flex-col md:flex-row items-start gap-6">
                            <div className="flex-shrink-0">
                                <div className="h-24 w-24 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-2xl font-bold text-primary">
                                    JS
                                </div>
                            </div>

                            <div className="flex-1 min-w-0 text-left flex flex-col justify-between">
                                <div className="space-y-3">
                                    <h3 className="text-2xl font-semibold">AI & Web Developer — Student, Problem Solver</h3>
                                    <p className="text-muted-foreground">I'm a Computer Science student building production-ready web apps and practical AI systems. I pair algorithmic fundamentals with hands-on experience in modern web frameworks and ML toolkits to deliver maintainable, performant solutions.</p>

                                    <div className="grid grid-cols-3 gap-3 mt-2">
                                        <div className="px-3 py-2 rounded-md bg-secondary/10 text-center">
                                            <div className="font-semibold">2+</div>
                                            <div className="text-xs text-muted-foreground">Years</div>
                                        </div>
                                        <div className="px-3 py-2 rounded-md bg-secondary/10 text-center">
                                            <div className="font-semibold">10+</div>
                                            <div className="text-xs text-muted-foreground">Projects</div>
                                        </div>
                                        <div className="px-3 py-2 rounded-md bg-secondary/10 text-center">
                                            <div className="font-semibold">50+</div>
                                            <div className="text-xs text-muted-foreground">Commits</div>
                                        </div>
                                    </div>

                                    <div className="mt-3">
                                        <ul className="flex flex-wrap gap-2 text-sm">
                                            {['React','Tailwind','Node.js','PyTorch','DSA'].map((t) => (
                                                <button
                                                    key={t}
                                                    onClick={() => {
                                                        setActiveTag(t)
                                                        window.dispatchEvent(new CustomEvent('filter-skills', { detail: { category: t } }));
                                                        const el = document.getElementById('skills');
                                                        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                                    }}
                                                    className={`text-xs px-3 py-1 rounded-full bg-secondary/20 hover:scale-105 transform transition-all duration-150 ${activeTag===t ? 'bg-primary text-primary-foreground' : ''}`}
                                                    aria-label={`Show ${t} skills`}
                                                >{t}</button>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="mt-4">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 items-center">


                                        <div className="flex justify-start">
                                            <div className="relative inline-block">
                                                <select
                                                    value={selectedResume}
                                                    onChange={(e) => setSelectedResume(e.target.value)}
                                                    className="px-4 py-2 pr-10 rounded-full border border-primary text-primary bg-gradient-to-br from-primary/5 to-transparent w-full sm:w-auto appearance-none text-sm"
                                                >
                                                    <option value="/resumes/Resume_FrontEnd_PrathameshChikkali.pdf">Front-End Resume</option>
                                                    <option value="/resumes/Resume_BackEnd_PrathameshChikkali.pdf">Back-End Resume</option>
                                                    <option value="/resumes/Resume_DataScience_PrathameshChikkali.pdf">Data Science Resume</option>
                                                    <option value="/resumes/Resume_DevOps_PrathameshChikkali.pdf">DevOps Resume</option>
                                                    <option value="/resumes/Resume_SoftwareDevelopment_PrathameshChikkali.pdf">Software Dev Resume</option>
                                                </select>
                                                <svg className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-primary" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                                                    <path d="M6 8L10 12L14 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                        </div>

                                        <div className="flex justify-end">
                                            <a href={selectedResume} target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition">
                                                Preview
                                            </a>
                                        </div>

                                                                                <div className="flex justify-start">
                                            <a href="#contact" aria-label="Get in touch" className="cosmic-button text-sm px-4 py-2">
                                                Get in Touch
                                            </a>
                                        </div>

                                        <div className="flex justify-end">
                                            <a href={selectedResume} download aria-label="Download CV" className="px-4 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition">
                                                Download
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6 h-full">
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
                        <div className="mt-auto">
                            <div className="gradient-border p-6 card-hover">
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Certifications & Highlights</h4>
                                    <ul className="text-muted-foreground list-disc list-inside mt-2">
                                        <li>5-Star HackerRank (Java & Python); Level 4 CodeChef</li>
                                        <li>NPTEL — Data Structures & Algorithms (Elite/Silver)</li>
                                        <li>1st Place — Samarthana Hackathon (National)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            </section>
        )
    }
