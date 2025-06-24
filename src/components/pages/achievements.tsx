import React from 'react'

export default function Achievements() {
    const achievements = [
        { icon: "🏆", title: "Hackathon Winner", description: "1st place in a major hackathon in Open Innovation" },
    
    ];
    return (
        <>
            {/* Achievements & Projects */}
            <section className="mb-16 ">
                <h2 className="text-2xl font-bold mb-8 text-white">
                    Achievements & Projects
                </h2>
                <div className="space-y-4 ">
                    {achievements.map((item) => (
                        <div key={item.title} className=" px-9 py-5 bg-zinc-900 hover:scale-105 transition-all duration-150 border-[1px] border-white/20 rounded-full">
                            <div className="flex items-start gap-4">
                                <div className="text-2xl pt-1">{item.icon}</div>
                                <div>
                                    <div className="font-semibold text-white">{item.title}</div>
                                    <div className="text-muted-foreground text-sm">{item.description}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </>
    )
}