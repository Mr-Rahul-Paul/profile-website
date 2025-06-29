import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="mb-16">
      <motion.div
        className="flex flex-col sm:row md:grid-cols-2 lg:flex-row gap-20 md:flex-col lex justify-center items-center "
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.25 }}
      >
        <div className="flex-1">
          {/* wrap in a div to move text as i please wish lesss gooo */}
          <div className="flex justify-center lg:justify-start">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-white text-center lg:text-left">
              Yo! Paul here
            </h1>
          </div>
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-white sm:text-center lg:text-left">
              About me
            </h2>
            <div className="text-lg text-muted-foreground space-y-2 md:text-left ">
              <p>
                Building as a CS undergrad from India—mixing
                <strong className="font-semibold text-white">
                  {" "}
                  backend engineering
                </strong>
                ,<strong className="font-semibold text-white"> Linux hacking </strong>
                and
                <strong className="font-semibold text-white">
                  {" "}
                  3D
                </strong>
                .
              </p>
              <p>
                hackathon winner, passionate about
                <strong className="font-semibold text-white"> C++</strong>,
                <strong className="font-semibold text-white">
                  {" "}
                  TypeScript
                </strong>
                , and
                <strong className="font-semibold text-white"> Rust</strong>.
              </p>
              <p>
                Currently exploring
                <strong className="font-semibold text-white"> DSA</strong>,
                <strong className="font-semibold text-white">
                  {" "}
                  Solana dApps
                </strong>
                , and
                <strong className="font-semibold text-white">
                  {" "}
                  creative coding and WebDev
                </strong>
                .
              </p>
            </div>
          </div>
        </div>

        <motion.div className="flex-shrink-0 lg:pt-15 f">
          <a href="https://x.com/_Rahul_Paul" target="_blank">
            <motion.div
              // wrap in a div and added hover animation
              whileHover={{
                scale: [1, 1.05, 1],
                transition: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className="rounded-full p-[5px] border-[5px] border-white/85"
            >
              <Image
                src="/profile.png"
                alt="Profile"
                height={200}
                width={200}
                className="rounded-full object-cover shadow-lg"
              />
            </motion.div>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
