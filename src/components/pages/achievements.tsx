import React from 'react'
import { motion } from "framer-motion";
export default function Achievements() {
    const achievements = [
        { icon: "🏆", title: "Hackathon Winner", description: "1st place in a major hackathon in Open Innovation" },

    ];
    return (
        <>
            {/* Achievements & Projects */}
            <section className="mb-16 ">
                <motion.h2 className="text-2xl font-bold mb-8 text-white"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.25 }}
                    >
                    Achievements & Projects
                </motion.h2>
                <div className="space-y-4 "

                >
                    {achievements.map((item) => (
                        <motion.div key={item.title} className=" px-9 py-5 bg-zinc-900   border-[1px] border-white/20 rounded-full"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.5 }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="flex items-start gap-4"

                            >
                                <div className="text-2xl pt-1">{item.icon}</div>
                                <div>
                                    <div className="font-semibold text-white">{item.title}</div>
                                    <div className="text-muted-foreground text-sm">{item.description}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

        </>
    )
}