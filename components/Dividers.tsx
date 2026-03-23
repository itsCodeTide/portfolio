import React from 'react';

export const LineDivider: React.FC = () => (
  <div className="w-full flex items-center justify-center py-4 md:py-8 opacity-60">
    <div className="w-full max-w-3xl flex items-center gap-4">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary-500/50"></div>
      <div className="w-2 h-2 rounded-full bg-primary-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
      <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary-500/50"></div>
    </div>
  </div>
);

export const DotsDivider: React.FC = () => (
  <div className="w-full flex items-center justify-center py-4 md:py-8 gap-4 opacity-40">
    <div className="w-1.5 h-1.5 rounded-full bg-slate-600"></div>
    <div className="w-2 h-2 rounded-full bg-primary-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></div>
    <div className="w-1.5 h-1.5 rounded-full bg-slate-600"></div>
  </div>
);

export const CodeDivider: React.FC = () => (
  <div className="w-full flex items-center justify-center py-4 md:py-8 opacity-30">
    <span className="font-mono text-xl tracking-[0.5em] text-slate-500">///</span>
  </div>
);

export const TechDivider: React.FC = () => (
  <div className="w-full flex items-center justify-center py-4 md:py-8 opacity-50">
    <div className="flex items-center gap-2">
      <div className="w-12 h-px bg-slate-700"></div>
      <div className="w-1 h-1 bg-primary-500 rotate-45"></div>
      <div className="w-1 h-1 bg-primary-500 rotate-45"></div>
      <div className="w-12 h-px bg-slate-700"></div>
    </div>
  </div>
);
