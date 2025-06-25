import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion";

export default function Education() {
    const education = [
        {
            icon: "I",
            school: "IIIT Vadodara",
            degree: "CS major",
            period: "2024-2028",
            image: null
        },
        {
            icon: null,
            school: "MVN schools",
            degree: "Electronics & Telecommunication",
            period: "2017-2023",
            image: "https://pbs.twimg.com/profile_images/1171992656844451840/I8gOz955_400x400.jpg"
        }
    ];

    return (
        <div>
            {/* Education */}
            <section className="mb-16">
                <h2 className="text-2xl font-bold mb-8 text-white">Education</h2>
                <div className="space-y-4">
                    {education.map((item) => (
                        <motion.div key={item.school} className="px-9 py-5 bg-zinc-900   border-[1px] border-white/20 rounded-full"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.5 }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    {item.image ? (
                                        <Image
                                            src={item.image}
                                            alt={item.school}
                                            width={50}
                                            height={50}
                                            className="rounded-full object-cover"
                                        />
                                    ) : (
                                        <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center text-white font-semibold">
                                            {item.icon}
                                        </div>
                                    )}
                                    <div>
                                        <div className="font-semibold text-white">
                                            {item.school}
                                        </div>
                                        <div className="text-muted-foreground">{item.degree}</div>
                                    </div>
                                </div>
                                <div className="text-sm text-muted-foreground font-extrabold">{item.period}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    )
}