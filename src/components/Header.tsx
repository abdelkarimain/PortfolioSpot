import { LogoIcon, MoonIcon } from "./icons";

export default function Header() {
  const navigation = [
    { name: "Docs", href: "/docs" },
    { name: "How to contribute", href: "/how-to-contribute" },
  ];
  return (
    <header className="bg-slate-900">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between lg:justify-center lg:gap-24 border-b border-slate-900 lg:border-none">
          <div className="flex items-center">
            <a
              href="#"
              className="px-4 text-orange-400 flex justify-center items-center gap-2"
            >
              <LogoIcon className="h-10 w-auto" />
              <span className="text-2xl font-bold">Portfolio Spot</span>
            </a>
          </div>
          <div className="hidden lg:flex items-center justify-center gap-10">
            {navigation.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-base font-medium text-white hover:text-orange-400"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="ml-10 space-x-4">
            <button className="py-2 px-4">
              <MoonIcon className="h-6 w-6 text-orange-400" />
            </button>
          </div>
        </div>
        <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
          {navigation.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-base font-medium text-white hover:text-orange-400"
            >
              {link.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
