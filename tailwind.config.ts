import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Light Theme
        light: {
          background: "#FFFFFF",
          foreground: "#111827",
          card: "#FFFFFF",
          "card-foreground": "#111827",
          popover: "#FFFFFF",
          "popover-foreground": "#111827",
          primary: "#6366F1",
          "primary-foreground": "#FFFFFF",
          secondary: "#F3F4F6",
          "secondary-foreground": "#1F2937",
          muted: "#F3F4F6",
          "muted-foreground": "#6B7280",
          accent: "#F3F4F6",
          "accent-foreground": "#1F2937",
          destructive: "#EF4444",
          "destructive-foreground": "#FFFFFF",
          border: "#E5E7EB",
          input: "#E5E7EB",
          ring: "#6366F1",
        },
        // Dark Theme
        dark: {
          background: "#111827",
          foreground: "#F9FAFB",
          card: "#1F2937",
          "card-foreground": "#F9FAFB",
          popover: "#1F2937",
          "popover-foreground": "#F9FAFB",
          primary: "#818CF8",
          "primary-foreground": "#111827",
          secondary: "#374151",
          "secondary-foreground": "#F9FAFB",
          muted: "#374151",
          "muted-foreground": "#9CA3AF",
          accent: "#374151",
          "accent-foreground": "#F9FAFB",
          destructive: "#F87171",
          "destructive-foreground": "#111827",
          border: "#374151",
          input: "#374151",
          ring: "#818CF8",
        },
      },
      borderRadius: {
        lg: `0.5rem`,
        md: `calc(0.5rem - 2px)`,
        sm: `calc(0.5rem - 4px)`,
      },
    },
  },
  plugins: [],
};

export default config;