import { PageBanner, SidebarNewsCard } from "../components/PageParts";
import FadeIn from "../components/FadeIn";
import { ONGOING_PROJECTS, PAST_PROJECTS } from "../data/siteData";

export default function Projects() {
  return (
    <>
      <PageBanner title="Projects" />
      <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col lg:flex-row gap-10">
        <div className="flex-1">
          <FadeIn>
            <div className="mb-8">
              <p className="font-bold text-gray-800 mb-3">On-going Projects:</p>
              <ol className="list-decimal list-inside space-y-2">
                {ONGOING_PROJECTS.map((p) => (
                  <li key={p} className="text-sm text-gray-700">{p}</li>
                ))}
              </ol>
            </div>
            <div>
              <p className="font-bold text-gray-800 mb-3">Past Projects:</p>
              <ol className="list-decimal list-inside space-y-2">
                {PAST_PROJECTS.map((p) => (
                  <li key={p} className="text-sm text-gray-700">{p}</li>
                ))}
              </ol>
            </div>
          </FadeIn>
        </div>
        <SidebarNewsCard />
      </div>
    </>
  );
}