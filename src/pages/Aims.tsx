import { PageBanner, SidebarNewsCard } from "../components/PageParts";
import FadeIn from "../components/FadeIn";
import { motion } from "framer-motion";
import { AIMS } from "../data/siteData";

export default function Aims() {
  return (
    <>
      <PageBanner title="Aims & Objectives" />
      <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col lg:flex-row gap-10">
        <div className="flex-1">
          <FadeIn>
            <ul className="space-y-4">
              {AIMS.map((aim, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="flex items-start gap-3 text-sm text-gray-700 leading-relaxed"
                >
                  <span className="text-secondary mt-1 shrink-0">•</span>
                  {aim}
                </motion.li>
              ))}
            </ul>
          </FadeIn>
        </div>
        <SidebarNewsCard />
      </div>
    </>
  );
}