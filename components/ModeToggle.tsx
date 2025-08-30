"use client";
import React from "react";
import { Button } from "./ui/button";
import { SunIcon, MoonIcon } from "lucide-react";
import { useTheme } from "next-themes";

export default function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="relative"
    >
      <span className="sr-only">Toggle theme</span>

      {/* Container to overlap icons */}
      <span className="absolute inset-0 flex items-center justify-center">
        <SunIcon
          className="h-[1.2rem] w-[1.2rem] transition-all duration-300 
          rotate-0 scale-100 dark:-rotate-90 dark:scale-0"
        />
        <MoonIcon
          className="absolute h-[1.2rem] w-[1.2rem] transition-all duration-300 
          rotate-90 scale-0 dark:rotate-0 dark:scale-100"
        />
      </span>
    </Button>
  );
}
