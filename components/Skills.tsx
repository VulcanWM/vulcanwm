import { motion } from 'motion/react';
import {
    Code2,
    Database,
    Cloud,
    Zap,
    Cpu,
    Globe,
    GitBranch,
    Terminal,
    Smartphone,
    Server,
    CalendarCheck2,
    Rocket
} from 'lucide-react';

const skillCategories = [
    {
        title: 'Frontend Forge',
        skills: [
            { name: 'React', icon: <Code2 className="w-6 h-6" />, level: 95 },
            { name: 'TypeScript', icon: <Terminal className="w-6 h-6" />, level: 90 },
            { name: 'Next.js', icon: <Globe className="w-6 h-6" />, level: 95 },
            { name: 'Tailwind', icon: <Smartphone className="w-6 h-6" />, level: 85 },
        ]
    },
    {
        title: 'Backend Arsenal',
        skills: [
            { name: 'Node.js', icon: <Server className="w-6 h-6" />, level: 88 },
            { name: 'Python', icon: <Cpu className="w-6 h-6" />, level: 92 },
            { name: 'MongoDB', icon: <Database className="w-6 h-6" />, level: 90 },
            { name: 'Stripe', icon: <Zap className="w-6 h-6" />, level: 90 },
        ]
    },
    {
        title: 'DevOps Matrix',
        skills: [
            { name: 'Git', icon: <GitBranch className="w-6 h-6" />, level: 87 },
            { name: 'Azure', icon: <Cloud className="w-6 h-6" />, level: 85 },
            { name: 'Deployment', icon: <Rocket className="w-6 h-6" />, level: 95 },
            { name: 'Cron Jobs', icon: <CalendarCheck2 className="w-6 h-6" />, level: 90 },
        ]
    }
];

export default function Skills() {
    return (
        <section id="skills" className="min-h-screen py-20 px-6 relative">
            <div className="absolute inset-0 circuit-bg opacity-3"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-6xl font-orbitron font-black mb-6 glow-text">
                        SKILL <span className="text-orange-500">MATRIX</span>
                    </h2>
                    <div className="w-32 h-1 bg-orange-500 mx-auto mb-8 glow-pulse"></div>
                    <p className="text-xl font-mono text-gray-400 max-w-2xl mx-auto">
                        Ancient runes of power, each one mastered through countless cycles of creation and destruction.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-8 glow-border hover:glow-pulse transition-all duration-300"
                        >
                            <h3 className="text-2xl font-orbitron font-bold text-orange-500 mb-8 text-center">
                                {category.title}
                            </h3>

                            <div className="space-y-6">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                                        viewport={{ once: true }}
                                        className="group"
                                    >
                                        <div className="flex items-center mb-3">
                                            <div className="p-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300">
                                                {skill.icon}
                                            </div>
                                            <span className="font-mono text-white group-hover:text-orange-400 transition-colors">
                        {skill.name}
                      </span>
                                            <span className="ml-auto font-mono text-orange-500 text-sm">
                        {skill.level}%
                      </span>
                                        </div>

                                        <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                                            <motion.div
                                                className="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full"
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                transition={{ duration: 1, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) + 0.5 }}
                                                viewport={{ once: true }}
                                                style={{
                                                    boxShadow: '0 0 10px rgba(255, 106, 0, 0.5)'
                                                }}
                                            />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Hexagonal skill nodes */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h3 className="text-3xl font-orbitron font-bold text-orange-500 mb-12">
                        CORE SYSTEMS
                    </h3>

                    <div className="flex flex-wrap justify-center gap-8">
                        {['APIs', 'SSR', 'NoSQL', 'iOS Dev', 'Auth', 'Payments'].map((tech, index) => (
                            <motion.div
                                key={tech}
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group relative"
                            >
                                <div className="w-24 h-24 bg-gray-900 border-2 border-orange-500/30 rounded-lg flex items-center justify-center font-mono text-sm text-orange-400 transition-all duration-300 hover:border-orange-500 hover:bg-orange-500/10 glow-pulse cursor-pointer">
                                    {tech}
                                </div>
                                <div className="absolute inset-0 bg-orange-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}