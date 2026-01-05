import { motion } from 'motion/react';
import { ExternalLink, Github, Code2, Zap, Shield, Cpu, Globe, Database, Cloud, Bot, Smartphone, Monitor, Terminal, Layers, Network, Lock } from 'lucide-react';
import { useState } from 'react';

const projects = [
    // Featured Projects
    {
        title: 'SAAS HEAVEN',
        description: 'An open-source, community-driven archive of failed saas projects and honest post-mortems.',
        tech: ['Next.js', 'GitHub API', 'JSON', 'Tailwind', 'React.js'],
        icon: <Skull className="w-6 h-6" />,
        gradient: 'from-slate-800 to-zinc-900',
        category: 'open source',
        featured: true,
        demo: 'https://saasheaven.space'
    },

    {
        title: 'TaskStake',
        description: 'Bet on your productivity by staking coins on tasks.',
        tech: ['Next.js', 'MongoDB', 'Tailwind', 'Stripe', 'React.js'],
        icon: <Cpu className="w-6 h-6" />,
        gradient: 'from-orange-500 to-red-500',
        category: 'Web App',
        featured: true,
        demo: 'https://taskstake.netlify.app'
    },
    {
        title: 'LogicLore',
        description: 'Teach kids basic CS concepts with interactive stories.',
        tech: ['Next.js', 'MongoDB', 'Tailwind', 'Stripe', 'Education'],
        icon: <Bot className="w-6 h-6" />,
        gradient: 'from-indigo-500 to-purple-500',
        category: 'Education',
        featured: true,
        demo: 'https://logiclore.netlify.app'
    },
    {
        title: 'ChallengeCanvas',
        description: 'A post-it note like interface for visualising daily progress.',
        tech: ['Chrome Extension', 'Vanilla JS', 'Education'],
        icon: <Monitor className="w-6 h-6" />,
        gradient: 'from-yellow-500 to-orange-500',
        category: 'Tool',
        demo: 'https://github.com/VulcanWM/challenge-canvas'
    },
    {
        title: 'IdeaBench',
        description: 'Access 200+ scored and analysed startup ideas.',
        tech: ['Next.js', 'MongoDB', 'Tailwind', 'Stripe', 'React.js'],
        icon: <Globe className="w-6 h-6" />,
        gradient: 'from-amber-500 to-orange-500',
        category: 'Web App',
        demo: 'https://ideabench.netlify.app'
    },
    {
        title: 'VibeFight',
        description: 'Launch platform for vibecoded websites.',
        tech: ['Next.js', 'React.js', 'MongoDB', 'Tailwind'],
        icon: <Zap className="w-6 h-6" />,
        gradient: 'from-red-500 to-pink-500',
        category: 'Web App',
        demo: 'https://www.vibefight.com'
    },
    {
        title: 'GameGift',
        description: 'Create personalised games as gifts.',
        tech: ['Next.js', 'MongoDB', 'kaboom.js', 'Tailwind', 'Stripe'],
        icon: <Lock className="w-6 h-6" />,
        gradient: 'from-orange-500 to-yellow-500',
        category: 'Web App',
        demo: 'https://www.gamegift.space'
    },
    {
        title: 'feedscope',
        description: 'Challenge your knowledge daily with engaging trivia.',
        tech: ['Next.js', 'React.js', 'MongoDB', 'Tailwind'],
        icon: <Bot className="w-6 h-6" />,
        gradient: 'from-teal-500 to-green-500',
        category: 'Web App',
        demo: 'https://www.feedscope.xyz'
    },
    {
        title: 'recallit',
        description: 'Turn any study material into a personalised learning assessment.',
        tech: ['Next.js', 'MongoDB', 'GroqAI', 'Tailwind', 'Education'],
        icon: <Cpu className="w-6 h-6" />,
        gradient: 'from-indigo-500 to-purple-500',
        category: 'Education',
        featured: true,
        demo: 'https://recallit.vercel.app'
    },
    {
        title: 'easerecall',
        description: 'Effortlessly learn and remember quotations.',
        tech: ["Next.js", "React.js", "MongoDB", "Tailwind", "Education"],
        icon: <Terminal className="w-6 h-6" />,
        gradient: 'from-rose-500 to-orange-500',
        category: 'Education',
        featured: true,
        demo: 'https://easerecall.netlify.app'
    },
    {
        title: 'ToneTrail',
        description: 'Learn music theory from scratch.',
        tech: ["Next.js", "React.js", "VexFlow", "MongoDB", "Education"],
        icon: <Bot className="w-6 h-6" />,
        gradient: 'from-indigo-500 to-purple-500',
        category: 'Education',
        demo: 'https://tonetrail.vercel.app'
    },
    {
        title: 'FocusSync',
        description: 'Goal-driven productivity platform.',
        tech: ["Next.js", "React.js", "MongoDB", "Tool"],
        icon: <Monitor className="w-6 h-6" />,
        gradient: 'from-cyan-500 to-blue-500',
        category: 'Tool',
        demo: 'https://focus-sync.vercel.app'
    },
    {
        title: 'Escape Breakout',
        description: 'An interactive virtual escape room.',
        tech: ["Three.js", "Next.js", "React.js", "Game"],
        icon: <Layers className="w-6 h-6" />,
        gradient: 'from-purple-500 to-pink-500',
        category: 'Game',
        demo: 'https://escape-breakout.netlify.app'
    },
    {
        title: 'Discipulis',
        description: 'A website aimed to help people learn Latin in a fun way.',
        tech: ["Next.js", "React.js", "MongoDB", "Education"],
        icon: <Globe className="w-6 h-6" />,
        gradient: 'from-amber-500 to-orange-500',
        category: 'Education',
        demo: 'https://discipulis.vercel.app'
    },
    {
        title: 'What If',
        description: 'A website where you will face hypothetical scenarios.',
        tech: ["Next.js", "React.js", "MongoDB", "Forum", "NextAuth"],
        icon: <Cpu className="w-6 h-6" />,
        gradient: 'from-orange-500 to-red-500',
        category: 'Forum',
        demo: 'https://what-if-scenarios.vercel.app'
    },
    {
        title: 'Melody Maker',
        description: 'Instantly generates sheet music and audio for simple melodies in any key.',
        tech: ["Next.js", "React.js", "VexFlow", "Tone.js"],
        icon: <Bot className="w-6 h-6" />,
        gradient: 'from-indigo-500 to-purple-500',
        category: 'Tool',
        demo: 'https://melody-maker-theta.vercel.app'
    },
    {
        title: "VulcanWM's GuestBook",
        description: 'View and sign my guestbook.',
        tech: ['Next.js', 'React.js', 'MongoDB', "NextAuth"],
        icon: <Monitor className="w-6 h-6" />,
        gradient: 'from-teal-500 to-green-500',
        category: 'Web App',
        demo: 'https://vulcanwm-guestbook.vercel.app'
    },
    {
        title: 'Global CSS Art',
        description: 'A community dedicated to bringing together CSS artists.',
        tech: ['Next.js', 'CSS', 'GitHub', 'Open-Source'],
        icon: <Globe className="w-6 h-6" />,
        gradient: 'from-purple-500 to-pink-500',
        category: 'Community',
        demo: 'https://global-css-art.vercel.app/'
    },
    {
        title: 'Distribute Time',
        description: 'Automatically make your own timetable.',
        tech: ["Flask", "HTML,CSS,JS", "Tool"],
        icon: <Cpu className="w-6 h-6" />,
        gradient: 'from-cyan-500 to-blue-500',
        category: 'Tool',
        demo: 'https://distribute-time.onrender.com'
    },
    {
        title: 'Escape the Punch',
        description: "Try to escape the ghost's punch.",
        tech: ["kaboom.js", 'Game'],
        icon: <Layers className="w-6 h-6" />,
        gradient: 'from-orange-500 to-red-500',
        category: 'Game',
        demo: 'https://escape-the-punch.netlify.app'
    }
];

const categories = ['All', 'Featured', 'Web App', 'Education', 'Tool', 'Game', 'Forum', 'Community'];


export default function Projects() {
    const [selectedCategory, setSelectedCategory] = useState('Featured');
    const [showAll, setShowAll] = useState(false);

    const filteredProjects = selectedCategory === 'All'
        ? projects
        : selectedCategory === 'Featured'
            ? projects.filter(project => project.featured)
            : projects.filter(project => project.category === selectedCategory);

    const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 8);

    return (
        <section id="projects" className="min-h-screen py-20 px-6 relative">
            <div className="absolute inset-0 circuit-bg opacity-5"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-6xl font-orbitron font-black mb-6 glow-text">
                        FORGE<span className="text-orange-500">D</span> PROJECTS
                    </h2>
                    <div className="w-32 h-1 bg-orange-500 mx-auto mb-8 glow-pulse"></div>
                    <p className="text-xl font-mono text-gray-400 max-w-2xl mx-auto">
                        Digital artifacts born from fire and code, each one a testament to the art of creation.
                    </p>
                </motion.div>

                {/* Category Filter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-4 mb-12"
                >
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => {
                                setSelectedCategory(category);
                                setShowAll(false);
                            }}
                            className={`px-6 py-3 font-mono rounded-lg border transition-all duration-300 ${
                                selectedCategory === category
                                    ? 'bg-orange-500 text-black border-orange-500 glow-pulse'
                                    : 'bg-transparent text-orange-400 border-orange-500/30 hover:border-orange-500 hover:bg-orange-500/10'
                            }`}
                        >
                            {category}
                            {category !== 'All' && category !== 'Featured' && (
                                <span className="ml-2 text-xs opacity-70">
                  ({projects.filter(p => p.category === category).length})
                </span>
                            )}
                        </button>
                    ))}
                </motion.div>

                {/* Project Stats */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-8"
                >
                    <p className="font-mono text-orange-400">
                        Showing {displayedProjects.length} of {filteredProjects.length} projects
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {displayedProjects.map((project, index) => (
                        <motion.div
                            key={`${project.title}-${selectedCategory}`}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.05 }}
                            viewport={{ once: true }}
                            className="group relative"
                        >
                            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6 h-full transition-all duration-300 hover:border-orange-500/50 hover:bg-gray-900/70 glow-border hover:glow-pulse">
                                {/* Featured badge */}
                                {project.featured && (
                                    <div className="absolute -top-2 -right-2 bg-orange-500 text-black text-xs font-mono px-2 py-1 rounded-full glow-pulse">
                                        FEATURED
                                    </div>
                                )}

                                {/* Project icon and category */}
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center">
                                        <div className={`p-2 rounded-lg bg-gradient-to-r ${project.gradient} text-black mr-3`}>
                                            {project.icon}
                                        </div>
                                        <span className="text-xs font-mono text-orange-400 bg-orange-500/10 px-2 py-1 rounded">
                      {project.category}
                    </span>
                                    </div>
                                </div>

                                <h3 className="text-xl font-orbitron font-bold text-white group-hover:text-orange-500 transition-colors mb-3">
                                    {project.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-400 font-mono mb-4 leading-relaxed text-sm">
                                    {project.description}
                                </p>

                                {/* Tech stack */}
                                <div className="flex flex-wrap gap-1 mb-4">
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-2 py-1 bg-gray-800 border border-orange-500/30 rounded text-xs font-mono text-orange-400 transition-all duration-300 hover:border-orange-500 hover:bg-orange-500/10"
                                        >
                      {tech}
                    </span>
                                    ))}
                                </div>

                                {/* Demo button */}
                                <div>
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1 px-3 py-2 bg-orange-500 text-black font-mono hover:bg-orange-600 transition-all duration-300 rounded text-sm flex-1 justify-center"
                                    >
                                        <ExternalLink className="w-3 h-3" />
                                        Demo
                                    </a>
                                </div>


                                {/* Hover effect overlay */}
                                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-red-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Load More / Show Less Button */}
                {filteredProjects.length > 8 && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mt-12"
                    >
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="px-8 py-4 bg-transparent border-2 border-orange-500 text-orange-500 font-mono hover:bg-orange-500 hover:text-black transition-all duration-300 glow-border hover:glow-pulse rounded-lg"
                        >
                            {showAll ? 'SHOW LESS' : `LOAD MORE (${filteredProjects.length - 8} REMAINING)`}
                        </button>
                    </motion.div>
                )}
            </div>

            {/* Flame divider */}
            <div className="flame-divider mt-20"></div>
        </section>
    );
}
