import { motion } from "motion/react"
import Image from "next/image"
import { ArrowUpRight, Github, Mail, MessageCircle, Twitter } from "lucide-react"

const skills = [
    "Next.js",
    "React",
    "TypeScript",
    "MongoDB",
    "Stripe",
    "Auth",
    "AI APIs",
    "Deployment",
]

const featuredProjects = [
    {
        title: "Recticode",
        description: "Platform for practising real world debugging",
        url: "https://recticode.com",
    },
    {
        title: "Recallit",
        description: "Turn any study material into a personalised learning assessment",
        url: "https://recallit.vercel.app",
    },
    {
        title: "SaasHeaven",
        description: "An open-source, community-driven archive of failed saas projects and honest post-mortems.",
        url: "https://saasheaven.space",
    },
    {
        title: "Buildopolis",
        description: "Build you own city made from all the startups you've built",
        url: "https://buildopolis.xyz",
    },
]

const links = [
    { label: "GitHub", href: "https://github.com/vulcanwm", icon: Github },
    { label: "Email", href: "mailto:vulcanwmemail@gmail.com", icon: Mail },
    { label: "X", href: "https://twitter.com/vulcanwm", icon: Twitter }
]

export default function Hero() {
    return (
        <section id="home" className="relative min-h-screen overflow-hidden px-6 pb-12 pt-28">
            <div className="absolute inset-0 circuit-bg opacity-[0.04]"></div>

            <div className="relative z-10 mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="space-y-8"
                >
                    <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                        <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full border border-orange-500/40 bg-gray-900 shadow-[0_0_35px_rgba(255,106,0,0.18)]">
                            <Image src="/logo.png" alt="VulcanWM logo" fill sizes="96px" className="object-cover" priority />
                        </div>

                        <div>
                            <p className="font-mono text-sm uppercase tracking-[0.28em] text-orange-400">
                                available for work
                            </p>
                            <h1 className="mt-3 text-5xl font-black leading-none text-white md:text-7xl">
                                Vulcan<span className="text-orange-500">WM</span>
                            </h1>
                        </div>
                    </div>

                    <div className="max-w-3xl space-y-5">
                        <p className="text-2xl leading-snug text-gray-200 md:text-3xl">
                            Full-stack developer building web apps, SaaS products, and internal tools.
                        </p>
                        <p className="font-mono text-base leading-8 text-gray-400 md:text-lg">
                            I like shipping clean, useful products with practical architecture:
                            Next.js frontends, MongoDB-backed APIs, payments, auth, AI integrations,
                            and deployments that do not need babysitting.
                        </p>
                        <p className="font-mono text-base leading-8 text-gray-400 md:text-lg">
                            Good fit for internships, freelance builds, MVPs, and teams that need
                            someone who can turn rough product ideas into working software quickly.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-3">
                        <a
                            href="mailto:vulcanwmemail@gmail.com"
                            className="inline-flex items-center gap-2 rounded-md bg-orange-500 px-4 py-2 font-mono text-sm font-bold text-black transition-colors hover:bg-orange-400"
                        >
                            Work with me
                            <ArrowUpRight className="h-4 w-4" />
                        </a>
                        <button
                            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                            className="rounded-md border border-orange-500/40 px-4 py-2 font-mono text-sm text-orange-300 transition-colors hover:border-orange-500 hover:bg-orange-500/10"
                        >
                            View all projects
                        </button>
                    </div>

                    <div className="flex flex-wrap gap-5 border-t border-orange-500/15 pt-5">
                        {links.map((link) => {
                            const Icon = link.icon
                            return (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    target={link.href.startsWith("http") ? "_blank" : "_self"}
                                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                    className="inline-flex items-center gap-2 font-mono text-sm text-gray-400 transition-colors hover:text-orange-400"
                                >
                                    <Icon className="h-4 w-4" />
                                    {link.label}
                                </a>
                            )
                        })}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="grid gap-5"
                >
                    <section className="border-l border-orange-500/30 pl-5">
                        <h2 className="mb-3 font-mono text-sm uppercase tracking-[0.24em] text-orange-400">
                            stack
                        </h2>
                        <div className="flex flex-wrap gap-2">
                            {skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="rounded-md border border-gray-800 bg-gray-950 px-3 py-2 font-mono text-sm text-gray-300"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </section>

                    <section className="border-l border-orange-500/30 pl-5">
                        <h2 className="mb-3 font-mono text-sm uppercase tracking-[0.24em] text-orange-400">
                            featured work
                        </h2>
                        <div className="divide-y divide-gray-900">
                            {featuredProjects.map((project) => (
                                <a
                                    key={project.title}
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group grid gap-1 py-3"
                                >
                                    <span className="flex items-center justify-between gap-3 text-lg font-semibold text-white">
                                        {project.title}
                                        <ArrowUpRight className="h-4 w-4 text-orange-500 opacity-70 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                    </span>
                                    <span className="font-mono text-sm leading-6 text-gray-500">
                                        {project.description}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </section>

                    <section className="border-l border-orange-500/30 pl-5">
                        <h2 className="mb-3 font-mono text-sm uppercase tracking-[0.24em] text-orange-400">
                            current signal
                        </h2>
                        <dl className="grid grid-cols-3 gap-3 text-center">
                            {[
                                ["16", "projects"],
                                ["4", "featured"],
                                ["open", "work"],
                            ].map(([value, label]) => (
                                <div key={label} className="rounded-md border border-gray-900 bg-gray-950/60 p-3">
                                    <dt className="text-lg font-bold text-white">{value}</dt>
                                    <dd className="font-mono text-xs text-gray-500">{label}</dd>
                                </div>
                            ))}
                        </dl>
                    </section>
                </motion.div>
            </div>
        </section>
    )
}
