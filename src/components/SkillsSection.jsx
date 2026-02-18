import React, { useState, useEffect, useRef } from 'react';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

const skills = [
    { name: 'Java', level: 95, category: 'Programming' },
    { name: 'Python', level: 90, category: 'Programming' },
    { name: 'C++', level: 80, category: 'Programming' },
    { name: 'JavaScript (ES6+)', level: 85, category: 'Programming' },
    { name: 'SQL', level: 80, category: 'Programming' },
    { name: 'React.js', level: 85, category: 'Front-End' },
    { name: 'Tailwind CSS', level: 80, category: 'Front-End' },
    { name: 'Redux Toolkit', level: 70, category: 'Front-End' },
    { name: 'TypeScript', level: 70, category: 'Front-End' },
    { name: 'Framer Motion', level: 65, category: 'Front-End' },
    { name: 'Node.js (Express)', level: 75, category: 'Backend' },
    { name: 'Spring Boot', level: 70, category: 'Backend' },
    { name: 'FastAPI', level: 65, category: 'Backend' },
    { name: 'PostgreSQL', level: 75, category: 'Databases' },
    { name: 'MongoDB', level: 70, category: 'Databases' },
    { name: 'Redis', level: 65, category: 'Databases' },
    { name: 'TensorFlow', level: 70, category: 'AI/ML' },
    { name: 'PyTorch', level: 65, category: 'AI/ML' },
    { name: 'Scikit-Learn', level: 75, category: 'AI/ML' },
    { name: 'MediaPipe', level: 60, category: 'AI/ML' },
    { name: 'Docker', level: 70, category: 'Cloud & DevOps' },
    { name: 'Kubernetes', level: 60, category: 'Cloud & DevOps' },
    { name: 'AWS', level: 65, category: 'Cloud & DevOps' },
];

const categories = [
    'All',
    'Programming',
    'Front-End',
    'Backend',
    'Databases',
    'AI/ML',
    'Cloud & DevOps',
];

function levelToStars(level) {
    return Math.round((level / 100) * 5);
}

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState('Programming');
    const [highlightCategory, setHighlightCategory] = useState('');
    const highlightTimeoutRef = useRef(null);

    useEffect(() => {
        const handler = (e) => {
            const cat = e?.detail?.category;
            if (cat) {
                setActiveCategory(cat);
                setHighlightCategory(cat);
                if (highlightTimeoutRef.current) clearTimeout(highlightTimeoutRef.current);
                highlightTimeoutRef.current = setTimeout(() => setHighlightCategory(''), 1800);
            }
        };
        window.addEventListener('filter-skills', handler);
        return () => {
            window.removeEventListener('filter-skills', handler);
            if (highlightTimeoutRef.current) clearTimeout(highlightTimeoutRef.current);
        };
    }, []);

    const filtered = skills.filter((s) => activeCategory === 'All' || s.category === activeCategory);

    return (
        <section id="skills" className="py-20 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                    My <span className="text-primary">Skills</span>
                </h2>

                <div className="flex justify-center flex-wrap gap-3 mb-6">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={cn(
                                'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200',
                                activeCategory === cat
                                    ? 'bg-primary text-primary-foreground'
                                    : 'bg-muted-foreground/10 text-muted-foreground hover:bg-muted-foreground/20'
                            )}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                    {filtered.map((s, idx) => {
                        const isHighlighted = highlightCategory && s.category === highlightCategory && idx === 0;
                        return (
                            <div
                                key={s.name}
                                className={cn(
                                    'bg-card p-4 rounded-lg shadow-xs card-hover flex flex-col items-start gap-3',
                                    isHighlighted ? 'ring-2 ring-primary/50 scale-105 transform transition-all duration-300' : ''
                                )}
                            >
                                <div className="flex items-center justify-between w-full">
                                    <h3 className="font-semibold text-sm">{s.name}</h3>
                                    <span className="text-xs text-muted-foreground px-2 py-1 rounded-md bg-secondary/20">{s.category}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <Star key={i} className={cn('h-4 w-4', i < levelToStars(s.level) ? 'text-yellow-400' : 'text-muted-foreground/40')} />
                                    ))}
                                    <span className="text-xs text-muted-foreground">{s.level}%</span>
                                </div>
                                <div className="w-full">
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {s.name.split(new RegExp('[,()\\/]+')).slice(0, 2).map((t, idx) => (
                                            <span key={idx} className="text-xs bg-secondary/20 px-2 py-1 rounded-md">{t.trim()}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};