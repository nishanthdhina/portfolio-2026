import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const updateScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0.95)", "rgba(255, 255, 255, 0.95)"]
  );

  return (
    <motion.nav
      style={{ backgroundColor }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md shadow-sm ${
        isScrolled ? "shadow-lg py-3" : "py-6"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="flex items-center justify-between">
          {/* Logo/Name */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <Link to="/" className="group relative">
              <h1
                className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-900"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Nishanth Dhina
              </h1>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:flex items-center gap-8"
          >
            <NavLink href="#about">About</NavLink>
            <NavLink href="/life">Life</NavLink>
            <CTAButton href="https://app.provocis.com" />
          </motion.div>

          {/* Mobile Menu Button */}
          <MobileMenu />
        </div>
      </div>
    </motion.nav>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const isExternal = href.startsWith('#');

  if (isExternal) {
    return (
      <a
        href={href}
        className="group relative text-base font-medium text-zinc-700 transition-colors hover:text-zinc-900"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        {children}
        <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-zinc-900 transition-all duration-300 group-hover:w-full" />
      </a>
    );
  }

  return (
    <Link
      to={href}
      className="group relative text-base font-medium text-zinc-700 transition-colors hover:text-zinc-900"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {children}
      <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-zinc-900 transition-all duration-300 group-hover:w-full" />
    </Link>
  );
};

const CTAButton = ({ href }: { href: string }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-10 items-center gap-2 rounded-full bg-neutral-200 pl-3 pr-4 transition-all duration-300 ease-in-out hover:bg-black hover:pl-2 hover:text-white active:bg-neutral-700"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <span className="rounded-full bg-black p-1 text-sm transition-colors duration-300 group-hover:bg-white">
        <FiArrowRight className="-translate-x-[200%] text-[0px] transition-all duration-300 group-hover:translate-x-0 group-hover:text-lg group-hover:text-black group-active:-rotate-45" />
      </span>
      <span>Try ProVocis</span>
    </a>
  );
};

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-col gap-1.5 p-2"
        aria-label="Toggle menu"
      >
        <motion.span
          animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
          className="h-0.5 w-6 bg-zinc-900 transition-all"
        />
        <motion.span
          animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
          className="h-0.5 w-6 bg-zinc-900 transition-all"
        />
        <motion.span
          animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
          className="h-0.5 w-6 bg-zinc-900 transition-all"
        />
      </button>

      {/* Mobile Menu Dropdown */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={
          isOpen
            ? { opacity: 1, y: 0, display: "block" }
            : { opacity: 0, y: -20, transitionEnd: { display: "none" } }
        }
        transition={{ duration: 0.2 }}
        className="absolute left-0 right-0 top-full mt-2 bg-white shadow-xl backdrop-blur-md"
      >
        <div className="flex flex-col gap-4 p-6">
          <a
            href="#about"
            onClick={() => setIsOpen(false)}
            className="text-lg font-medium text-zinc-700 hover:text-zinc-900"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            About
          </a>
          <Link
            to="/life"
            onClick={() => setIsOpen(false)}
            className="text-lg font-medium text-zinc-700 hover:text-zinc-900"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Life
          </Link>
          <a
            href="https://provocis.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 items-center gap-2 rounded-full bg-neutral-200 pl-3 pr-4 transition-all duration-300 ease-in-out hover:bg-black hover:pl-2 hover:text-white active:bg-neutral-700"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            <span className="rounded-full bg-black p-1 text-sm transition-colors duration-300">
              <FiArrowRight className="text-white" />
            </span>
            <span>Try ProVocis</span>
          </a>
        </div>
      </motion.div>
    </div>
  );
};
