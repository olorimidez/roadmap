"use client";
import { RiApps2Fill, RiCloseLargeFill } from "react-icons/ri";
import { useState, useRef, useEffect, } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();
  const isHome = pathname === "/";

  const toggleNavbar = () => setIsOpen((prev) => !prev);

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    }
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll",handleScroll)
  },[])

  return (
    <div
      className={`  h-24 fixed top-0 left-0 w-full z-50  flex items-center  ${
        isHome ? "bg-white" : "bg-[#f2f0ee]"}
        ${scrolled ? "filter drop-shadow-lg" : "filter drop-shadow-none"}
        transition-[filter] duration-300`}
    >
      <div className="w-full max-w-6xl mx-auto px-4" ref={menuRef}>

        {/* ================= MOBILE HEADER ================= */}
        <div className="relative z-60 flex justify-between items-center w-full mx-auto max-w-7xl px-4 md:hidden py-4">
          <div className="flex items-center">
            <Link href="/" className="px-1.5 text-gray-700 no-underline">Career RoadMap</Link>
          </div>

          <button onClick={toggleNavbar} className="relative z-40">
            {isOpen ? <RiCloseLargeFill size={22} className="text-green-950" /> : <RiApps2Fill size={22} className="text-green-900" />}
          </button>
        </div>

        {/* ================= DESKTOP HEADER ================= */}
        <div className="hidden md:flex justify-between items-center py-4 ">
          <div className="flex items-center">
            
            <Link href="/" className="px-1.5 text-green-950 no-underline">Career RoadMap</Link>
          </div>

          <div className="flex space-x-6 text-black">
            <Link href="/" className=" relative inline-block no-underline
              after:content-['']
              after:absolute after:left-0 after:-bottom-1
              after:h-[3px] after:w-[60%]
              after:bg-gray-700
              after:origin-left
              text-green-950">Home</Link>
            <Link href="/explore-careers" className=" relative inline-block no-underline
              after:content-['']
              after:absolute after:left-0 after:-bottom-1
              after:h-[3px] after:w-[60%]
               after:bg-green-950
               text-gray-700
              after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-500" >Explore Careers</Link>
            <Link href="/learning-hub" className=" relative inline-block no-underline
              after:content-['']
              after:absolute after:left-0 after:-bottom-1
              after:h-[3px] after:w-[60%]
              after:bg-green-950
               text-gray-700
              after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-500" >Learning Hub</Link>
            <Link href="/pricing" className=" relative inline-block no-underline
              after:content-['']
              after:absolute after:left-0 after:-bottom-1
              after:h-[3px] after:w-[60%]
              after:bg-green-950
               text-gray-700
              after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-500" >Pricing</Link>
            <Link href="/about" className=" relative inline-block no-underline
              after:content-['']
              after:absolute after:left-0 after:-bottom-1
              after:h-[3px] after:w-[60%]
              after:bg-green-950
               text-gray-700
              after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-500" >About</Link>  
          </div>

          <div>
            <Link href="/login" className="text-gray-700"> Log in</Link>
            <button href="/getstarted" className="bg-green-950 px-4 py-2 rounded-full cursor-pointer ml-2" >Get Started</button>
          </div>
        </div>
      </div>

     
     
{/* ================= MOBILE SLIDE MENU ================= */}
        <div
          className={`
            md:hidden
            fixed top-0 left-0 w-full h-screen
            z-50
            bg-white
            flex flex-col items-center justify-center
            gap-8
            text-black
            transform transition-transform duration-500 ease-out
            shadow-[0_10px_25px_rgba(0,0,0,0.25)]
            ${isOpen
              ? "translate-y-0"
              : "-translate-y-full pointer-events-none"}

          `}
        >
          {/* Navigation links */}
          <nav className="flex flex-col items-center gap-8">
            {[
              { label: "Home", href: "/" },
              { label: "Explore Careers", href: "/explore-careers" },
              { label: "Learning Hub", href: "/learning-hub" },
              { label: "Pricing", href: "/pricing" },
              { label: "About", href: "/about" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`
                  relative no-underline
                  after:content-['']
                  after:absolute after:left-0 after:-bottom-1
                  after:h-[3px] after:w-[60%]
                  after:bg-green-950
                  after:origin-left
                  after:transition-transform after:duration-500
                  ${
                    pathname === item.href
                      ? "text-green-950 after:scale-x-100"
                      : "text-gray-700 after:scale-x-0 hover:after:scale-x-100"
                  }
                `}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Authentication links */}
          <div className="flex flex-col items-center gap-5">
            <Link
              href="/login"
              onClick={() => setIsOpen(false)}
              className="text-gray-700 no-underline"
            >
              Log in
            </Link>

            <Link
              href="/getstarted"
              onClick={() => setIsOpen(false)}
              className="rounded-full bg-green-950 px-6 py-3 text-white no-underline"
            >
              Get Started
            </Link>
          </div>
        </div>

    </div>
  );
};

export default Navbar;
