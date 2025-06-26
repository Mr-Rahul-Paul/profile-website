import Image from "next/image";
import Achievements from "./achievements";
import Education from "./education";
import EmailandSkills from "./Skills";
import Telebot from "./telebot";
import Hero from "./hero";

export default function Main() {
  return (
    <div className="min-h-screen bg-transparent text-foreground pt-21 flex flex-wrap">
      <Image
        src="/BG_BLACK.png"
        alt="bg"
        width={1920}
        height={1080}
        className="absolute top-0 left-0 w-full h-screen object-cover -z-10"
      ></Image>
      <Image
        src="/BG2_BLACK.png"
        alt="bg"
        width={1920}
        height={1080}
        className="absolute top-[100vh] left-0 w-full h-screen object-cover -z-10"
      ></Image>
      <Image
        src="/BG3_BLACK.png"
        alt="bg"
        width={1920}
        height={1080}
        className="absolute top-[200vh] left-0 w-full h-[75vh] object-cover -z-10"
      ></Image>
      {/* Gradient overlay after BG2_BLACK.png */}
      <div className="relative max-w-[850px] mx-auto px-6 py-12 ">
        {/* Hero */}
        <Hero />
        <Achievements />
        <Education />
        <EmailandSkills />
        <Telebot />
      </div>
    </div>
  );
}
