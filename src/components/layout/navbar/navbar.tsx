"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import LifelineLogo from "../../../assets/icons/logo.png";
import { Button } from "@/components/ui/button";
import TopBar from "./topBar";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const links = [
    { title: "Home", href: "/" },
    { title: "Find Care", href: "/find-care" },
    { title: "Services", href: "/services" },
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-background backdrop-blur shadow-lg">
      <TopBar />

      <nav className="section-padding-x py-1 relative flex items-center justify-between">
        {/* md device */}
        <div className="flex items-center justify-between w-full lg:hidden">
          <div className="flex items-center gap-2">
            <Image
              src={LifelineLogo}
              width={50}
              height={40}
              alt="Lifeline Logo"
            />
            <div>
              <h2>Lifeline</h2>
              <p>Hospital</p>
            </div>
          </div>

          <button
            onClick={toggleMobileMenu}
            aria-label="Toggle Menu"
            className="text-foreground"
          >
            {isMobileMenuOpen ? (
              <X className="w-7 h-7" />
            ) : (
              <Menu className="w-7 h-7" />
            )}
          </button>
        </div>

        {/* Desktop*/}
        <div className="hidden lg:flex items-center gap-4 w-full justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3 select-none">
            <Image
              src={LifelineLogo}
              width={60}
              height={48}
              alt="Lifeline Logo"
            />
            <div>
              <h2>Lifeline</h2>
              <h3>Hospital</h3>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="flex gap-6 items-center font-medium hover:font-bold text-[20px] text-foreground">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition ${
                  isActive(link.href)
                    ? "text-success font-bold border-b-2"
                    : "hover:text-success"
                }`}
              >
                {link.title}
              </Link>
            ))}
          </div>

          {/* Login Button Desktop */}
          <Link href="/login">
            <Button className="w-36 mr-14 text-xl font-semibold h-12 bg-foreground text-background hover:bg-foreground/90">
              Login
            </Button>
          </Link>
        </div>
      </nav>

      {/*Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden w-full bg-background shadow-lg border-t">
          <ul className="flex flex-col p-4 space-y-2">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={toggleMobileMenu}
                  className={`block p-2 rounded-md transition ${
                    isActive(link.href)
                      ? " text-success font-semibold"
                      : "text-foreground hover:bg-success/20"
                  }`}
                >
                  {link.title}
                </Link>
              </li>
            ))}

            {/* Login inside mobile */}
            <Link href="/login">
              <Button className="w-full text-xl font-semibold h-12 bg-foreground text-background hover:bg-foreground/90">
                Login
              </Button>
            </Link>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
