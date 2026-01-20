import { motion } from "framer-motion";

function Navbar() {
  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full z-50 bg-white/60 backdrop-blur-lg border-b border-white/30"
    >
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold">
            H
          </div>
          <div className="leading-tight">
            <p className="text-sm font-semibold text-gray-900">Harini</p>
            <p className="text-xs text-gray-500">Frontend Developer</p>
          </div>
        </div>

        {/* Links */}
        <ul className="flex gap-6 text-sm font-medium text-gray-700">
          {["home", "about", "skills", "projects", "contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className="relative capitalize hover:text-indigo-600 transition"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}

export default Navbar;
