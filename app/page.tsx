"use client";

import { motion } from "framer-motion";
import { 
  GitForkIcon,
  
  Mail,
  ExternalLink,
  Download,
} from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "AI Crossword Generator",
    desc: "An AI-powered crossword generator that creates puzzles with dynamic clues and interactive gameplay.",

    tech: ["Next.js", "React", "TypeScript", "OpenAI API", "Tailwind"],
    image: "/cw.png",
    demo: "https://...",
    github: "https://...",
    link: "https://infinitecrosswordpuzzle.vercel.app/",
  },

  {
    title: "Beyond the Game Online Card Game ",
    desc: "Built React/Next.js product features during a software engineering internship, including authentication, protected routes and game UI.",
    tech: ["Next.js", "TypeScript", "Firebase", "Phaser", "Tailwind"],
    image: "/test.png",
    demo: "https://...",
    github: "https://...",
    link: "https://beyondthegame.playtohealhub.com/",
  },
  {
    title: "FinGoal",
    desc: "Full-stack financial goal-tracking application",
    tech: ["Node.js", "Express", "React", "MongoDB", "Restful APIs", "Vercel"],
    image: "/fingoal.png",
    demo: "https://...",
    github: "https://...",
    link: "https://github.com/mcoleman2760/fingoal",
  },
  {
    title: "EventFinder",
    desc: "iOS app that find concerts using TicketMaster API.",
    tech: ["Swift", "Next.js", "UI/UX", "TypeScript"],
    image: "/ef2.png",
    demo: "https://...",
    github: "https://...",
    link: "https://github.com/mcoleman2760/EventFinderApp",
  },
];

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Vue.js",
  "JavaScript",
  "Python",
  "C++",
  "Swift",
  "SQL",
  "R",
  "Firebase",
  "MongoDB",
  "PostgreSQL",
  "Node.js",
  "Power BI",
  "Tailwind CSS",
  "OpenAI API",
  "Postman",
  "Git",
  "Figma",
  "Office 365", "Google Workspace",

];

export default function Home() {
  return (
    <main className="min-h-screen bg-blavk text-white">
      <section className="relative overflow-hidden px-6 py-24 md:px-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/10 to-transparent" />

        <div className="relative mx-auto max-w-6xl">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 text-sm uppercase tracking-[0.3em] text-blue-300"
          >
            Michael Coleman
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-4xl text-5xl font-bold leading-tight md:text-7xl"
          >
            Full Stack Engineer & AI Product Builder
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 max-w-2xl text-lg text-zinc-300"
          >
            I build modern web applications, AI-powered experiences, and
            data-driven products using React, Next.js, TypeScript, Python, and
            analytics tools.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="rounded-full bg-white px-6 py-3 font-medium text-black transition hover:bg-zinc-200"
            >
              View Projects
            </a>
            <a
              href="/resume.pdf"
              className="flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-white transition hover:bg-white/10"
            >
              <Download size={18} />
              Resume
            </a>
          </motion.div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-20">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-4">
          {[
            "BA of Computer Science @ Hunter College",
            "Georgia Institute of Technology MS of Analytics Candidate",
            "Software Engineering Internship Experience",
            "Full Stack • AI • Data Science",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <p className="text-zinc-300">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="px-6 py-20 md:px-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold md:text-5xl">Featured Projects</h2>
          <p className="mt-4 max-w-2xl text-zinc-400">
            A collection of frontend and AI projects focused on building useful,
            polished product experiences.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group rounded-3xl border border-white/10 bg-zinc-900/70 p-6 transition hover:-translate-y-1 hover:border-blue-400/50"
              >
                <div className="overflow-hidden rounded-2xl">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={1200}
                    height={700}
                    className="transition duration-500 group-hover:scale-105"
                  />
                </div>

                <h3 className=" mt-2 text-2xl font-semibold">{project.title}</h3>
                <p className="mt-3 text-zinc-400">{project.desc}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-white/10 px-3 py-1 text-sm text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  className="mt-6 inline-flex items-center gap-2 text-blue-300 hover:text-blue-200"
                >
                  View Project <ExternalLink size={16} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold md:text-5xl">Skills</h2>

          <div className="mt-8 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-zinc-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-20">
        <div className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12">
          <h2 className="text-3xl font-bold md:text-5xl">Experience</h2>

          <div className="mt-8 space-y-8">
            <div>
              <p className="text-blue-300">Software Engineering Intern</p>
              <h3 className="mt-1 text-2xl font-semibold">
                Trance4mation Games
              </h3>
              <p className="mt-3 text-zinc-400">
                Built product features using Next.js, TypeScript, Firebase, and
                Phaser. Worked on authentication, protected routes, interactive
                game experiences, and responsive UI.
              </p>
            </div>

            <div>
              <p className="text-blue-300">Data Analyst Intern</p>
              <h3 className="mt-1 text-2xl font-semibold">
                NYC Department of Youth & Community Development
              </h3>
              <p className="mt-3 text-zinc-400">
                Building experience in analytics, reporting, data cleaning, and
                communicating insights for public-sector programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 text-center md:px-20">
        <h2 className="text-4xl font-bold md:text-6xl">
          Let's build together.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-zinc-400">Contact Links</p>

        <div className="mt-3 flex justify-center gap-5">
          <a href="mailto:themichaelwcoleman@gmail.com">
            <Mail />
          </a>
          <a href="https://github.com/mcoleman2760" target="_blank">
            <GitForkIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/michaelw-coleman/"
            target="_blank"
          >
            {/* <Linkedin /> */}
            <Image
              src="/linkedin.png"
              alt="LinkedIn"
              width={23}
              height={23}
            />
          </a>
        </div>
      </section>
    </main>
  );
}
