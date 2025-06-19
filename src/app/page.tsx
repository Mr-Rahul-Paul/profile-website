"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const work = [
  {
    logo: "",
    company: "HACKIIIT hackathon",
    role: "winning project , frontend lead",
    dates: "April - May 2025",
  },
];

const skills = [
  "React",
  "Next.js",
  "Typescript",
  "Python",
  "Pytorch",
  "Postgres",
  "C++",
  "Shitposting",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-3xl mx-auto px-6 py-12">
        {/* Hero */}
        <section className="mb-16">
          <div className="flex flex-col lg:flex-row items-start gap-8">
            <div className="flex-1">
              <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-white">
                Yo! Paul here
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                20 year old something guy
              </p>

              <div className="clean-card mb-8">
                <h2 className="text-xl font-semibold mb-4 text-white">About</h2>
                <div className="space-y-3 text-muted-foreground">
                  <p>
                    tldr; building, breaking, and learning one bug at a time.
                  </p>
                  <p>
                    i dive deep into code, 3d art, and systems that scale.
                    backend is my playground.
                  </p>
                  <p>
                    i explore linux, solana, game dev, and ideas that stretch
                    the mind.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex-shrink-0">
              <Image
                src="/profile.jpg"
                alt="Profile"
                width={160}
                height={160}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </section>

        {/* Work Experience */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-white">
            Some of my Achievements
          </h2>
          <div className="space-y-4">
            {work.map((w) => (
              <div key={w.company} className="clean-card">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-muted rounded flex items-center justify-center text-white font-semibold">
                      {w.company.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-white">
                        {w.company}
                      </div>
                      <div className="text-muted-foreground">{w.role}</div>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">{w.dates}</div>
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

        {/* Skills */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-white">Skills</h2>
          <div className="clean-card">
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span key={skill} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Social Links Bar */}
      <footer className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-card border border-border rounded-lg px-6 py-3 flex gap-6 items-center shadow-lg">
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
      </footer>
    </div>
  );
}
