import { Linkedin, Mail, MapPin } from "lucide-react"


export const ContactSection = () => {
    return (
        <section 
            id="contact" 
            className="py-24 px-4 relative bg-secondary/30"
        >
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                    Contact <span className="text-primary"> Me</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Feel free to contact me for projects/internship opportunities :)
                </p>

                <div className="flex justify-center">
                    <div className="space-y-8 max-w-md">
                        <div className="space-y-6 justify-center"> 
                            <div className="flex items-start">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="pl-4 text-left">
                                    <h4 className="font-medium">
                                        Email
                                    </h4>
                                    <a 
                                    href="mailto:email@gmail.com"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        {/* email */}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Linkedin className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="pl-4 text-left">
                                    <h4 className="font-medium">
                                        LinkedIn
                                    </h4>
                                    <a 
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                        href="https://www.linkedin.com/in/xxinyitoh"
                                        target="_blank"
                                    >
                                        https://www.linkedin.com/in/xxinyitoh
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="pl-4 text-left">
                                    <h4 className="font-medium">
                                        Location
                                    </h4>
                                    <span 
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        Singapore
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}