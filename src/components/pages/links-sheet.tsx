"use client";
import { Button } from "../ui/button";
import { SheetFooter } from "../ui/sheet";
import { IconExternalLink, IconCode, IconAtom } from "@tabler/icons-react";

export default function LinksSheet() {
  const projects = [
    {
      title: "Profile Website",
      description:
        "My personal portfolio website built with Next.js and TypeScript",
      icon: <IconCode className="w-5 h-5 text-blue-400" />,
      href: "https://profile-website-psi.vercel.app/",
      color: "text-blue-400",
      bgColor: "bg-[#222]",
      tech: "Next.js, TypeScript, Tailwind",
      featured: true,
    },
    {
      title: "VQE Simulator",
      description:
        "Quantum chemistry simulation platform for molecular analysis",
      icon: <IconAtom className="w-5 h-5 text-purple-400" />,
      href: "https://quantum-sim-hack-iiitv.vercel.app/",
      color: "text-purple-400",
      bgColor: "bg-[#222]",
      tech: "React, Quantum Computing, VQE",
      featured: true,
    },
  ];

  return (
    <div className="flex-1 flex flex-col h-full">
      {/* Scrollable Content */}
      <div className="flex-1   px-2 pb-4">
        {/* Featured Projects Section */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-white mb-3 px-2">
            Featured Projects
          </h3>
          <div className="space-y-3">
            {projects.map((project, index) => (
              <div
                key={index}
                className="hover:bg-[#1a1a1a] transition-all duration-200 cursor-pointer p-3 rounded-lg border border-[#333] hover:border-[#555]"
                onClick={() => window.open(project.href, "_blank")}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-3 flex-1">
                    <div className="flex flex-col items-center">
                      <div
                        className={`flex-shrink-0 p-2 ${project.bgColor} rounded-lg group-hover:bg-[#333] transition-colors`}
                      >
                        {project.icon}
                      </div>
                      <span
                        className="mt-5 w-2 h-2 bg-green-500 rounded-full border border-black"
                        title="Deployed"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className={`font-semibold text-sm ${project.color}`}>
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-xs mt-1">
                        {project.description}
                      </p>
                      <p className="text-gray-500 text-xs mt-2 font-mono">
                        {project.tech}
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="ml-2 flex-shrink-0 text-xs h-8 px-3"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(project.href, "_blank");
                    }}
                  >
                    Visit
                    <IconExternalLink className="w-3 h-3 ml-1" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Stats Section */}
        <div className="mx-2 p-4 bg-[#0a0a0a] border border-[#333] rounded-lg">
          <h3 className="text-sm font-semibold text-white mb-3">Quick Stats</h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="text-center">
              <div className="text-lg font-bold text-white">2+</div>
              <div className="text-xs text-gray-400">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-white">2+</div>
              <div className="text-xs text-gray-400">Years Exp</div>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Footer */}
      <SheetFooter className="border-t border-[#333] pt-4 mt-4 flex-shrink-0">
        <div className="w-full text-center">
          <p className="text-xs text-gray-500">More projects coming soon...</p>
        </div>
      </SheetFooter>
    </div>
  );
}
