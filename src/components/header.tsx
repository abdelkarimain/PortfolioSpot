"use client";

import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import MobileNav from "./mobile-nav";
import NavItem from "./nav-item";

export function Header() {
  const navItems = [
    { name: "Submit", path: "/submit-portfolio" },
    { name: "About", path: "/about" },
  ];

  return (
    <header className="border-b border-border/40 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link
            href="/"
            className="text-xl font-bold text-primary"
            data-text="🎯PSpot"
          >
            🎯PSpot
          </Link>
          <div className="flex items-center space-x-8">
            <ul className="hidden md:flex items-center space-x-4">
              {navItems.map((item) => (
                <li key={item.path}>
                  <NavItem name={item.name} path={item.path} />
                </li>
              ))}
            </ul>

            <MobileNav />
            <ModeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}
