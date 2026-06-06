export default function Statusbar() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 h-9 border-t border-neutral-800 bg-bg flex items-center justify-between px-4 sm:px-6 font-mono text-[10px] text-neutral-400 z-40">
      <div className="hidden sm:flex items-center gap-6">
        <span>[H] home</span>
        <span>[W] work</span>
        <span>[O] oss</span>
        <span>[S] stack</span>
        <span>[C] contact</span>
        <span>[G] github</span>
        <span>[⌘K] search</span>
      </div>
    </footer>
  );
}
