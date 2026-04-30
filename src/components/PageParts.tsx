import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface PageBannerProps {
  title: string;
}

export function PageBanner({ title }: PageBannerProps) {
  return (
    <div className="bg-gray-100 border-b border-gray-200 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="text-2xl md:text-3xl font-bold text-gray-800"
          style={{ fontFamily: "Georgia, serif" }}
        >
          {title}
        </motion.h1>
      </div>
    </div>
  );
}

export function SidebarNewsCard() {
  return (
    <aside className="w-full lg:w-80 shrink-0">
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="border border-gray-200 rounded overflow-hidden shadow-sm"
      >
        <img
          src="https://placehold.co/400x250/1a4a6b/ffffff?text=Web+Design"
          alt="Website Launch"
          className="w-full h-44 object-cover"
        />
        <div className="p-4">
          <Link
            to="#"
            className="text-secondary font-semibold text-sm leading-snug hover:underline block mb-2"
          >
            JDPC Enugu Diocese Launches Interactive Website to Strengthen Advocacy for Justice and Peace
          </Link>
          <p className="text-accent text-xs font-semibold mb-2">November 11, 2023</p>
          <p className="text-gray-600 text-xs leading-relaxed">
            JDPC Enugu Diocese, a Catholic organization promoting justice, launched a website to
            enhance advocacy, engage communities, and amplify their impactful initiatives.{" "}
            <Link to="#" className="text-secondary hover:underline">[...]</Link>
          </p>
        </div>
      </motion.div>
    </aside>
  );
}