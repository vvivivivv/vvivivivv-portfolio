import { cn } from "../lib/utils";
import { useState } from "react";

const skills = [
    // frontend
    {name: "JavaScript", number: 30, level: "Beginner", caterogy: "frontend"},
    {name: "React", number: 30, level: "Beginner", caterogy: "frontend"},

    // backend
    {name: "Python", number: 60, level: "Intermediate", caterogy: "backend"},
    {name: "Java", number: 60, level: "Intermediate", caterogy: "backend"},
    {name: "C", number: 60, level: "Intermediate", caterogy: "backend"},
    {name: "R", number: 60, level: "Intermediate", caterogy: "backend"},
    {name: "MongoDB", number: 60, level: "Intermediate", caterogy: "backend"},

    // tools
    {name: "Github", number: 60, level: "Intermediate", caterogy: "tools"},
    {name: "Figma", number: 60, level: "Intermediate", caterogy: "tools"},
    {name: "Alteryx", number: 60, level: "Intermediate", caterogy: "tools"},
    {name: "R Studio", number: 60, level: "Intermediate", caterogy: "tools"},
    {name: "Spyder", number: 60, level: "Intermediate", caterogy: "tools"},
    {name: "Canva", number: 90, level: "Proficient", caterogy: "tools"},
    {name: "Visual Studio Code", number: 90, level: "Proficient", caterogy: "tools"},
    {name: "Jupyter Notebook", number: 90, level: "Proficient", caterogy: "tools"},
]

const categories = ["all", "frontend", "backend", "tools"]

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");
    const filteredSkills = skills.filter((skill) => activeCategory === "all" || skill.caterogy === activeCategory);

    return (
    <section id="skills" 
        className="py-24 px-4 relative bg-secondary/30"
    >
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                My <span className="text-primary"> Skills</span>
            </h2>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category, key) => (
                    <button 
                        key={key}
                        onClick={() => setActiveCategory(category)}
                        className={cn(
                            "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                            activeCategory === category 
                                ? "bg-primary text-primary-foreground" 
                                : "bg-secondary/70 text-foreground hover: bg-secondary"
                        )}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cos-2 lg:grid-cols-3 gap-6">
                {filteredSkills.map((skills, key) => (
                    <div 
                        key={key} 
                        className="bg-card p-6 rounded-lg shadow-xs card-hover"
                    >
                        <div className="text-left mb-4">
                            <h3 className="font-semibold text-lg">
                                {skills.name}
                            </h3>
                        </div>

                        <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                            <div 
                                className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out"
                                style={{width:skills.number + "%"}}
                            />
                        </div>

                        <div className="text-right mt-1">
                            <span className="text-sm muted-foreground">{skills.level}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
     </section>
    );
};