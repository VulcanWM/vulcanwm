import { motion } from 'motion/react';
import { ExternalLink, Zap, Cpu, Globe, Bot, Monitor, Terminal, Layers, Lock } from 'lucide-react';
import { useState } from 'react';

const projects = [
    // Featured Projects
    {
        title: 'Recticode',
        description: 'Platform for practising real world debugging.',
        tech: ['FastAPI', 'PostgreSQL', 'Typer', 'Next.js', 'GitHub'],
        icon: <Terminal className="w-6 h-6" />,
        gradient: 'from-green-500 to-emerald-500',
        category: 'Developer Tool',
        featured: true,
        demo: 'https://recticode.com'
    },
    {
        title: 'Buildopolis',
        description: "Build your own city made from all the startups you've built.",
        tech: ['Next.js', 'MongoDB', 'Stripe', 'Tailwind', 'NextAuth'],
        icon: <Globe className="w-6 h-6" />,
        gradient: 'from-sky-500 to-blue-600',
        category: 'Web App',
        featured: true,
        demo: 'https://buildopolis.xyz'
    },
    {
        title: 'SaasHeaven',
        description: 'An open-source, community-driven archive of failed SaaS projects and honest post-mortems.',
        tech: ['Next.js', 'React.js', 'Tailwind', 'GitHub repo as DB'],
        icon: <Layers className="w-6 h-6" />,
        gradient: 'from-zinc-500 to-slate-700',
        category: 'Community',
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
        featured: false,
        demo: 'https://taskstake.netlify.app'
    },
    {
        title: 'LogicLore',
        description: 'Teach kids basic CS concepts with interactive stories.',
        tech: ['Next.js', 'MongoDB', 'Tailwind', 'Stripe', 'Education'],
        icon: <Bot className="w-6 h-6" />,
        gradient: 'from-indigo-500 to-purple-500',
        category: 'Education',
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
    }
];

const categories = ['All', 'Featured', 'Web App', 'Education', 'Tool', 'Game', 'Forum', 'Community'];


export default function Projects() {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const filteredProjects = selectedCategory === 'All'
        ? projects
        : selectedCategory === 'Featured'
            ? projects.filter(project => project.featured)
            : projects.filter(project => project.category === selectedCategory);

    return (
        <section id="projects" className="relative px-6 py-16">
            <div className="absolute inset-0 circuit-bg opacity-[0.03]"></div>

            <div className="relative z-10 mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-8 flex flex-col gap-4 border-t border-orange-500/15 pt-10 md:flex-row md:items-end md:justify-between"
                >
                    <div>
                        <p className="mb-3 font-mono text-sm uppercase tracking-[0.24em] text-orange-400">work</p>
                        <h2 className="text-3xl font-bold text-white md:text-4xl">Project archive</h2>
                    </div>
                    <p className="max-w-xl font-mono text-sm leading-6 text-gray-500">
                        A compact list of shipped experiments, web apps, education products,
                        tools, and games. Filter it however you want.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-6 flex flex-wrap gap-2"
                >
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => {
                                setSelectedCategory(category);
                            }}
                            className={`rounded-md border px-3 py-2 font-mono text-sm transition-colors ${
                                selectedCategory === category
                                    ? 'border-orange-500 bg-orange-500 text-black'
                                    : 'border-gray-800 text-gray-500 hover:border-orange-500/50 hover:text-orange-400'
                            }`}
                        >
                            {category}
                            {category !== 'All' && category !== 'Featured' && (
                                <span className="ml-1 opacity-70">({projects.filter(p => p.category === category).length})</span>
                            )}
                        </button>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-4"
                >
                    <p className="font-mono text-sm text-orange-400">
                        Showing {filteredProjects.length} of {projects.length} projects
                    </p>
                </motion.div>

                <div className="divide-y divide-gray-900 border-y border-gray-900">
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={`${project.title}-${selectedCategory}`}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.35, delay: Math.min(index * 0.025, 0.2) }}
                            viewport={{ once: true }}
                            className="group grid gap-4 py-5 md:grid-cols-[0.9fr_1.1fr_auto] md:items-center"
                        >
                            <div>
                                <div className="flex flex-wrap items-center gap-2">
                                    <h3 className="text-xl font-semibold text-white transition-colors group-hover:text-orange-400">
                                        {project.title}
                                    </h3>
                                    {project.featured && (
                                        <span className="rounded bg-orange-500/15 px-2 py-1 font-mono text-xs text-orange-400">
                                            Featured
                                        </span>
                                    )}
                                    <span className="rounded border border-gray-800 px-2 py-1 font-mono text-xs text-gray-500">
                                        {project.category}
                                    </span>
                                </div>
                                <p className="mt-2 font-mono text-sm leading-6 text-gray-500">
                                    {project.description}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {project.tech.slice(0, 5).map((tech) => (
                                    <span
                                        key={tech}
                                        className="rounded border border-gray-800 bg-gray-950 px-2 py-1 font-mono text-xs text-gray-400"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex w-fit items-center gap-2 rounded-md border border-orange-500/35 px-3 py-2 font-mono text-sm text-orange-300 transition-colors hover:border-orange-500 hover:bg-orange-500/10"
                            >
                                Open
                                <ExternalLink className="h-3.5 w-3.5" />
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
