// import React from 'react'
import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function EmailandSkills() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

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


            {/* Message to Telegram */}
            <section className="mb-16">
                <div className="clean-card text-center">
                    <h2 className="text-xl font-stretch-50% mb-2 text-white">Send me a message</h2>
                    <p className="text-muted-foreground mb-6">
                        Your message will be sent directly to me via Telegram bot.
                    </p>
                    <form
                        className="flex flex-col gap-4 max-w-md mx-auto"
                        onSubmit={async (e) => {
                            e.preventDefault();
                            setLoading(true);
                            setError(null);
                            setSuccess(false);
                            try {
                                const res = await fetch('/api/send-telegram', {
                                    method: 'POST',
                                    headers: { 'Content-Type': 'application/json' },
                                    body: JSON.stringify({ name, message }),
                                });
                                if (!res.ok) throw new Error('Failed to send');
                                setSuccess(true);
                                setName('');
                                setMessage('');
                            } catch (err: unknown) {
                                let errorMsg = 'Failed to send message.';
                                if (err && typeof err === 'object' && 'message' in err && typeof (err as Error).message === 'string') {
                                    errorMsg += ` (${(err as Error).message})`;
                                }
                                setError(errorMsg);
                            } finally {
                                setLoading(false);
                            }
                        }}
                    >
                        <input
                            type="text"
                            className="clean-input"
                            placeholder="Your Name"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            required
                        />
                        <textarea
                            className="clean-input flex-1 min-h-[80px] resize-y"
                            placeholder="Type your message..."
                            value={message}
                            onChange={e => setMessage(e.target.value)}
                            required
                        />
                        <Button type="submit" variant="clean" className="font-medium" disabled={loading}>
                            {loading ? 'Sending...' : 'Send Message'}
                        </Button>
                        {success && <div className="text-green-500 text-sm mt-2">Message sent!</div>}
                        {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
                    </form>
                </div>
            </section>
        </div>

    )
}
