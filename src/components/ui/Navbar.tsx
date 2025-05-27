"use client";
import { useTheme } from "@/context/ThemeContext";
import { cn } from "@/lib/utils";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import Image from "next/image";

export function Navbar(){
	const { theme, toggleTheme } = useTheme();

	// Simple icon components
	const SunIcon = ({ className }: { className?: string }) => (
	<svg 
		xmlns="http://www.w3.org/2000/svg" 
		fill="none" 
		viewBox="0 0 24 24" 
		strokeWidth={1.5} 
		stroke="currentColor" 
		className={className}
	>
		<path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
	</svg>
	);

	const MoonIcon = ({ className }: { className?: string }) => (
	<svg 
		xmlns="http://www.w3.org/2000/svg" 
		fill="none" 
		viewBox="0 0 24 24" 
		strokeWidth={1.5} 
		stroke="currentColor" 
		className={className}
	>
		<path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
	</svg>
	);
  	return (
		
    <nav className="flex w-full items-center justify-between border-t border-b border-neutral-200 px-4 py-4 dark:border-neutral-800">
      <GlowingEffect
          blur={0}
          borderWidth={3}
          spread={80}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
	  <div className="flex items-center gap-2">
        <Image src="https://arcafin.fr/content/arca.png" width={50} height={50} alt="Arca Logo" />
        <h1 className="text-base font-bold md:text-2xl">Arca</h1>
      </div>
	  <button 
          onClick={toggleTheme}
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-full transition-colors",
            "bg-neutral-100 text-neutral-700 hover:bg-neutral-200",
            "dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700"
          )}
          aria-label="Toggle theme"
        >
          {theme === "light" ? (
            <MoonIcon className="h-5 w-5" />
          ) : (
            <SunIcon className="h-5 w-5" />
          )}
        </button>
      <button className="w-24 transform rounded-lg bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 md:w-32 dark:bg-white dark:text-black dark:hover:bg-gray-200">
        Login
      </button>
    </nav>
  );
};