import { useState } from "react";
import { Link } from "react-router-dom";

const Navigasi = ({
  dashboardText,
  forumText,
  panduanText,
  pengaturanText,
  kontakKamiText,
  signIn,
  tentangKami,
  classname,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showPengaturanMenu, setShowPengaturanMenu] = useState(false);
  const [tentangKamiDropdown, setTentangKamiDropdown] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handlePengaturan = () => setShowPengaturanMenu(!showPengaturanMenu);


  const handleLogout = () => {
    localStorage.clear(); // Menghapus semua item dari localStorage
    window.location.href = "/";
  };

  return (
    <nav className="relative">
      {/* Tombol Hamburger untuk Mobile */}
      <div className="sm:hidden flex items-center p-2">
        <button
          onClick={toggleMenu}
          className="text-gray-800 bg-gray-200 p-2 rounded focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Navigasi */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } sm:flex sm:items-center sm:justify-between font-semibold`}
      >
        <div className="flex flex-col sm:flex-row sm:gap-8">
          <Link
            className="hover:text-hijau active:text-hijau hover:border-b-2 text-md hover:border-hijau duration-200"
            to="/dashboard"
          >
            {dashboardText}
          </Link>
          <Link
            className="hover:text-hijau active:text-hijau hover:border-b-2 text-md hover:border-hijau duration-200"
            to="/forum"
          >
            {forumText}
          </Link>
          <Link
            className="hover:text-hijau active:text-hijau hover:border-b-2 text-md hover:border-hijau duration-200"
            to="/panduan"
          >
            {panduanText}
          </Link>
          <button
            onClick={handlePengaturan}
            className="hover:text-hijau active:text-hijau hover:border-b-2 text-md hover:border-hijau duration-200"
          >
            {pengaturanText}
          </button>
          <Link
            className="hover:text-hijau active:text-hijau hover:border-b-2 text-md hover:border-hijau duration-200"
            to="/about"
          >
            {kontakKamiText}
          </Link>
          <Link onClick={() => setTentangKamiDropdown(!tentangKamiDropdown)}
            className="hover:text-hijau active:text-hijau hover:border-b-2 text-md hover:border-hijau duration-200"
            to="/"
          >
            {tentangKami}
          </Link>
          <Link
            className={`hover:text-hijau active:text-hijau hover:border-b-2 text-md ${classname}`}
            to="/login"
          >
            {signIn}
          </Link>
        </div>
      </div>

      {/* Dropdown Menu untuk Tentang Kami */}
      {tentangKamiDropdown && (
        <div className="absolute bg-white border rounded shadow-lg py-2 right-28 mt-2 w-40 z-10">
          <Link
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
            to="/about"
          >
            Tentang Kami
          </Link>
          <Link
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
            to="/team"
          >
            Tim Kami
          </Link>
        </div>
      )}

      {/* Dropdown Menu untuk Pengaturan */}
      {showPengaturanMenu && (
        <div className="absolute bg-white border rounded shadow-lg py-2 right-0 mt-2 w-40 z-10">
          <Link
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
            to="/profile"
          >
            Profile
          </Link>
          <Link
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
            to="/settings"
          >
            Settings
          </Link>
          <button
            onClick={handleLogout}
            className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navigasi;
