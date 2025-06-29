import Achievements from "./achievements";
import Education from "./education";
import EmailandSkills from "./Skills";
import Telebot from "./telebot";
import Hero from "./hero";

export default function Main() {
  return (
    <div
      className="min-h-screen bg-transparent text-foreground pt-21 flex flex-wrap"
      style={{
        backgroundImage: "url(/BG_BLACK.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
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
