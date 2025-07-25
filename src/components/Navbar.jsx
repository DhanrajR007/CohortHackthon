import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // scroll check
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10); // 10px scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`w-full sticky top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/10 backdrop-blur-sm shadow-md"
          : "bg-transparent"
      }`}
    >
      <nav className="flex justify-between items-center w-full px-6 md:px-20 py-2">
        {/* Logo */}
        <div className="nav-logo">
          <NavLink to="/">
            {/* your SVG logo */}
            <svg
              className="w-[100px] md:w-[180px] h-auto"
              viewBox="0 0 320 120"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
            >
              <circle cx="60" cy="60" r="45" stroke="black" strokeWidth="4" fill="white" />
              <circle cx="60" cy="60" r="20" fill="black" />
              <rect x="90" y="25" width="8" height="20" fill="black" rx="2" />
              <text x="130" y="65" fontSize="24" fontWeight="bold" fill="black">TARUN KHIWAL</text>
              <text x="130" y="90" fontSize="14" fill="gray" letterSpacing="4">PHOTOGRAPHY</text>
            </svg>
          </NavLink>
        </div>

        {/* Links desktop */}
        <div className="hidden md:flex gap-10 text-black">
          <NavLink to="/work">Work</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden z-50">
          {isOpen ? (
            <X className="w-8 h-8" onClick={() => setIsOpen(false)} />
          ) : (
            <Menu className="w-8 h-8" onClick={() => setIsOpen(true)} />
          )}
        </div>

        {/* Mobile side menu */}
       {isOpen && (
  <div
    className="fixed top-0 right-0 h-full w-64 md:hidden bg-white shadow-lg z-40 transform transition-transform duration-300 translate-x-0"
  >
    <div className="flex flex-col gap-6 p-6 mt-16 text-xl">
      <NavLink to="/work" onClick={() => setIsOpen(false)}>Work</NavLink>
      <NavLink to="/about" onClick={() => setIsOpen(false)}>About</NavLink>
      <NavLink to="/contact" onClick={() => setIsOpen(false)}>Contact</NavLink>
    </div>
  </div>
)}
      </nav>
    </div>
  );
};

export default Navbar;
