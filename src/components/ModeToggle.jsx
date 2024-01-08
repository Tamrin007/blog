"use client";
import React, { useState } from "react";
import { Button } from "@nextui-org/react";
import { Sun, MoonStar } from "lucide-react";

export function ModeToggle() {
  const [mode, setMode] = useState("light");

  const initialTheme = (() => {
    if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {
      return localStorage.getItem("theme");
    }
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  })();

  if (initialTheme === "light") {
    document.documentElement.classList.remove("dark");
  } else {
    document.documentElement.classList.add("dark");
  }

  window.localStorage.setItem("theme", initialTheme);

  const handleTogglePress = () => {
    const element = document.documentElement;
    element.classList.toggle("dark");

    const isDark = element.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    setMode(isDark ? "dark" : "light");
  };

  return (
    <div>
      <Button
        isIconOnly
        variant="light"
        className={mode === "light" ? "" : "hidden"}
        onPress={handleTogglePress}
      >
        <Sun />
      </Button>
      <Button
        isIconOnly
        variant="light"
        className={mode === "dark" ? "" : "hidden"}
        onPress={handleTogglePress}
      >
        <MoonStar />
      </Button>
    </div>
  );
}
