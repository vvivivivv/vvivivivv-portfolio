import { Mail, MapPin } from "lucide-react"

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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">
                            Contact Information
                        </h3>

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
                                    className="text-muted-foreground hover-primary transition-colors"
                                    >
                                        {/* email */}
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