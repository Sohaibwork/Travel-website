"use client";
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/constants";
import Button from "./Button";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={100} height={29} />
      </Link>

      {/* Desktop Nav Links */}
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="hover:font-bold transition-all hover:text-green-500 text-gray-50 flexCenter cursor-pointer pb-1.5 regular-16"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      {/* Login Button (Desktop) */}
      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
          full={false}
        />
      </div>

      {/* Mobile Menu Icon */}
      <Image
        className="inline-block cursor-pointer lg:hidden"
        src={"/menu.svg"}
        alt="menu"
        width={32}
        height={32}
        onClick={toggleMenu}
      />

      {/* Mobile Menu (Conditional Rendering) */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-20 right-0 bg-white shadow-lg rounded-lg p-6 w-full max-w-xs">
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                href={link.href}
                key={link.key}
                className="hover:font-bold transition-all hover:text-green-500 text-gray-900 flexCenter cursor-pointer pb-1.5 regular-16"
                onClick={toggleMenu} // Close menu when a link is clicked
              >
                {link.label}
              </Link>
            ))}
          </ul>
          <div className="mt-4">
            <Button
              type="button"
              title="Login"
              icon="/user.svg"
              variant="btn_dark_green"
              full={true}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
