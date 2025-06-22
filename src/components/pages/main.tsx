import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const achievements = [
    { icon: "🏆", title: "Hackathon Winner", description: "1st place in a major hackathon in Open Innovation" },

];

const skillsData = {
    "🧑‍💻 Development": ["C++", "JavaScript", "TypeScript", "Rust (learning)", "React", "Next.js", "Node.js", "Express", "APIs", "Dev Tooling"],
    "🧪 Technical Curiosity": ["Linux", "Solana", "Graph Theory", "DSA", "Low-level C/C++", "Data Structures"],
    "🎨 Creative": ["Blender", "3D Design", "Abstract VFX", "Animation"],
};

export default function Main() {
    return (
        <div className="min-h-screen bg-transparent text-foreground pt-21">
            <Image src="/BG_BLACK.png" alt="bg" width={1920} height={1080} className="absolute top-0 left-0 w-full h-screen object-cover -z-10"></Image>
            <Image src="/BG2_BLACK.png" alt="bg" width={1920} height={1080} className="absolute top-[100vh] left-0 w-full h-screen object-cover -z-10"></Image>
            <div className="relative max-w-[850px] mx-auto px-6 py-12">
                {/* Hero */}
                <section className="mb-16">
                    <div className="flex flex-col lg:flex-row items-start gap-20">
                        <div className="flex-1">
                            <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-white">
                                Yo! Paul here
                            </h1>
                            <div className="mb-8">
                                <h2 className="text-xl font-semibold mb-4 text-white">About me</h2>
                                <div className="text-lg text-muted-foreground space-y-2">
                                    <p>Building with passion, from <strong className="font-semibold text-white">backend systems</strong> to <strong className="font-semibold text-white">smart contracts</strong>.</p>
                                    <p>Drawn to <strong className="font-semibold text-white">dev tooling</strong>, <strong className="font-semibold text-white">low-level optimization</strong>, and complex puzzles.</p>
                                    <p>Currently exploring <strong className="font-semibold text-white">Rust</strong>, <strong className="font-semibold text-white">Linux internals</strong>, and <strong className="font-semibold text-white">Solana</strong>.</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex-shrink-0 pt-15 ">
                            <Image
                                src="/profile.jpg"
                                alt="Profile"
                                height={200}
                                width={200}
                                className="rounded-full object-cover shadow-lg border-[5px] border-white/85 p-[10px]"
                            />
                        </div>
                    </div>
                </section>

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

                {/* Email Subscription */}
                <section className="mb-16">
                    <div className="clean-card text-center">
                        <h2 className="text-xl font-bold mb-2 text-white">Stay Updated</h2>
                        <p className="text-muted-foreground mb-6">
                            Subscribe to my email list. I do not spam, ever.
                        </p>
                        <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <Input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1"
                            />
                            <Button type="submit" variant="clean" className="font-medium">
                                Subscribe
                            </Button>
                        </form>
                    </div>
                </section>

                {/* Skills & Interests */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-8 text-white">Skills & Interests</h2>
                    <div className="clean-card">
                        <div className="space-y-6">
                            {Object.entries(skillsData).map(([category, skills]) => (
                                <div key={category}>
                                    <h3 className="text-lg font-semibold text-white mb-3">{category}</h3>
                                    <div className="flex flex-wrap gap-3">
                                        {skills.map((skill) => (
                                            <span key={skill} className="skill-tag">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </section>
            </div >
        </div >)
}