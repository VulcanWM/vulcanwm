import { motion } from 'motion/react';
import { ExternalLink, Github, Code2, Zap, Shield, Cpu, Globe, Database, Cloud, Bot, Smartphone, Monitor, Terminal, Layers, Network, Lock } from 'lucide-react';
import { useState } from 'react';

const projects = [
    // Featured Projects
    {
        title: 'Neural Nexus',
        description: 'AI-powered development environment with predictive coding assistance and autonomous debugging capabilities.',
        tech: ['React', 'Python', 'TensorFlow', 'Docker'],
        icon: <Cpu className="w-6 h-6" />,
        gradient: 'from-orange-500 to-red-500',
        category: 'AI/ML',
        featured: true
    },
    {
        title: 'Quantum Router',
        description: 'Next-generation network routing system built with quantum-resistant encryption and adaptive protocols.',
        tech: ['Rust', 'WebAssembly', 'GraphQL', 'Kubernetes'],
        icon: <Zap className="w-6 h-6" />,
        gradient: 'from-orange-400 to-yellow-500',
        category: 'Infrastructure',
        featured: true
    },
    {
        title: 'Shadow Vault',
        description: 'Decentralized security framework for protecting sensitive data across distributed systems.',
        tech: ['Node.js', 'Blockchain', 'MongoDB', 'Redis'],
        icon: <Shield className="w-6 h-6" />,
        gradient: 'from-red-500 to-orange-600',
        category: 'Security',
        featured: true
    },
    {
        title: 'Phoenix Protocol',
        description: 'Self-healing microservices architecture that automatically recovers from system failures.',
        tech: ['Go', 'Docker', 'Prometheus', 'gRPC'],
        icon: <Code2 className="w-6 h-6" />,
        gradient: 'from-orange-600 to-amber-500',
        category: 'Infrastructure',
        featured: true
    },
    // Web Applications
    {
        title: 'Cyber Dashboard',
        description: 'Real-time monitoring dashboard for distributed systems with predictive analytics.',
        tech: ['React', 'D3.js', 'WebSocket', 'Redis'],
        icon: <Monitor className="w-6 h-6" />,
        gradient: 'from-orange-500 to-red-400',
        category: 'Web App'
    },
    {
        title: 'Code Forge Portal',
        description: 'Collaborative development platform with integrated CI/CD and code review workflows.',
        tech: ['Next.js', 'PostgreSQL', 'Docker', 'GitHub API'],
        icon: <Globe className="w-6 h-6" />,
        gradient: 'from-amber-500 to-orange-500',
        category: 'Web App'
    },
    {
        title: 'Neural Chat',
        description: 'AI-powered communication platform with sentiment analysis and smart routing.',
        tech: ['React', 'Node.js', 'OpenAI', 'Socket.io'],
        icon: <Bot className="w-6 h-6" />,
        gradient: 'from-red-500 to-pink-500',
        category: 'AI/ML'
    },
    // Mobile Applications
    {
        title: 'Stealth Scanner',
        description: 'Mobile network security scanner with vulnerability detection and reporting.',
        tech: ['React Native', 'Node.js', 'MongoDB', 'Express'],
        icon: <Smartphone className="w-6 h-6" />,
        gradient: 'from-orange-600 to-red-500',
        category: 'Mobile'
    },
    {
        title: 'Crypto Vault Mobile',
        description: 'Secure cryptocurrency wallet with multi-chain support and hardware integration.',
        tech: ['Flutter', 'Dart', 'Firebase', 'Web3'],
        icon: <Lock className="w-6 h-6" />,
        gradient: 'from-yellow-500 to-orange-500',
        category: 'Mobile'
    },
    // Infrastructure & DevOps
    {
        title: 'Cloud Orchestrator',
        description: 'Multi-cloud deployment platform with automated scaling and cost optimization.',
        tech: ['Terraform', 'AWS', 'GCP', 'Kubernetes'],
        icon: <Cloud className="w-6 h-6" />,
        gradient: 'from-blue-500 to-purple-500',
        category: 'Infrastructure'
    },
    {
        title: 'Docker Swarm Manager',
        description: 'Container orchestration system with intelligent load balancing and health monitoring.',
        tech: ['Docker', 'Go', 'Consul', 'Prometheus'],
        icon: <Layers className="w-6 h-6" />,
        gradient: 'from-green-500 to-blue-500',
        category: 'Infrastructure'
    },
    {
        title: 'Network Mesh',
        description: 'Service mesh implementation with advanced traffic management and security policies.',
        tech: ['Istio', 'Envoy', 'gRPC', 'YAML'],
        icon: <Network className="w-6 h-6" />,
        gradient: 'from-purple-500 to-pink-500',
        category: 'Infrastructure'
    },
    // AI/ML Projects
    {
        title: 'Vision AI',
        description: 'Computer vision platform for real-time object detection and image analysis.',
        tech: ['Python', 'OpenCV', 'PyTorch', 'FastAPI'],
        icon: <Bot className="w-6 h-6" />,
        gradient: 'from-indigo-500 to-purple-500',
        category: 'AI/ML'
    },
    {
        title: 'Predictive Analytics Engine',
        description: 'Machine learning pipeline for time series forecasting and anomaly detection.',
        tech: ['Python', 'Scikit-learn', 'Apache Kafka', 'InfluxDB'],
        icon: <Cpu className="w-6 h-6" />,
        gradient: 'from-teal-500 to-green-500',
        category: 'AI/ML'
    },
    {
        title: 'NLP Processor',
        description: 'Natural language processing API with sentiment analysis and entity extraction.',
        tech: ['Python', 'spaCy', 'BERT', 'FastAPI'],
        icon: <Terminal className="w-6 h-6" />,
        gradient: 'from-rose-500 to-orange-500',
        category: 'AI/ML'
    },
    // Security Projects
    {
        title: 'Cyber Threat Hunter',
        description: 'Advanced threat detection system with machine learning-based anomaly identification.',
        tech: ['Python', 'Elasticsearch', 'Kibana', 'Suricata'],
        icon: <Shield className="w-6 h-6" />,
        gradient: 'from-red-600 to-orange-600',
        category: 'Security'
    },
    {
        title: 'Zero Trust Gateway',
        description: 'Identity-based network access control with continuous authentication verification.',
        tech: ['Go', 'OAuth2', 'JWT', 'Redis'],
        icon: <Lock className="w-6 h-6" />,
        gradient: 'from-gray-700 to-gray-500',
        category: 'Security'
    },
    // Database & Backend
    {
        title: 'Graph Database Engine',
        description: 'High-performance graph database with real-time query processing and analytics.',
        tech: ['C++', 'Neo4j', 'Cypher', 'Apache Arrow'],
        icon: <Database className="w-6 h-6" />,
        gradient: 'from-emerald-500 to-teal-500',
        category: 'Database'
    },
    {
        title: 'Event Streaming Platform',
        description: 'Distributed event streaming system with guaranteed delivery and replay capabilities.',
        tech: ['Java', 'Apache Kafka', 'Zookeeper', 'Avro'],
        icon: <Zap className="w-6 h-6" />,
        gradient: 'from-violet-500 to-purple-500',
        category: 'Infrastructure'
    },
    {
        title: 'API Gateway Mesh',
        description: 'Intelligent API gateway with rate limiting, caching, and automatic documentation.',
        tech: ['Node.js', 'Kong', 'OpenAPI', 'Swagger'],
        icon: <Network className="w-6 h-6" />,
        gradient: 'from-cyan-500 to-blue-500',
        category: 'Infrastructure'
    }
];

const categories = ['All', 'Featured', 'Web App', 'Mobile', 'AI/ML', 'Infrastructure', 'Security', 'Database'];

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

                                {/* Action buttons */}
                                <div className="flex gap-2">
                                    <button className="flex items-center gap-1 px-3 py-2 bg-transparent border border-orange-500 text-orange-500 font-mono hover:bg-orange-500 hover:text-black transition-all duration-300 rounded text-sm flex-1 justify-center">
                                        <Github className="w-3 h-3" />
                                        Code
                                    </button>
                                    <button className="flex items-center gap-1 px-3 py-2 bg-orange-500 text-black font-mono hover:bg-orange-600 transition-all duration-300 rounded text-sm flex-1 justify-center">
                                        <ExternalLink className="w-3 h-3" />
                                        Demo
                                    </button>
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