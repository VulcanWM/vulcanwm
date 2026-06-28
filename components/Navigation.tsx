import { motion } from 'motion/react';

const navItems = [
    { id: 'home', label: 'home' },
    { id: 'projects', label: 'projects' },
];

export default function Navigation() {
    const scrollToSection = (sectionId: string) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <motion.nav
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed left-0 right-0 top-0 z-50 border-b border-orange-500/10 bg-black/75 backdrop-blur-md"
        >
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
                <button
                    onClick={() => scrollToSection('home')}
                    className="font-mono text-sm font-bold uppercase tracking-[0.28em] text-orange-400 transition-colors hover:text-orange-300"
                >
                    VulcanWM
                </button>

                <div className="flex items-center gap-6">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className="font-mono text-sm text-gray-500 transition-colors hover:text-orange-400"
                        >
                            {item.label}
                        </button>
                    ))}
                    <a
                        href="mailto:vulcanwmemail@gmail.com"
                        className="font-mono text-sm text-gray-300 underline decoration-orange-500/60 underline-offset-4 transition-colors hover:text-orange-400"
                    >
                        hire me
                    </a>
                </div>
            </div>
        </motion.nav>
    );
}
