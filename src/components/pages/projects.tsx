import React from "react";
import { motion } from "framer-motion";
import { IconExternalLink, IconCode, IconAtom } from "@tabler/icons-react";
import { Button } from "../ui/button";

export default function Projects() {
  const projects = [
    {
      title: "Profile Website",
      description: "My personal portfolio website built with Next.js and TypeScript",
      icon: <IconCode className="w-6 h-6 text-blue-400" />,
      href: "https://profile-website-psi.vercel.app/",
      color: "text-blue-400",
      bgColor: "bg-[#222]",
      tech: "Next.js, TypeScript, Tailwind",
      featured: true,
    },
    {
      title: "VQE Simulator",
      description: "Quantum chemistry simulation platform for molecular analysis",
      icon: <IconAtom className="w-6 h-6 text-purple-400" />,
      href: "https://quantum-sim-hack-iiitv.vercel.app/",
      color: "text-purple-400",
      bgColor: "bg-[#222]",
      tech: "React, Quantum Computing, VQE",
      featured: true,
    },
    {
      title: "Paul's Blogs",
      description: "A modern, responsive personal blogging platform",
      icon: <IconCode className="w-6 h-6 text-green-400" />,
      href: "https://my-blogs-one-omega.vercel.app/",
      color: "text-green-400",
      bgColor: "bg-[#222]",
      tech: "Next.js, TypeScript, Tailwind",
      featured: true,
    },
  ];

  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold mb-8 text-white">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="group relative bg-zinc-900 border border-white/10 rounded-2xl p-6 hover:border-white/30 transition-all duration-300"
            whileHover={{ y: -5 }}
            onClick={() => window.open(project.href, "_blank")}
          >
            <div className="flex flex-col h-full">
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-xl ${project.bgColor}`}>
                  {project.icon}
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-muted-foreground group-hover:text-white"
                >
                  <IconExternalLink className="w-5 h-5" />
                </Button>
              </div>
              
              <h3 className={`text-lg font-bold mb-2 ${project.color} group-hover:underline decoration-2 underline-offset-4`}>
                {project.title}
              </h3>
              
              <p className="text-muted-foreground text-sm mb-4 grow">
                {project.description}
              </p>
              
              <div className="flex items-center gap-2 mt-auto">
                <span className="text-xs font-mono px-2 py-1 rounded-full bg-white/5 text-white/70">
                  {project.tech}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
