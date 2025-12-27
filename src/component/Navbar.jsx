import { useState, useRef, useEffect } from "react";
import {
  FiSearch,
  FiShoppingCart,
  FiUser,
  FiMenu,
  FiX,
  FiChevronDown,
  FiSmartphone,
} from "react-icons/fi";
import {
  FaShippingFast,
  FaPhone,
  FaLessThan,
  FaGreaterThan,
} from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const navRef = useRef(null);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  // Close dropdown & search on outside click
  useEffect(() => {
    const handler = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenDropdown(null);
        setIsOpenSearch(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <>
      {/* ---------------- TOP BAR ---------------- */}
      <nav className="bg-green-600 text-white text-xs md:text-sm py-2">
        <div className="max-w-7xl mx-auto flex flex-wrap md:flex-nowrap items-center justify-between px-4 gap-2">
          <div className="flex items-center gap-2">
            <FaShippingFast className="text-lg" />
            <span className="font-medium">AVACOS Stores</span>
          </div>

          <div className="hidden md:flex items-center gap-10">
            <FaLessThan />
            <span>Free shipping on orders above ₹999</span>
            <FaGreaterThan />
          </div>

          <div className="flex items-center gap-2">
            <FiSmartphone />
            <a href="tel:+919839526180" className="hover:underline">
              +91 98395 26180
            </a>
          </div>
        </div>
      </nav>

      {/* ---------------- MAIN NAVBAR ---------------- */}
      <header ref={navRef} className="border-b bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
          {/* LOGO */}
          <h1 className="text-2xl font-bold">AVACOS</h1>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex gap-8 items-center text-sm">
            <Dropdown
              label="Shop By Category"
              open={openDropdown === "category"}
              onClick={() => toggleDropdown("category")}
            >
              <DropdownItem label="All Products" />
              <DropdownItem label="Fruits & Vegetables" />
              <DropdownItem label="Dairy Products" />
              <DropdownItem label="Snacks" />
            </Dropdown>

            <Dropdown
              label="Shop By Benefits"
              open={openDropdown === "benefits"}
              onClick={() => toggleDropdown("benefits")}
            >
              <DropdownItem label="Organic" />
              <DropdownItem label="Gluten Free" />
              <DropdownItem label="Sugar Free" />
            </Dropdown>

            <Dropdown
              label="More"
              open={openDropdown === "more"}
              onClick={() => toggleDropdown("more")}
            >
              <DropdownItem label="About Us" />
              <DropdownItem label="Contact" />
            </Dropdown>
          </nav>

          {/* ICONS */}
          <div className="flex items-center gap-4 text-xl">
            {/* Search */}
            <div className="relative">
              <button onClick={() => setIsOpenSearch((p) => !p)}>
                <FiSearch />
              </button>

              {isOpenSearch && (
                <div className="absolute right-0 mt-3 w-72 bg-white shadow-xl rounded-xl p-3 z-50 animate-scale-fade">
                  <input
                    autoFocus
                    type="text"
                    placeholder="Search products..."
                    className="w-full border rounded-full px-4 py-2 text-sm
                    focus:outline-none focus:ring-2 focus:ring-green-600"
                  />
                </div>
              )}
            </div>

            <FiShoppingCart className="cursor-pointer" />
            <FiUser className="cursor-pointer" />

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => {
                setMenuOpen(!menuOpen);
                setOpenDropdown(null);
              }}
            >
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {/* ---------------- MOBILE MENU ---------------- */}
        {menuOpen && (
          <div className="md:hidden border-t bg-white p-4 space-y-3 text-sm animate-fade-slide">
            <MobileDropdown title="Shop By Category">
              <p>All Products</p>
              <p>Fruits & Vegetables</p>
              <p>Dairy Products</p>
              <p>Snacks</p>
            </MobileDropdown>

            <MobileDropdown title="Shop By Benefits">
              <p>Organic</p>
              <p>Gluten Free</p>
              <p>Sugar Free</p>
            </MobileDropdown>

            <MobileDropdown title="More">
              <p>About Us</p>
              <p>Contact</p>
            </MobileDropdown>
          </div>
        )}
      </header>
    </>
  );
};

/* ---------------- COMPONENTS ---------------- */

const Dropdown = ({ label, open, onClick, children }) => (
  <div className="relative">
    <button
      onClick={onClick}
      className="flex items-center gap-1 hover:text-green-600 transition"
    >
      {label} <FiChevronDown />
    </button>

    {open && (
      <div className="absolute top-9 left-0 bg-white shadow-lg rounded-lg w-52 p-2 animate-fade-slide">
        {children}
      </div>
    )}
  </div>
);

const DropdownItem = ({ label }) => (
  <a
    href="#"
    className="block px-3 py-2 rounded hover:bg-green-50 hover:text-green-600 transition"
  >
    {label}
  </a>
);

const MobileDropdown = ({ title, children }) => (
  <details>
    <summary className="cursor-pointer font-medium">{title}</summary>
    <div className="ml-4 mt-2 space-y-2">{children}</div>
  </details>
);

export default Navbar;
