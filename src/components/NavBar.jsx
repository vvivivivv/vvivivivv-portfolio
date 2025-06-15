import { useEffect, useState } from "react";
import {cn} from "../lib/utils";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "../components/ThemeToggle";



const navItems = [
    {name: "Home", href: "#home"},
    {name: "About", href: "#about"},
    {name: "Skills", href: "#skills"},
    {name: "Projects", href: "#projects"},
    {name: "Contact", href: "#contact"},
];

export const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [])

    // close menu by pressing esc
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") setIsMenuOpen(false);
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    // prevent bg scroll when menu is opened
    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
        return () => {
        document.body.style.overflow = "auto";
        };
    }, [isMenuOpen]);

    // close mobile menu on window resize
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) setIsMenuOpen(false);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
        <header role="navigation" className={cn("fixed w-full z-40 transition-all duration-300", 
            isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
        )}>

            <div className="max-w-screen-xl mx-auto px-4 md:px-6 flex items-center justify-between">

                {/* logo */}
                <a 
                    className="text-xl font-bold text-primary flex items-center"
                    href="#home"
                >
                    <span className="relative z-10">
                        <span className="text-glow text-foreground"> vvivivivv</span>Portfolio
                    </span>
                </a>

                {/* desktop nav */}
                <div className="hidden md:flex items-center space-x-15">
                    {navItems.map((item, key) => (
                        <a 
                            key={key} href={item.href} className="text-foreground/80 hover:text-primary transition-colors duration-300">
                            {item.name}
                        </a>
                    ))}
                    {/* theme toggle button on the right of nav items */}
                    <ThemeToggle />
                </div>

                {/* mobile nav */}
                <button    
                    onClick={() => setIsMenuOpen((prev) => !prev)} 
                    className="md:hidden text-foreground z-50"
            
                    // accessibility
                    aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                >
                    {isMenuOpen ? <X size={24}/> :  <Menu size={24}/>}
                </button>
            </div>
        </header>

        <div className={cn("fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden", 
                isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            )}>
            
            <div className="flex flex-col space-y-8 text-xl">
                {navItems.map((item, key) => (
                    <a 
                        key={key} 
                        href={item.href} 
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"

                        // close menu and navigate to item when clicked on menu
                        onClick={() => setIsMenuOpen(false)}
                    >
                        {item.name}
                    </a>
                ))}
                <ThemeToggle/>
            </div>
        </div>
    </>
);};
