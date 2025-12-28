import React from 'react';

export const TopBar: React.FC = () => {
  return (
    <div className="bg-[#faf4e4] text-brand-primary text-[10px] md:text-xs font-bold tracking-widest uppercase text-center py-2 px-4 border-b border-brand-primary/10 relative z-[60]">
      Additional fees may be included in orders outside India
    </div>
  );
};