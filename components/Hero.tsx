
import { motion } from "motion/react"
import { useEffect, useState } from "react"

export default function Hero() {
    const [particles, setParticles] = useState<
        { left: string; top: string; duration: number; delay: number }[]
    >([])

    useEffect(() => {

        const generated = [...Array(20)].map(() => ({
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            duration: 2 + Math.random() * 2,
            delay: Math.random() * 2,
        }))
        setParticles(generated)
    }, [])

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 circuit-bg"></div>

            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-32 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-60"></div>
                <div className="absolute top-40 right-20 w-24 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-40"></div>
                <div className="absolute bottom-32 left-1/4 w-40 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-50"></div>
                <div className="absolute top-1/3 right-1/3 w-px h-20 bg-gradient-to-b from-transparent via-orange-500 to-transparent opacity-30"></div>
            </div>

            <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="mb-8"
                >
                    <h1 className="text-6xl md:text-8xl font-orbitron font-black mb-6 glow-text">
                        VULCAN<span className="text-orange-500">WM</span>
                    </h1>
                    <div className="w-24 h-1 bg-orange-500 mx-auto mb-8 glow-pulse"></div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                >
                    <p className="text-2xl md:text-4xl font-orbitron mb-8 text-gray-300">
                        I <span className="text-orange-500 glow-text">forge</span> code into{' '}
                        <span className="text-orange-500 glow-text">fire</span>
                    </p>
                    <p className="text-lg md:text-xl font-mono text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        Digital architect crafting elegant solutions from the shadows of cyberspace.
                        Where mythic fire meets modern code.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="mt-12"
                >
                    <button
                        onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                        className="px-8 py-4 bg-transparent border-2 border-orange-500 text-orange-500 font-mono hover:bg-orange-500 hover:text-black transition-all duration-300 glow-border hover:glow-pulse"
                    >
                        ENTER THE FORGE
                    </button>
                </motion.div>
            </div>

            <div className="absolute inset-0 overflow-hidden">
                {particles.map((p, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-orange-500 rounded-full opacity-60"
                        style={{ left: p.left, top: p.top }}
                        animate={{
                            opacity: [0.3, 1, 0.3],
                            scale: [1, 1.5, 1],
                        }}
                        transition={{
                            duration: p.duration,
                            repeat: Infinity,
                            delay: p.delay,
                        }}
                    />
                ))}
            </div>
        </section>
    );
}