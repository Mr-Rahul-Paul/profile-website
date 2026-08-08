import { STACK } from "../../lib/data";

export default function StackPage() {
  return (
    <div className="max-w-170 mx-auto px-6 sm:px-8 animate-in fade-in slide-in-from-bottom-2 duration-300">
      <h1 className="text-xl text-text font-mono mb-8">~/stack</h1>

      <div className="border border-neutral-800 rounded-[3px] bg-bg-raised p-5 font-mono text-[13px] text-neutral-400 mb-12 overflow-x-auto whitespace-pre">
        <span className="text-text">rahul@arch</span> ~ $ neofetch --mini{"\n"}
        {"OS         "}
        <span className="text-sub">Arch Linux</span>
        {"\n"}
        {"WM         "}
        <span className="text-sub">Hyprland (Omarchy)</span>
        {"\n"}
        {"Editor     "}
        <span className="text-sub">Neovim</span>
        {"\n"}
        {"Terminal   "}
        <span className="text-sub">foot</span>
        {"\n"}
        {"Shell      "}
        <span className="text-sub">zsh + starship</span>
        {"\n"}
        {"Uptime     "}
        <span className="text-sub">since Hacktoberfest 2025</span>
      </div>

      <section className="mb-12">
        <h2 className="font-mono text-xs text-dim mb-5 pb-3 border-b border-border uppercase tracking-widest">
          languages
        </h2>
        <ul className="space-y-4">
          {STACK.languages.map((item) => (
            <li key={item.lang} className="grid grid-cols-[5.5rem_1fr_auto] sm:grid-cols-[6rem_1fr_auto] gap-3 sm:gap-4 items-center">
              <span className="font-mono text-sm text-text">{item.lang}</span>
              <div className="h-1.5 bg-bg-raised border border-border rounded-full overflow-hidden">
                <div
                  className="h-full bg-muted"
                  style={{ width: `${item.percent}%` }}
                />
              </div>
              <span className="font-mono text-[11px] text-dim tabular-nums shrink-0 hidden sm:inline">
                {item.context}
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-4 font-mono text-[11px] text-dim sm:hidden">
          {STACK.languages.map((item) => `${item.lang}: ${item.context}`).join(
            " · "
          )}
        </p>
      </section>

      <div className="space-y-8">
        {STACK.groups.map((group) => (
          <section key={group.label}>
            <h2 className="font-mono text-xs text-dim mb-3 pb-3 border-b border-border uppercase tracking-widest">
              {group.label}
            </h2>
            <p className="font-mono text-sm text-body leading-relaxed">
              {group.items.join(" · ")}
            </p>
          </section>
        ))}
      </div>
    </div>
  );
}
