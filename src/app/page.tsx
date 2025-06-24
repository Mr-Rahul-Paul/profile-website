"use client";
import Main from "@/components/pages/main";
import { FloatingDock } from "@/components/ui/floating-dock";
import { IconBriefcase, IconBrandInstagram, IconMail, IconBrandGithub, IconBrandLinkedinFilled } from "@tabler/icons-react";
import { useState } from "react";

// Sheet
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"

export default function Home() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const navigationItems = [
    {
      title: "GitHub",
      icon: <IconBrandGithub className="h-full w-full" />,
      href: "https://github.com/Mr-Rahul-Paul",
    },
    {
      title: "LinkedIn",
      icon: <IconBrandLinkedinFilled className="h-full w-full" />,
      href: "https://www.linkedin.com/in/rahul-paul-0109bb219",
    },
    {
      title: "Projects",
      icon: <IconBriefcase className="h-full w-full" />,
      href: "https://github.com/Mr-Rahul-Paul?tab=repositories",
    },
    {
      title: "Instagram",
      icon: <IconBrandInstagram className="h-full w-full" />,
      href: "https://www.instagram.com/rahulpaul.3d",
    },
    {
      title: "Contact",
      icon: <IconMail className="h-full w-full" />,
      href: "#contact",
      onClick: () => setIsSheetOpen(true),
    },
  ];

  return (
    <>
      <FloatingDock items={navigationItems} />
      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Reach Out</SheetTitle>
            <SheetDescription>
              You can reach out to me via email or connect with me on social media.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
      <Main />
      
    </>
  );
}
