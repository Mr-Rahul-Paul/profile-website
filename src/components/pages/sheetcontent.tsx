"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import { SheetFooter } from "../ui/sheet";
import {
  IconBrandX,
  IconMail,
  IconBrandGithub,
  IconBrandLinkedinFilled,
  IconExternalLink,
} from "@tabler/icons-react";

export default function Sheetcontent() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("rahulpaul.dev@gmail.com");
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch (err) {
      console.error("Failed to copy email: ", err);
    }
  };

  const contactMethods = [
    {
      title: "Email",
      value: "rahulpaul.dev@gmail.com",
      icon: <IconMail className="w-5 h-5" />,
      action: handleCopyEmail,
      actionText: copiedEmail ? "Copied!" : "Copy Email",
      description: "Direct line for collaboration and opportunities",
    },
    {
      title: "LinkedIn",
      value: "Connect professionally",
      icon: <IconBrandLinkedinFilled className="w-5 h-5 text-blue-500" />,
      action: () =>
        window.open(
          "https://www.linkedin.com/in/rahul-paul-0109bb219",
          "_blank"
        ),
      actionText: "Connect",
      description: "Professional network and career updates",
    },
    {
      title: "X (Twitter)",
      value: "Follow for updates",
      icon: <IconBrandX className="w-5 h-5" />,
      action: () => window.open("https://x.com/_Rahul_Paul", "_blank"),
      actionText: "Follow",
      description: "Tech thoughts and quick updates",
    },
    {
      title: "GitHub",
      value: "View projects",
      icon: <IconBrandGithub className="w-5 h-5" />,
      action: () => window.open("https://github.com/Mr-Rahul-Paul", "_blank"),
      actionText: "Visit",
      description: "Code repositories and open source work",
    },
  ];

  return (
    <div className="flex-1 px-2">
      <div className="space-y-2">
        {contactMethods.map((method, index) => (
          <div
            key={index}
            className="hover:bg-[#1a1a1a] transition-all duration-200 cursor-pointer p-2 rounded-lg"
            onClick={method.action}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-3 flex-1">
                <div className="flex-shrink-0 p-2 bg-[#222] rounded-lg group-hover:bg-[#333] transition-colors">
                  {method.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-white text-sm">
                    {method.title}
                  </h3>
                  <p className="text-gray-400 text-sm mt-1 break-all">
                    {method.value}
                  </p>
                  <p className="text-gray-500 text-xs mt-2">
                    {method.description}
                  </p>
                </div>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="ml-2 flex-shrink-0 text-xs h-8 px-3"
                onClick={(e) => {
                  e.stopPropagation();
                  method.action();
                }}
              >
                {method.actionText}
                <IconExternalLink className="w-3 h-3 ml-1" />
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Action Section */}
      <div className="mt-8 mx-2 p-4 bg-[#0a0a0a] border border-[#333] rounded-lg">
        <h3 className="text-sm font-semibold text-white mb-2">Quick Actions</h3>
        <div className="grid grid-cols-2 gap-2">
          <Button
            variant="outline"
            size="sm"
            className="text-xs"
            onClick={() =>
              window.open("mailto:rahulpaul.dev@gmail.com", "_blank")
            }
          >
            <IconMail className="w-3 h-3 mr-1" />
            Email
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="text-xs"
            onClick={() => window.open("https://cal.com/rahul-paul", "_blank")}
          >
            <IconExternalLink className="w-3 h-3 mr-1" />
            Schedule
          </Button>
        </div>
      </div>

      <SheetFooter className="border-t border-[#333] pt-4 mt-8">
        <div className="w-full text-center">
          <p className="text-xs text-gray-500">
            Always open to interesting conversations and opportunities
          </p>
        </div>
      </SheetFooter>
    </div>
  );
}
