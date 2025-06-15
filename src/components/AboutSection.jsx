import { Mail, Download, Code, User, Briefcase } from "lucide-react";


export const AboutSection = () => {
    return ( 
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About<span className="text-primary"> Me</span>
                </h2>

                {/* left column - description + resume */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">
                            Passionate about Business Analytics, Automation, and Software Development
                        </h3>

                        <p className="text-muted-foreground">
                            My past internship experiences have provided me meaningful insights on how 
                            technologies could be used for automation and business solutions. 
                            I am keen to leverage programming/AI to enhance business efficiencies.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                <Mail className="w-4 h-4" />Contact Me
                            </a>

                            <a href="/resume.pdf" 
                                aria-label="Download Resume"
                                download
                                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                                >
                                <Download className="w-4 h-4" />Download Resume
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
                                    <h4 className="font-semibold text-lg">Academic Background</h4>
                                    <p className="text-muted-foreground">
                                        Pursuing a double degree in Business and Computer Science. Specialising in Business Analytics, AI, and Cyber Security.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h5 className="font-semibold text-lg">Academic Projects</h5>
                                    <p className="text-muted-foreground">
                                        Worked on backend-focused projects using Python and Java, with emphasis on logic, automation, and result analysis.
                                    </p>

                                    {/* add projects github links
                                    <ul className="mt-2 list-disc list-inside text-sm text-muted-foreground space-y-1">
                                        <li>
                                            <a href="https://github.com/yourusername/project-1" target="_blank" rel="noopener noreferrer" className="hover:underline text-primary">
                                                AI Crop Yield Prediction (Python, ML)
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://github.com/yourusername/project-2" target="_blank" rel="noopener noreferrer" className="hover:underline text-primary">
                                                Automation Script for Financial Analysis
                                            </a>
                                        </li>
                                    </ul>
                                    */}

                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h6 className="font-semibold text-lg">Internship Experiences</h6>
                                    <p className="text-muted-foreground">
                                        Gained hands-on experience in automation, financial analysis, and data-driven decision making.
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};