// import React from 'react'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function EmailandSkills() {

    const skillsData = {
        "🧑‍💻 Development": ["C++", "JavaScript", "TypeScript", "Rust (learning)", "React", "Next.js", "Node.js", "Express", "APIs", "Dev Tooling"],
        "🧪 Technical Curiosity": ["Linux", "Solana", "Graph Theory", "DSA", "Low-level C/C++", "Data Structures"],
        "🎨 Creative": ["Blender", "3D Design", "Abstract VFX", "Animation"],
    };
    return (
    <div>
        
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
                    <div className="    ">
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
            </div>
       
    )
}
