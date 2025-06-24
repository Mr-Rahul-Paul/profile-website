import React from 'react'
import Image from 'next/image'
export default function Education() {
    return (
        <div>

            {/* Education */}
            <section className="mb-16">
                <h2 className="text-2xl font-bold mb-8 text-white">Education</h2>
                <div className="space-y-4">
                    <div className="px-9 py-5 bg-zinc-900 hover:scale-105 transition-all duration-300 border-[1px] border-white/20 rounded-2xl">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-muted rounded flex items-center justify-center text-white font-semibold">
                                    II
                                </div>
                                <div>
                                    <div className="font-semibold text-white">
                                        IIIT Vadodara
                                    </div>
                                    <div className="text-muted-foreground">CS major</div>
                                </div>
                            </div>
                            <div className="text-sm text-muted-foreground">2024-2028</div>
                        </div>
                    </div>

                    <div className="px-9 py-5 bg-zinc-900 hover:scale-105 transition-all duration-300 border-[1px] border-white/20 rounded-2xl">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <Image
                                    src="https://pbs.twimg.com/profile_images/1171992656844451840/I8gOz955_400x400.jpg"
                                    alt="MVN schools"
                                    width={40}
                                    height={40}
                                    className="rounded object-cover"
                                />
                                <div>
                                    <div className="font-semibold text-white">MVN schools</div>
                                    <div className="text-muted-foreground">
                                        Electronics & Telecommunication
                                    </div>
                                </div>
                            </div>
                            <div className="text-sm text-muted-foreground">2017-2023</div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}