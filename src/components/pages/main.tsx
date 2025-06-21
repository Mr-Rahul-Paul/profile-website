import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const achievements = [
    { icon: "🏆", title: "Hackathon Winner", description: "1st place in a university-level coding competition." },
    { icon: "🛠️", title: "Backend OTP Auth System", description: "Built with Node.js, Express, and TypeScript." },
    { icon: "⚙️", title: "RDKit Chemistry Simulation", description: "Integrated RDKit with a backend to run simulations." },
    { icon: "🎨", title: "McLaren 3D Animation", description: "Modeled and animated a McLaren scene in Blender." },
    { icon: "🤖", title: "Battle Bot Design", description: "Designed and built a roller-type bot for Robo Wars." },
    { icon: "🧠", title: "Personal Arch Linux Setup", description: "Customized Arch environment with install scripts." },
];

const skillsData = {
    "🧑‍💻 Development": ["C++", "JavaScript", "TypeScript", "Rust (learning)", "React", "Next.js", "Node.js", "Express", "APIs", "Dev Tooling"],
    "🧪 Technical Curiosity": ["Linux", "Solana", "Graph Theory", "DSA", "Low-level C/C++", "Data Structures"],
    "🎨 Creative": ["Blender", "3D Design", "Abstract VFX", "Animation"],
};

export default function Main() {
    return (
        <div className="min-h-screen bg-background text-foregroun pt-20">
            <div className="max-w-[850px] mx-auto px-6 py-12">
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

                        <div className="flex-shrink-0 pt-12">
                            <Image
                                src="/profile.jpg"
                                alt="Profile"
                                width={180}
                                height={180}
                                className="rounded-full object-cover shadow-lg"
                            />
                        </div>
                    </div>
                </section>

                {/* Achievements & Projects */}
                <section className="mb-16 ">
                    <h2 className="text-2xl font-bold mb-8 text-white">
                        Achievements & Projects
                    </h2>
                    <div className="space-y-4">
                        {achievements.map((item) => (
                            <div key={item.title} className="clean-card">
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
                        <div className="clean-card">
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

                        <div className="clean-card">
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

            {/* Social Links Bar */}
            < footer className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-card border border-border rounded-lg px-6 py-3 flex gap-6 items-center shadow-lg" >
                <a
                    href="#"
                    title="Home"
                    className="text-muted-foreground hover:text-white transition-colors"
                >
                    <span className="i-lucide-home text-lg" />
                </a>
                <a
                    href="#"
                    title="Resume"
                    className="text-muted-foreground hover:text-white transition-colors"
                >
                    <span className="i-lucide-notebook text-lg" />
                </a>
                <a
                    href="#"
                    title="GitHub"
                    className="text-muted-foreground hover:text-white transition-colors"
                >
                    <span className="i-lucide-github text-lg" />
                </a>
                <a
                    href="#"
                    title="LinkedIn"
                    className="text-muted-foreground hover:text-white transition-colors"
                >
                    <span className="i-lucide-linkedin text-lg" />
                </a>
                <a
                    href="#"
                    title="X"
                    className="text-muted-foreground hover:text-white transition-colors"
                >
                    <span className="i-lucide-twitter text-lg" />
                </a>
                <a
                    href="#"
                    title="Email"
                    className="text-muted-foreground hover:text-white transition-colors"
                >
                    <span className="i-lucide-mail text-lg" />
                </a>
                <button
                    title="Toggle theme"
                    className="text-muted-foreground hover:text-white transition-colors"
                >
                    <span className="i-lucide-moon-star text-lg" />
                </button>
            </footer >
        </div >)
}