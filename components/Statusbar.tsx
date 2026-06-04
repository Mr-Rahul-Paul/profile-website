export default function Statusbar() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 h-9 border-t border-border bg-bg flex items-center justify-between px-4 sm:px-6 font-mono text-[10px] text-muted z-40">
      <div className="hidden sm:flex items-center gap-6">
        <span>[H] home</span>
        <span>[W] work</span>
        <span>[O] oss</span>
        <span>[S] stack</span>
        <span>[C] contact</span>
        <span>[G] github</span>
        <span>[⌘K] search</span>
      </div>
      <div className="flex">
        <span>rahul@arch:~$ <span className="animate-blink inline-block w-1.5 h-3 bg-muted align-middle ml-1" /></span>
      </div>
    </footer>
  );
}
