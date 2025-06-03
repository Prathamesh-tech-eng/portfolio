import React, { useState } from 'react';
import { cn } from '@/lib/utils';

const skills = [
    //Frontend
    {name: "HTML/CSS", level: "90", category: "Frontend"},
    {name: "Javascript", level: "80", category: "Frontend"},
    {name: "React", level: "70", category: "Frontend"},
    {name: "Tailwind CSS", level: "70", category: "Frontend"},
    {name: "ShadCN UI", level: "65", category: "Frontend"},
    //Backend
    {name: "Node.js", level: "60", category: "Backend"},
    {name: "PostgreSQL", level: "60", category: "Backend"},
    //Machine Learning
    {name: "Python", level: "60", category: "Machine Learning"},
    {name: "Pandas", level: "60", category: "Machine Learning"},
    {name: "NumPy", level: "60", category: "Machine Learning"},
    {name: "Scikit-learn", level: "60", category: "Machine Learning"},
    {name: "TensorFlow", level: "60", category: "Machine Learning"},
    //Tools
    {name: "Git", level: "70", category: "Tools"},
    {name: "Docker", level: "60", category: "Tools"},
    {name: "Figma", level: "70", category: "Tools"},
    {name: "VS Code", level: "80", category: "Tools"},

]

const categories = ["all", "Frontend", "Backend", "Machine Learning", "Tools"];


export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredSkills = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory);
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                My <span className="text-primary"> Skills </span>
            </h2>

            <div className="flex justify-center flex-wrap gap-4 mb-12">
                {categories.map((category, key) => (
                    <button 
                        key={key}
                        onClick={() => setActiveCategory(category)}
                        className={cn(
                            "px-5 py-2 rounded-full transition-colors duration-300",
                            activeCategory === category 
                                ? "bg-primary text-primary-foreground hover:bg-primary/90" 
                                : "bg-secondary text-muted-foreground hover:bg-primary hover:bd-secondary"
                        )}
                    >
                        {category}
                    </button>
                ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSkills.map((skills,key) => (
                    <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                        <div className="text-left mb-4">
                            <h3 className="font-semibold text-lg">{skills.name}</h3>
                        </div>
                        <div className="w-full bg-secondary/50 rounded-full overflow-hidden">
                            <div className="bg-primary h-2 rounded-full origin-left animate[grow_1.5s_ease-out]" 
                            style={{width : skills.level + "%"}} />
                        </div>
                        <div className="text-right mt-1">
                            <span className="text-sm text-muted-foreground">{skills.level}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}