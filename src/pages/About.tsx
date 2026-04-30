import { PageBanner, SidebarNewsCard } from "../components/PageParts";
import FadeIn from "../components/FadeIn";

export default function About() {
  const coreValues = [
    "Dignity of the human persons",
    "Commitment",
    "Love of neighbour",
    "Putting the people first",
    "Transparency and accountability",
    "Stewardship",
    "Solidarity",
    "Gender Sensitivity",
    "Respect for the common good.",
  ];

  return (
    <>
      <PageBanner title="About Us" />
      <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col lg:flex-row gap-10">
        <div className="flex-1">
          <FadeIn>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              The Justice, Development and Peace/Caritas Commission (JDPC), is a faith-based organization.
              It is the development arm of the Catholic Church that advocates for human rights, good governance,
              undertakes implementation of relief and development programs aimed at promoting the standard of
              living of less privileged persons; people in need regardless of their religion, ethnic group or
              political affiliations. JDPC Enugu was registered under the Corporative Affairs Commission with
              the Registration No. CAC/IT/NO 98442.
            </p>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              JDPC generally works for just structures that promote the dignity of the common person. It is
              part of the Caritas network that coordinates relief and development interventions for the
              Catholic Church, it is indeed the local Caritas at the Diocesan (state) level.
            </p>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              JDPC of the Catholic Diocese of Enugu was established in 1986 and in 2006 was given a more
              focused mandate to promote a just system for the common man, by His Lordship Most Rev. Anthony
              Okonkwo Gbuji, the Catholic Bishop of Enugu. Its Head Office is at the Catholic Diocesan
              Secretariat, Holy Ghost Enugu. Presently, Rev. Fr. Dr. Chukwudi Donatus Onuigbo is responsible
              for the day-to-day activities as the Director of the Commission.
            </p>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              This Commission works through her various programs and projects to respond to the call of the
              second Vatican Council of 1965, which underscores the importance of the Church's role in building
              a just and peaceful world. JDPC Enugu is part of a regional and provincial JDPC network of seven
              (7) Dioceses comprising of; Abakaliki, Awgu, Awka, Enugu, Nnewi, Nsukka and Onitsha. These seven
              Dioceses make up the Onitsha Ecclesiastical province in the three states of Anambra, Ebonyi and Enugu.
            </p>
            <p className="text-gray-700 text-sm leading-relaxed mb-6">
              JDPC Enugu geographic spread is vast and cuts across the entire Enugu Catholic Diocese; located
              in the South Eastern Nigeria, in Enugu State, comprising of the following Local Government Areas:
              Nkanu West, Nkanu East, Enugu North, Enugu South, Enugu East, Udi, Oji River and Ezeagu. The
              Diocese has a total population of 2,637,113 of which 1,834,432 are Catholics, with a surface
              area of about 2,738 square Kilometres.
            </p>

            <div className="mb-5">
              <p className="font-bold text-gray-800 uppercase text-sm tracking-wide mb-1">Vision</p>
              <p className="text-gray-700 text-sm leading-relaxed">
                A world where the dignity and equality of the human person is restored, justice promoted and
                injustice redressed.
              </p>
            </div>

            <div className="mb-5">
              <p className="font-bold text-gray-800 uppercase text-sm tracking-wide mb-1">Mission</p>
              <p className="text-gray-700 text-sm leading-relaxed italic">
                To promote a sustainable and integral human development through holistic empowerment approach,
                enhancing effective structural transformation of the society without any form of discrimination.
              </p>
            </div>

            <div>
              <p className="font-bold text-gray-800 uppercase text-sm tracking-wide mb-3">Core Value</p>
              <ul className="space-y-2">
                {coreValues.map((v) => (
                  <li key={v} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-secondary mt-0.5">•</span> {v}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
        <SidebarNewsCard />
      </div>
    </>
  );
}