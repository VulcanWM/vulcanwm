import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Menu, X, Home, Briefcase, Zap, MessageCircle } from 'lucide-react';

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const navItems = [
        { id: 'home', label: 'Home', icon: <Home className="w-5 h-5" /> },
        { id: 'projects', label: 'Projects', icon: <Briefcase className="w-5 h-5" /> },
        { id: 'skills', label: 'Skills', icon: <Zap className="w-5 h-5" /> },
        { id: 'contact', label: 'Contact', icon: <MessageCircle className="w-5 h-5" /> },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'projects', 'skills', 'contact'];
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
    };

    return (
        <>
            {/* Desktop Navigation */}
            <motion.nav
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-orange-500/20"
            >
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="text-2xl font-orbitron font-black text-orange-500 glow-text cursor-pointer"
                        onClick={() => scrollToSection('home')}
                    >
                        VULCAN<span className="text-white">WM</span>
                    </motion.div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <motion.button
                                key={item.id}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => scrollToSection(item.id)}
                                className={`font-mono flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                                    activeSection === item.id
                                        ? 'text-orange-500 bg-orange-500/10 border border-orange-500/30'
                                        : 'text-gray-400 hover:text-orange-500'
                                }`}
                            >
                                {item.icon}
                                {item.label}
                            </motion.button>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-orange-500 hover:text-orange-400 transition-colors"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <motion.div
                initial={{ opacity: 0, x: '100%' }}
                animate={{
                    opacity: isOpen ? 1 : 0,
                    x: isOpen ? '0%' : '100%'
                }}
                transition={{ duration: 0.3 }}
                className="fixed top-0 right-0 bottom-0 w-80 bg-black/95 backdrop-blur-md border-l border-orange-500/20 z-50 md:hidden"
            >
                <div className="p-6 pt-20">
                    <div className="space-y-6">
                        {navItems.map((item, index) => (
                            <motion.button
                                key={item.id}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{
                                    opacity: isOpen ? 1 : 0,
                                    x: isOpen ? 0 : 50
                                }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                onClick={() => scrollToSection(item.id)}
                                className={`w-full font-mono flex items-center gap-4 px-6 py-4 rounded-lg transition-all duration-300 ${
                                    activeSection === item.id
                                        ? 'text-orange-500 bg-orange-500/10 border border-orange-500/30 glow-border'
                                        : 'text-gray-400 hover:text-orange-500 hover:bg-gray-900/50'
                                }`}
                            >
                                {item.icon}
                                {item.label}
                            </motion.button>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsOpen(false)}
                    className="fixed inset-0 bg-black/50 z-40 md:hidden"
                />
            )}
        </>
    );
}