import React from 'react';
import { skillsData } from '@/data/portfolio';

export default function SkillsMarquee() {
  return (
    <div className="w-full overflow-hidden py-10 relative">
      {/* Fade edges */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

      <div className="flex whitespace-nowrap animate-[marquee_25s_linear_infinite]">
        {[...skillsData, ...skillsData, ...skillsData].map((skill, index) => (
          <div
            key={index}
            className="mx-4 px-6 py-3 rounded-full glass border border-white/5 text-lg font-medium text-gray-300 inline-block"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}
