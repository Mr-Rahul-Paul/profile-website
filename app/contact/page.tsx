"use client";

import { PERSON } from "../../lib/data";

export default function ContactPage() {
  const jsonContent = `{
  "email"    : "${PERSON.email}",
  "github"   : "github.com/${PERSON.handle}",
  "linkedin" : "linkedin.com/in/${PERSON.linkedin}",
  "open_to"  : ["oss collab", "mentorship", "internships", "research"],
  "timezone" : "${PERSON.timezone}",
  "response" : "< 24hrs usually"
}`;

  return (
    <div className="max-w-[680px] mx-auto px-6 sm:px-8 animate-in fade-in slide-in-from-bottom-2 duration-300">
      <h1 className="text-xl text-text font-mono mb-8">~/contact</h1>

      <div className="border border-border rounded-[3px] bg-bg-raised p-5 font-mono text-[13px] text-muted overflow-x-auto whitespace-pre">
        <div className="mb-4">
          <span className="text-text">$</span> cat contact.json
          <br />
          {jsonContent}
        </div>
        <div className="mb-4">
          <span className="text-text">$</span> echo $STATUS
          <br />
          <span className="text-dim">{PERSON.status}</span>
        </div>
        <div>
          <span className="text-text">$</span> <span className="animate-blink inline-block w-2 h-4 bg-muted align-middle ml-1" />
        </div>
      </div>

      <div className="mt-8 flex gap-4 font-mono text-sm text-dim">
        <a href={`mailto:${PERSON.email}`} className="hover:text-text transition-colors">
          [send_email]
        </a>
        <a href={`https://github.com/${PERSON.handle}`} target="_blank" className="hover:text-text transition-colors">
          [github]
        </a>
        <a href={`https://linkedin.com/in/${PERSON.linkedin}`} target="_blank" className="hover:text-text transition-colors">
          [linkedin]
        </a>
      </div>
    </div>
  );
}
