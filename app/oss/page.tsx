"use client";

import { OSS } from "../../lib/data";

export default function OssPage() {
  return (
    <div className="max-w-200 mx-auto px-6 sm:px-8 animate-in fade-in slide-in-from-bottom-2 duration-300">
      <h1 className="text-xl text-text font-mono mb-8">~/oss</h1>

      <div className="space-y-12 mb-16">
        {OSS.map((item, i) => (
          <div key={i} className="grid grid-cols-[12px_1fr] gap-6">
            <div className="pt-[9px]">
              <div className="w-2 h-2 rounded-full bg-white" />
            </div>

            <div>
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
                <h2 className="text-text font-medium">{item.name}</h2>
                <span className="font-mono text-xs text-dim mt-1 sm:mt-0">
                  {item.status}
                </span>
              </div>

              <div className="font-mono text-xs text-neutral-400 mb-3">
                {item.tags}
              </div>

              <div className="text-sm text-sub leading-relaxed whitespace-pre-wrap mb-3">
                {item.stats}
              </div>

              {item.mentors && (
                <div className="text-sm text-dim mb-4">
                  mentors: {item.mentors}
                </div>
              )}

              <div className="h-1 bg-bg-raised border border-border w-full max-w-[200px] rounded-full overflow-hidden">
                <div
                  className="h-full bg-muted"
                  style={{ width: `${item.progress}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
