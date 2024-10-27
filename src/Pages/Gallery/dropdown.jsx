import { useState, useEffect, useRef } from "react";

export default function TecnoesisButton() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }

    function handleScroll() {
      setDropdownOpen(false);
    }

    // Add event listeners
    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listeners on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative inline-block z-50  pl-64 ml-24  " ref={dropdownRef}>
      <button
        onClick={() => setDropdownOpen((prev) => !prev)}
        className="mt-5 relative inline-flex h-10 active:scale-95 transition overflow-hidden rounded-lg p-[1px] focus:outline-none group"
      >
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%)] transition-all duration-300 ease-out group-hover:inset-0"></span>
        <span className="font-spaced inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-xl font-medium text-white backdrop-blur-3xl gap-2 group-hover:bg-transparent">
          more
        </span>
      </button>

      {/* Dropdown Content */}
      {dropdownOpen && (
        <div className="absolute top-full mt-1 w-48 bg-slate-900 rounded-lg shadow-lg z-50 ">
          <a href="#subsection1" className="block px-4 py-2 text-white hover:bg-slate-800 cursor-pointer font-spaced">
            2023
          </a>
          <a href="#subsection2" className="block px-4 py-2 text-white hover:bg-slate-800 cursor-pointer font-spaced">
           2024
          </a>
        </div>
      )}
    </div>
  );
}
