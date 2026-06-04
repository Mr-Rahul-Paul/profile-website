"use client";

import { useState } from "react";
import { WORK, PROJECTS } from "../../lib/data";

type Tab = keyof typeof PROJECTS;

export default function WorkPage() {
  const [activeTab, setActiveTab] = useState<Tab>("sys");

  return (
    <div className="max-w-[680px] mx-auto px-6 sm:px-8 animate-in fade-in slide-in-from-bottom-2 duration-300">
      <h1 className="text-xl text-text font-mono mb-8">~/work</h1>

      <div className="space-y-6 mb-16">
        {WORK.map((job, i) => (
          <div key={i} className="border border-border rounded-[3px] p-6 bg-bg-raised">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
              <h2 className="text-text font-medium">{job.org}</h2>
              <span className="font-mono text-xs text-dim mt-1 sm:mt-0">{job.date}</span>
            </div>
            <div className="font-mono text-xs text-muted mb-4 border-b border-border pb-4">
              {job.role} · {job.location}
            </div>
            <ul className="space-y-2 text-sm text-sub list-disc list-inside marker:text-dim">
              {job.bullets.map((bullet, j) => (
                <li key={j} className="leading-relaxed">{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <h2 className="text-xl text-text font-mono mb-6">~/projects</h2>
      
      <div className="flex items-center gap-6 border-b border-border mb-6">
        {(["sys", "web", "oss", "research"] as Tab[]).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-3 font-mono text-sm transition-colors relative ${
              activeTab === tab ? "text-text" : "text-dim hover:text-sub"
            }`}
          >
            {tab}
            {activeTab === tab && (
              <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-text" />
            )}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {PROJECTS[activeTab].map((project, i) => (
          <div key={i} className="border border-border rounded-[3px] p-5 hover:bg-bg-raised transition-colors group flex flex-col h-full">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-text font-mono text-sm">{project.name}</h3>
              <div className="flex gap-2">
                {project.tags.map((tag, j) => (
                  <span key={j} className="font-mono text-[10px] text-muted border border-border px-1.5 py-0.5 rounded-[2px]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <p className="text-sm text-sub leading-relaxed mb-4 flex-1">
              {project.desc}
            </p>
            <a 
              href={project.github} 
              target="_blank"
              className="font-mono text-xs text-dim group-hover:text-text transition-colors flex items-center gap-1"
            >
              ↗ github
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
