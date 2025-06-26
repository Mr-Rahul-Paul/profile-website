export default function Skills() {
 
    const skillsData = {
        "🧑‍💻 Development": ["C++", "JavaScript", "TypeScript", "Rust (learning)", "React", "Next.js", "Node.js", "Express", "APIs", "Dev Tooling"],
        "🧪 Technical Curiosity": ["Linux", "Solana", "Graph Theory", "DSA", "Low-level C/C++", "Data Structures"],
        "🎨 Creative": ["Blender", "3D Design", "Abstract VFX", "Animation"],
    };
    return (
        <div>



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
