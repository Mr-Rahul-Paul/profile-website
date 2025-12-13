import React from "react";
import {
  SiJavascript,
  SiTypescript,
  SiRust,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiSolana,
} from "react-icons/si";
import { FaCuttlefish } from "react-icons/fa";
import { ReactElement } from "react";

const languageIcons: Record<string, ReactElement> = {
  "C++": <FaCuttlefish title="C++" className="w-14 h-14" />,
  JavaScript: (
    <SiJavascript title="JavaScript" className="w-14 h-14 text-yellow-400" />
  ),
  TypeScript: (
    <SiTypescript title="TypeScript" className="w-14 h-14 text-blue-500" />
  ),
  "Rust (learning)": (
    <SiRust title="Rust" className="w-14 h-14 text-orange-700" />
  ),
  React: <SiReact title="React" className="w-14 h-14 text-cyan-400" />,
  "Next.js": <SiNextdotjs title="Next.js" className="w-14 h-14 text-white" />,
  "Node.js": (
    <SiNodedotjs title="Node.js" className="w-14 h-14 text-green-600" />
  ),
  Express: <SiExpress title="Express" className="w-14 h-14 text-gray-300" />,
  "Solana (learning)": (
    <SiSolana title="Solana" className="w-14 h-14 text-green-400" />
  ),
};

export default function Skills() {
  const skillsData = {
    "🧑‍💻 Development": [
      "C++",
      "JavaScript",
      "TypeScript",
      "Rust (learning)",
      "React",
      "Next.js",
      "Node.js",
      "Express",

      "Solana (learning)",
    ],
    "🧪 Technical Curiosity": [
      "Linux",
      "APIs",
      "Dev Tooling",
      "Graph Theory",
      "DSA",
      "Low-level C/C++",
      "Data Structures",
    ],
    "🎨 Creative hobby": ["Blender", "3D Design", "Abstract VFX", "Animation"],
  };
  return (
    <div>
      {/* Skills & Interests */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-8 text-white">
          Skills & Interests
        </h2>
        <div>
          <div className="space-y-6">
            {Object.entries(skillsData).map(([category, skills]) => (
              <div key={category}>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-x-6 gap-y-4 py-2 items-center">
                  {skills.map((skill) => (
                    <div
                      key={skill}
                      className="group relative flex flex-col items-center"
                    >
                      {languageIcons[skill] ? (
                        <span className="transition-transform duration-200 group-hover:scale-110 ">
                          {languageIcons[skill]}
                        </span>
                      ) : (
                        <span className="skill-tag">{skill}</span>
                      )}
                      {languageIcons[skill] && (
                        <span className="absolute left-1/2 -translate-x-1/2 mt-16 px-2 py-1 rounded bg-zinc-900 text-white text-xs opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-10">
                          {skill} 
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <div>
              <a 
                href="https://www.instagram.com/rahulpaul.3d/" 
                className="inline-block mt-4 text-sm text-gray-400 hover:text-white transition-colors border-b border-gray-600 hover:border-white pb-0.5" 
                target="_blank"
              >
                🎨 Check out my 3D art portfolio →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
