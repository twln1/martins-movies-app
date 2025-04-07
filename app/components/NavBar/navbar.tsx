"use client";
import { useEffect, useState } from "react";
import Navlink from "@/app/components/NavBar/NavLink";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";

export default function NavBar() {
  const [navIsOpen, setNavIsOpen] = useState(false);

  const navLinks = [
    { page: "/", label: "Home" },
    { page: "#", label: "Pages" },
    { page: "#", label: "Movies & TV Shows" },
    { page: "#", label: "Blog" },
    { page: "#", label: "Contact Us" },
  ];

  useEffect(() => {
    if (navIsOpen) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "auto";
    }
  }, [navIsOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setNavIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="flex flex-row items-center justify-between p-4 relative h-16 z-50">
      <div>
        <Link href="/">Martin&apos;s Movies</Link>
      </div>

      <button
        className={`${navIsOpen ? "absolute left-0 top-0 z-10" : "lg:hidden"}`}
        onClick={() => setNavIsOpen(!navIsOpen)}
      >
        <div className="bg-white p-4">
          {navIsOpen ? <CloseIcon sx={{ fontSize: 40 }} /> : <MenuIcon sx={{ fontSize: 40 }} />}
        </div>
      </button>

      <div
        className={`${
          navIsOpen
            ? "fixed top-0 w-4/5 right-0 bottom-0 text-white bg-[#2a2a2a] z-50 space-y-6 flex-col pt-4"
            : "hidden"
        } flex flex-col justify-start items-center lg:static lg:flex lg:flex-row lg:items-center space-x-8 md:space-x-12`}
      >
        <div className="flex flex-col lg:flex-row w-full lg:space-x-8 lg:space-y-0">
          <div className="text-xl text-center sm:hidden block border-b sm:border-0 border-b-[rgba(255,255,255,0.33)] pb-2">
            Menu
          </div>
          {navLinks.map((link, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row text-left sm:border-0 py-4 pl-2 flex-grow sm:h-auto border-b border-b-[rgba(255,255,255,0.33)]"
            >
              <Navlink page={link.page} label={link.label} />
            </div>
          ))}
        </div>
      </div>
      <div className="hidden sm:block z-10">
        <Button href="#" color="secondary" variant="contained" disableElevation>
          Login
        </Button>
      </div>
    </nav>
  );
}
