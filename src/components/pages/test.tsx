interface DashboardLayoutProps {
    children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
    return (
        <div className="relative min-h-screen">
            {/* Floating Dashboard */}
            <div className="fixed top-[7vh] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 border border-white/20 hover:border-white  rounded-full shadow-lg px-8 py-4 backdrop-blur-xs bg-black/30">
                <div className="flex flex-row items-center gap-8">

                    {/* Social Links */}
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative text-muted-foreground hover:text-white hover:font-bold   transition-colors text-base font-medium after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[1px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                        title="GitHub"
                    >
                        GitHub
                    </a>

                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative text-muted-foreground hover:text-white hover:font-bold transition-colors text-base font-medium after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[1px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                        title="LinkedIn"
                    >
                        LinkedIn
                    </a>

                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative text-muted-foreground hover:text-white  hover:font-boldtransition-colors text-base font-medium after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[1px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                        title="X (Twitter)"
                    >
                        X
                    </a>

                    <a
                        href="mailto:your@email.com"
                        className="relative text-muted-foreground hover:text-white  hover:font-boldtransition-colors text-base font-medium after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[1px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                        title="Email"
                    >
                        Email
                    </a>

                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative text-muted-foreground hover:text-white hover:font-bold transition-colors text-base font-medium after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[1px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                        title="Resume"
                    >
                        Resume
                    </a>
                </div>
            </div>

            {/* Main Content */}
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
}