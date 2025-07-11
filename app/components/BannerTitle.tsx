import React from "react";

interface BannerTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function BannerTitle({ children, className = "" }: BannerTitleProps) {
  return (
    <div className={`w-full flex justify-center my-8 shadow-lg bg-black dark:bg-white h-full items-center ${className}`}>
      <h2
        className="text-3xl md:text-4xl font-extrabold text-center text-primary px-4 py-2 bg-black dark:bg-white animate-shake"
        style={{
          animation: "shake 4s cubic-bezier(.36,.07,.19,.97) infinite"
        }}
      >
        {children}
      </h2>
      <style>{`
        @keyframes shake {
          10%, 90% { transform: translateX(-1px); }
          20%, 80% { transform: translateX(2px); }
          30%, 50%, 70% { transform: translateX(-4px); }
          40%, 60% { transform: translateX(4px); }
        }
      `}</style>
    </div>
  );
}
