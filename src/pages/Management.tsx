import { PageBanner } from "../components/PageParts";
import FadeIn from "../components/FadeIn";
import { motion } from "framer-motion";
import { MANAGEMENT_STAFF } from "../data/siteData";

export default function Management() {
  return (
    <>
      <PageBanner title="Management Team" />
      <div className="max-w-7xl mx-auto px-4 py-10">
        <FadeIn>
          <div className="flex flex-col md:flex-row gap-8 mb-14 items-start">
            <div className="flex flex-col items-center md:items-start">
              <img
                src="https://placehold.co/220x260/1a4a6b/ffffff?text=Fr.+Onuigbo"
                alt="Rev. Fr. Dr. Chukwudi Donatus Onuigbo"
                className="w-52 rounded shadow-md mb-3 object-cover"
              />
              <p className="text-secondary font-semibold text-sm text-center">
                Rev. Fr. Dr. Chukwudi Donatus Onuigbo
              </p>
              <p className="text-gray-500 text-xs text-center">Diocesan Coordinator/Director</p>
            </div>
            <div className="flex-1 space-y-4 text-sm text-gray-700 leading-relaxed">
              <p>
                The Justice Development and Peace Caritas Commission (JDPC), Enugu Diocese, has a Board of
                Trustees and Board of Directors chaired by the Bishop of Enugu Diocese.
              </p>
              <p>
                The day-to-day running of the Commission is overseen by a Diocesan Coordinator/Director,
                (Rev. Fr. Dr. Chukwudi Donatus Onuigbo).
              </p>
              <p>
                He reports directly to the Bishop (Board Chairman) and the Provincial Coordinator, with a
                line of reporting to the National JDPC Director and Executive Secretary/CEO of Caritas
                Nigeria, who is responsible for the overall coordination of humanitarian and development
                interventions of the Catholic Church in Nigeria.
              </p>
              <p>
                The programmes of the Commission are managed by an experienced Program Manager, with overall
                supervision of the Coordinator.
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <h2
            className="text-xl font-bold text-center text-primary mb-8"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Management Staff
          </h2>
        </FadeIn>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {MANAGEMENT_STAFF.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="flex flex-col items-center text-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-36 h-36 rounded object-cover mb-2 shadow-sm border border-gray-100"
              />
              <p className="text-secondary font-semibold text-xs leading-snug">{member.name}</p>
              <p className="text-gray-500 text-xs leading-snug mt-1">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}