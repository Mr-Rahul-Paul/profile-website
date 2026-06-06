"use client";

import { PERSON } from "../../lib/data";

export default function ContactPage() {
  return (
    <div className="max-w-[680px] mx-auto px-6 sm:px-8 animate-in fade-in slide-in-from-bottom-2 duration-300">
      <h1 className="text-xl text-text font-mono mb-8">~/contact</h1>

      <div className="border border-neutral-800 rounded-[3px] bg-bg-raised p-5 font-mono text-[13px] text-neutral-400 overflow-x-auto whitespace-pre">
        <div className="mb-4">
          <span className="text-text">$</span> cat contact.json
          <br />
          {"{\n"}
          {'  "email"    : "'}
          <a
            href={`mailto:${PERSON.email}`}
            className="hover:text-text focus-visible:text-text focus-visible:outline-none"
          >
            {PERSON.email}
          </a>
          {'",\n'}
          {'  "github"   : "'}
          <a
            href={`https://github.com/${PERSON.handle}`}
            target="_blank"
            rel="noreferrer"
            className="hover:text-text focus-visible:text-text focus-visible:outline-none"
          >
            github.com/{PERSON.handle}
          </a>
          {'",\n'}
          {'  "linkedin" : "'}
          <a
            href={`https://linkedin.com/in/${PERSON.linkedin}`}
            target="_blank"
            rel="noreferrer"
            className="hover:text-text focus-visible:text-text focus-visible:outline-none"
          >
            linkedin.com/in/{PERSON.linkedin}
          </a>
          {'",\n'}
          {
            '  "open_to"  : ["oss collab", "mentorship", "internships", "research"],\n'
          }
          {`  "timezone" : "${PERSON.timezone}",\n}`}
        </div>
        <div className="mb-4">
          <span className="text-text">$</span> echo $STATUS
          <br />
          <span className="text-sub">{PERSON.status}</span>
        </div>
      </div>

      <div className="mt-8 flex gap-4 font-mono text-sm text-neutral-400">
        <a
          href={`mailto:${PERSON.email}`}
          className="hover:text-text focus-visible:text-text focus-visible:outline-none"
        >
          [send_email]
        </a>
        <a
          href={`https://github.com/${PERSON.handle}`}
          target="_blank"
          rel="noreferrer"
          className="hover:text-text focus-visible:text-text focus-visible:outline-none"
        >
          [github]
        </a>
        <a
          href={`https://linkedin.com/in/${PERSON.linkedin}`}
          target="_blank"
          rel="noreferrer"
          className="hover:text-text focus-visible:text-text focus-visible:outline-none"
        >
          [linkedin]
        </a>
      </div>
    </div>
  );
}
