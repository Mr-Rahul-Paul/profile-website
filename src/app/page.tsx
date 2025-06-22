"use client";
import Main from "@/components/pages/main";
import { FloatingDock } from "@/components/ui/floating-dock";
import {IconBriefcase, IconBrandInstagram, IconMail, IconBrandGithub, IconBrandLinkedinFilled } from "@tabler/icons-react";

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

// Navigation items for the floating dock
const navigationItems = [
  {
    title: "",
    icon: <IconBrandGithub className="h-full w-full" />,
    href: "https://github.com/Mr-Rahul-Paul",
  },
  {
    title: "",
    icon: <IconBrandLinkedinFilled className="h-full w-full" />,
    href: "#www.linkedin.com/in/rahul-paul-0109bb219",
  },
  {
    title: "Projects",
    icon: <IconBriefcase className="h-full w-full" />,
    href: "https://github.com/Mr-Rahul-Paul?tab=repositories",
  },
  {
    title: "",
    icon: <IconBrandInstagram className="h-full w-full" />,
    href: "https://www.instagram.com/rahulpaul.3d",
  },
  {
    title: "",
    icon: <IconMail className="h-full w-full" />,
    href: "#contact",
  },
];

export default function Home() {
  return (
    <>
      <FloatingDock items={navigationItems} />

      <Main />

    </>
  );
}
