import { motion } from 'motion/react';
import { Github, Twitter, Mail, Send, ExternalLink, MessageCircle } from 'lucide-react';
import { useState } from 'react';

const socialLinks = [
    {
        name: 'GitHub',
        url: 'https://github.com/vulcanwm',
        icon: <Github className="w-6 h-6" />,
        description: 'Explore my code repositories and open source contributions',
        color: 'from-orange-500 to-red-500'
    },
    {
        name: 'Twitter',
        url: 'https://twitter.com/vulcanwm',
        icon: <Twitter className="w-6 h-6" />,
        description: 'Follow my thoughts on tech, coding, and digital innovation',
        color: 'from-blue-500 to-purple-500'
    },
    {
        name: 'Email',
        url: 'mailto:vulcanwmemail@gmail.com',
        icon: <Mail className="w-6 h-6" />,
        description: 'Direct line for collaborations and professional inquiries',
        color: 'from-green-500 to-teal-500'
    },
];

export default function Contact() {
    const [email, setEmail] = useState('');

    return (
        <section id="contact" className="min-h-screen py-20 px-6 relative">
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
                        DIGITAL <span className="text-orange-500">NEXUS</span>
                    </h2>
                    <div className="w-32 h-1 bg-orange-500 mx-auto mb-8 glow-pulse"></div>
                    <p className="text-xl font-mono text-gray-400 max-w-2xl mx-auto">
                        Connect with the forge. Join the network of digital architects and code warriors.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-3xl font-orbitron font-bold text-orange-500 mb-8">
                            NETWORK NODES
                        </h3>

                        <div className="space-y-6">
                            {socialLinks.map((link, index) => (
                                <motion.a
                                    key={link.name}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="group block"
                                >
                                    <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6 transition-all duration-300 hover:border-orange-500/50 hover:bg-gray-900/70 glow-border hover:glow-pulse">
                                        <div className="flex items-center mb-4">
                                            <div className={`p-3 rounded-lg bg-gradient-to-r ${link.color} text-black mr-4 group-hover:scale-110 transition-transform duration-300`}>
                                                {link.icon}
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="text-xl font-orbitron font-bold text-white group-hover:text-orange-500 transition-colors">
                                                    {link.name}
                                                </h4>
                                                <div className="flex items-center gap-2 text-orange-400 font-mono text-sm">
                                                    <span>Connect</span>
                                                    <ExternalLink className="w-3 h-3" />
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-gray-400 font-mono text-sm leading-relaxed">
                                            {link.description}
                                        </p>
                                    </div>
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Newsletter Signup */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-3xl font-orbitron font-bold text-orange-500 mb-8">
                            DATA STREAMS
                        </h3>

                        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-8 glow-border">
                            <div className="flex items-center mb-6">
                                <div className="p-3 rounded-lg bg-gradient-to-r from-orange-500 to-amber-500 text-black mr-4">
                                    <MessageCircle className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-orbitron font-bold text-white">
                                        100K Before Uni
                                    </h4>
                                    <p className="text-orange-400 font-mono text-sm">
                                        My journey to £100,000 in 2 years
                                    </p>
                                </div>
                            </div>

                            <p className="text-gray-400 font-mono mb-6 leading-relaxed">
                                Follow along as I share projects, tips, side hustles, and lessons while
                                aiming to earn £100k before starting university — my mission to live
                                debt-free and build financial freedom.
                            </p>

                            <motion.a
                                href="https://100k-before-uni.beehiiv.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full flex items-center justify-center gap-3 px-6 py-3 bg-orange-500 text-black font-mono font-bold hover:bg-orange-600 transition-all duration-300 rounded-lg glow-pulse"
                            >
                                <Send className="w-5 h-5" />
                                Join the Journey
                            </motion.a>

                            <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                                <div className="p-3 bg-gray-800/50 rounded-lg">
                                    <p className="text-orange-500 font-orbitron font-bold text-lg">£10</p>
                                    <p className="text-gray-400 font-mono text-xs">Current Earnings</p>
                                </div>
                                <div className="p-3 bg-gray-800/50 rounded-lg">
                                    <p className="text-orange-500 font-orbitron font-bold text-lg">Weekly</p>
                                    <p className="text-gray-400 font-mono text-xs">Updates</p>
                                </div>
                                <div className="p-3 bg-gray-800/50 rounded-lg">
                                    <p className="text-orange-500 font-orbitron font-bold text-lg">0%</p>
                                    <p className="text-gray-400 font-mono text-xs">Debt</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                    {/* Direct Contact CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-lg p-8 max-w-3xl mx-auto">
                        <h3 className="text-2xl font-orbitron font-bold text-white mb-4">
                            Ready to forge something <span className="text-orange-500 glow-text">legendary</span>?
                        </h3>
                        <p className="text-gray-400 font-mono mb-6">
                            Whether you&apos;re looking to collaborate, have questions about my work, or just want to discuss the future of technology.
                        </p>
                        <a
                            href="mailto:vulcanwmemail@gmail.com"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-orange-500 text-black font-mono font-bold hover:bg-orange-600 transition-all duration-300 rounded-lg glow-pulse"
                        >
                            <Mail className="w-5 h-5" />
                            INITIATE CONTACT
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Flame divider */}
            <div className="flame-divider mt-20"></div>
        </section>
    );
}