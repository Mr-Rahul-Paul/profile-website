"use client";
import Main from "@/components/pages/main";
import DashboardLayout from "@/components/pages/test";

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
    <DashboardLayout>
      <Main />
    </DashboardLayout>
  );
}
