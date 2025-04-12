import { Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/40 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} PortfolioSpot. All rights
              reserved.
            </p>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://github.com/abdelkarimain/PortfolioSpot"
              target="_blank"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github size={20} />
              <span className="sr-only">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
