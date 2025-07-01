"use client";
import Main from "@/components/pages/main";
import { FloatingDock } from "@/components/ui/floating-dock";
import Sheetcontent from "@/components/pages/sheetcontent";
import LinksSheet from "@/components/pages/links-sheet";
import {
  IconBrandX,
  IconMail,
  IconBrandGithub,
  IconBrandLinkedinFilled,
  IconLink,
} from "@tabler/icons-react";
import { useState } from "react";

// Sheet
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

export default function Home() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isLinksSheetOpen, setIsLinksSheetOpen] = useState(false);

  const navigationItems = [
    {
      title: "Projects",
      icon: <IconLink className="h-full w-full text-blue-400" />,
      href: "",
      onClick: () => setIsLinksSheetOpen(true),
    },
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
      title: "X.com",
      icon: <IconBrandX className="h-full w-full" />,
      href: "https://x.com/_Rahul_Paul",
    },
    {
      title: "Contact",
      icon: <IconMail className="h-full w-full text-yellow-400" />,
      href: "",
      onClick: () => setIsSheetOpen(true),
    },
  ];

  return (
    <>
      <FloatingDock items={navigationItems} />
      {/* Contact Sheet - Left Side */}
      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetContent className="w-full sm:w-[400px] md:w-[450px]">
          <SheetHeader className="space-y-2">
            <SheetTitle className="text-3xl">Reach Out</SheetTitle>
            <SheetDescription className="text-base">
              Let&apos;s connect! Choose your preferred way to get in touch.
            </SheetDescription>
          </SheetHeader>

          <Sheetcontent />
        </SheetContent>
      </Sheet>

      {/* project sheet */}
      <Sheet open={isLinksSheetOpen} onOpenChange={setIsLinksSheetOpen}>
        <SheetContent side="left" className="w-full sm:w-[400px] md:w-[450px]">
          <SheetHeader className="space-y-2">
            <SheetTitle className="text-3xl">Quick Links</SheetTitle>
            <SheetDescription className="text-base">
              All my important links and resources in one place.
            </SheetDescription>
          </SheetHeader>

          <LinksSheet />
        </SheetContent>
      </Sheet>

      <Main />
    </>
  );
}
