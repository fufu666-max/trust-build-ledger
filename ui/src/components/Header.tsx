import { Logo } from "./Logo";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b",
      isScrolled 
        ? "bg-background/90 backdrop-blur-xl border-border py-2 shadow-sm" 
        : "bg-transparent border-transparent py-4"
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="hover:scale-105 transition-transform duration-300">
            <Logo />
          </div>
          <nav className="hidden md:flex items-center gap-8">
            {[
              { name: "Platform", href: "#" },
              { name: "Workflow", href: "#workflow" },
              { name: "Trades", href: "#trades" },
              { name: "Security", href: "#security" },
              { name: "FAQ", href: "#faq" }
            ].map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-all relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-4 hover:scale-[1.02] transition-transform">
            <ConnectButton />
          </div>
        </div>
      </div>
    </header>
  );
};
