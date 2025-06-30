import React from "react";
import { motion } from "framer-motion";
export default function Achievements() {
  const achievements = [
    {
      icon: "💻",
      title: "DCodr - Technical Committee",
      description:
        "Leading the coding club's initiatives and overseeing all programming-related activities",
      period: "2025 ",
    },
    {
      icon: "🏆",
      title: "Hackathon Winner - HackIIITV",
      description: "1st place in a major hackathon in Open Innovation",
      period: "may 2025",
    },
    {
      icon: "🎯",
      title: "DCodr - Core Team",
      description:
        "Selected as volunteer member from first years across the entire batch",
      period: " sept 2024 - may 2025",
    },
    {
      icon: "📚",
      title: "JEE - Top 1.5th Percentile",
      description: "Cleared JEE Mains with exceptional performance in top 1.5th percentile",
      period: "2024",
    },
  ];
  return (
    <>
      {/* Achievements & Projects */}
      <section className="mb-16 ">
        <motion.h2
          className="text-2xl font-bold mb-8 text-white"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
        >
          Achievements & Projects
        </motion.h2>
        <div className="space-y-4 ">
          {achievements.map((item) => (
            <motion.div
              key={item.title}
              className=" px-9 py-5 bg-zinc-900   border-[1px] border-white/20 rounded-full"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.25 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-start gap-4">
                  <div className="text-2xl pt-1">{item.icon}</div>
                  <div>
                    <div className="font-semibold text-white">{item.title}</div>
                    <div className="text-muted-foreground text-sm">
                      {item.description}
                    </div>
                  </div>
                </div>
                <div className="text-sm text-muted-foreground font-extrabold">
                  {item.period}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
