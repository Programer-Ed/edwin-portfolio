import React from 'react';

interface SectionHeadingProps {
  children: React.ReactNode;
  overlay?: boolean;
  className?: string;
}

const SectionHeading = ({ children, overlay, className }: SectionHeadingProps) => (
  <h2 className={
    overlay 
      ? `font-bold text-zinc-500 dark:text-zinc-100 font-mplus opacity-20 dark:opacity-10 ${className}`
      : `my-2 text-2xl md:text-3xl font-bold font-mplus text-zinc-900 dark:text-zinc-50 transition duration-500 ease-in-out ${className} text-center`
  }>
    {children}
  </h2>
);

export default SectionHeading;