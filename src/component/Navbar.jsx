import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FiSearch,
  FiShoppingCart,
  FiUser,
  FiMenu,
  FiX,
  FiChevronDown,
  FiSmartphone,
} from "react-icons/fi";
import { FaShippingFast } from "react-icons/fa";

/* ---------- PROMO TEXT ---------- */
const promoTexts = [
  "Free Shipping above ₹999 🚚",
  "100% Natural Products 🌿",
  "Fast Delivery Across India 🇮🇳",
  "Quality You Can Trust ⭐",
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const [promoIndex, setPromoIndex] = useState(0);
  const navRef = useRef(null);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  /* Promo auto-rotate */
  useEffect(() => {
    const timer = setInterval(() => {
      setPromoIndex((prev) => (prev + 1) % promoTexts.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  /* Close on outside click */
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
      {/* ---------- TOP BAR ---------- */}
      <nav className="bg-green-600 text-white text-xs py-2">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <FaShippingFast />
            <span className="font-medium">AVACOS Stores</span>
          </div>

          <div
            key={promoIndex}
            className="hidden md:block font-medium animate-fade-in">
            {promoTexts[promoIndex]}
          </div>

          <div className="flex items-center gap-2">
            <FiSmartphone />
            <a href="tel:+919922117866" className="hover:underline">
              +91 99221 17866
            </a>
          </div>
        </div>
      </nav>

      {/* ---------- MAIN NAV ---------- */}
      <header ref={navRef} className="sticky top-0 z-50 bg-white border-b">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold hover:text-green-600 transition">
            AVACOS
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-8 text-sm">
            <Link to="/" className="hover:text-green-600">
              Home
            </Link>

            <Dropdown
              label="Shop By Category"
              open={openDropdown === "category"}
              onClick={() => toggleDropdown("category")}>
              <DropdownItem to="/products">All Products</DropdownItem>
              <DropdownItem to="/category/fruits">
                Fruits & Vegetables
              </DropdownItem>
              <DropdownItem to="/category/dairy">Dairy</DropdownItem>
              <DropdownItem to="/category/snacks">Snacks</DropdownItem>
            </Dropdown>

            <Dropdown
              label="Benefits"
              open={openDropdown === "benefits"}
              onClick={() => toggleDropdown("benefits")}>
              <DropdownItem to="/benefits/organic">Organic</DropdownItem>
              <DropdownItem to="/benefits/gluten-free">
                Gluten Free
              </DropdownItem>
              <DropdownItem to="/benefits/sugar-free">Sugar Free</DropdownItem>
            </Dropdown>

            <Link to="/about" className="hover:text-green-600">
              About
            </Link>
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-4 text-xl">
            {/* Search Button */}
            <button
              onClick={() => setIsOpenSearch(!isOpenSearch)}
              className="hover:scale-110 transition">
              <FiSearch />
            </button>

            <Link to="/cart" className="hover:scale-110 transition">
              <FiShoppingCart />
            </Link>

            <Link to="/login" className="hover:scale-110 transition">
              <FiUser />
            </Link>

            {/* Mobile Toggle */}
            <button
              className="md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {/* ---------- DESKTOP SEARCH ---------- */}
        {isOpenSearch && (
          <div className="hidden md:block absolute right-6 top-full -mt-16 w-72 bg-transparent mr-20 rounded-xl p-3 animate-in fade-in zoom-in-95 duration-200 z-50">
            <input
              autoFocus
              type="text"
              placeholder="Search products..."
              className="w-full border rounded-full px-4 py-2 text-sm
              focus:ring-2 focus:ring-green-600 outline-none"
            />
          </div>
        )}

        {/* ---------- MOBILE SEARCH ---------- */}
        {isOpenSearch && (
          <div className="md:hidden bg-white border-t px-4 py-3 animate-slide-down">
            <input
              autoFocus
              type="text"
              placeholder="Search products..."
              className="w-full border rounded-full px-4 py-2 text-sm
              focus:ring-2 focus:ring-green-600 outline-none"
            />
          </div>
        )}

        {/* ---------- MOBILE MENU ---------- */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t p-4 space-y-3 animate-slide-down">
            <MobileLink to="/" close={() => setMenuOpen(false)}>
              Home
            </MobileLink>
            <MobileLink to="/products" close={() => setMenuOpen(false)}>
              All Products
            </MobileLink>
            <MobileLink to="/category/fruits" close={() => setMenuOpen(false)}>
              Fruits
            </MobileLink>
            <MobileLink to="/category/dairy" close={() => setMenuOpen(false)}>
              Dairy
            </MobileLink>
            <MobileLink to="/about" close={() => setMenuOpen(false)}>
              About
            </MobileLink>
            <MobileLink to="/contact" close={() => setMenuOpen(false)}>
              Contact
            </MobileLink>
          </div>
        )}
      </header>
    </>
  );
};

/* ---------- COMPONENTS ---------- */

const Dropdown = ({ label, open, onClick, children }) => (
  <div className="relative">
    <button
      onClick={onClick}
      className="flex items-center gap-1 hover:text-green-600">
      {label}
      <FiChevronDown className={`transition ${open ? "rotate-180" : ""}`} />
    </button>

    {open && (
      <div className="absolute mt-3 bg-white shadow-lg rounded-lg w-52 p-2 animate-scale-fade">
        {children}
      </div>
    )}
  </div>
);

const DropdownItem = ({ to, children }) => (
  <Link
    to={to}
    className="block px-3 py-2 rounded hover:bg-green-50 hover:text-green-600">
    {children}
  </Link>
);

const MobileLink = ({ to, close, children }) => (
  <Link
    to={to}
    onClick={close}
    className="block py-2 border-b hover:text-green-600">
    {children}
  </Link>
);

export default Navbar;
