import React from 'react';

export const TopBar: React.FC = () => {
  return (
    <div className="bg-brand-primary text-white text-[10px] md:text-xs font-bold tracking-widest uppercase text-center py-2 px-4 border-b border-white/10 relative z-[60]">
      Additional fees may be included in orders outside India
    </div>
  );
};