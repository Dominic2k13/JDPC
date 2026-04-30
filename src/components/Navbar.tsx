import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import jdpcLogo from "../assets/jdpc-logo.jpeg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const NAV_LINKS = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Aims", path: "/aims" },
    { label: "Management", path: "/management" },
    { label: "Organogram", path: "/organogram" },
    { label: "Projects", path: "/projects" },
    { label: "Gallery", path: "/gallery" },
    { label: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3">
            <img 
              src={jdpcLogo} 
              alt="JDPC Enugu Logo" 
              className="w-14 h-14 object-contain rounded-full" 
            />
            <div className="hidden sm:block leading-tight">
              <p className="text-primary font-bold text-sm uppercase tracking-wide">Justice, Development and</p>
              <p className="text-primary font-bold text-sm uppercase tracking-wide">Peace/Caritas Commission</p>
              <p className="text-secondary font-bold text-xs uppercase tracking-wide">(JDPC) Enugu Diocese</p>
            </div>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-5 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive(link.path)
                    ? "text-primary bg-primary/10"
                    : "text-gray-700 hover:text-primary hover:bg-yellow-500"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="lg:hidden border-t border-gray-100 py-4 bg-white">
            <div className="flex flex-col space-y-1 px-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                    isActive(link.path)
                      ? "text-primary bg-primary/10"
                      : "text-gray-700 hover:bg-yellow-500"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}