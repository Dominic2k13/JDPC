import HeroSlider from "../components/HeroSlider";
import FadeIn from "../components/FadeIn";
import { THEMATIC_AREAS } from "../data/siteData";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main>
      <HeroSlider />

      {/* WHO WE ARE */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <FadeIn direction="left">
            <img
              src="https://placehold.co/550x380/1a4a6b/ffffff?text=JDPC+Community+Outreach"
              alt="JDPC community work"
              className="w-full rounded shadow-md object-cover"
            />
          </FadeIn>
          <FadeIn direction="right">
            <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-2">Who We Are</p>
            <h2
              className="text-2xl md:text-3xl font-bold text-primary mb-5 leading-tight"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Justice, Development and Peace/Caritas Commission (JDPC), Enugu Diocese
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              There cannot be any meaningful Development without Justice and Peace. The Justice, Development
              and Peace/Caritas Commission (JDPC) in Enugu Diocese is the Catholic Church's development arm,
              advocating for human rights and just structures to uphold human dignity.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              JDPC Enugu is not an organization of its own. It is a network and is partly dependent on other
              organizations. JDPC Enugu, which is of the Catholic Diocese of Enugu, is a faith-based,
              non-profit, non-governmental organization created to promote a just system for the common man.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              It collaborates with the Caritas network at the State level and works in conjunction with six
              other Dioceses in the Onitsha Ecclesiastical province. JDPC Enugu's outreach spans multiple
              local government areas in Enugu State, serving a population of 2,637,113, including 1,834,432 Catholics.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* THEMATIC AREAS - Updated with React Icons */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-1">What We Do</p>
              <h2
                className="text-2xl md:text-3xl font-bold text-primary"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Thematic Areas
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {THEMATIC_AREAS.map((area, i) => {
              const IconComponent = area.icon;   // This is now a React component

              return (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (i % 4) * 0.1 }}
                  whileHover={{ y: -4, boxShadow: "0 10px 30px rgba(0,0,0,0.12)" }}
                  className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all group"
                >
                  <div className="w-16 h-16 flex items-center justify-center bg-primary/10 text-primary rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                    <IconComponent size={36} />
                  </div>
                  
                  <h3 className="font-bold text-primary text-lg mb-3">{area.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {area.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}