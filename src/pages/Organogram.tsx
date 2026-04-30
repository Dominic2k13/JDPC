import { PageBanner } from "../components/PageParts";
import FadeIn from "../components/FadeIn";

interface OrgBoxProps {
  label: string;
  className?: string;
}

function OrgBox({ label, className = "" }: OrgBoxProps) {
  return (
    <div
      className={`border-2 border-primary/40 bg-secondary/10 text-primary font-semibold text-xs text-center px-3 py-2 rounded shadow-sm min-w-[100px] ${className}`}
    >
      {label}
    </div>
  );
}

export default function Organogram() {
  return (
    <>
      <PageBanner title="Organogram" />
      <div className="max-w-5xl mx-auto px-4 py-10 overflow-x-auto">
        <FadeIn>
          <div className="min-w-[700px]">
            {/* Top Row */}
            <div className="flex justify-center items-start gap-6 mb-2">
              <OrgBox label="Bishop of Enugu Diocese" />
              <OrgBox label="National Bishop conference (CBCN)" className="font-bold" />
              <OrgBox label="Director, Church & Society/JDPC National Caritas Nigeria" />
            </div>

            <div className="flex justify-center mb-2">
              <div className="w-px h-8 bg-primary/40" />
            </div>

            {/* Second Row */}
            <div className="flex justify-center items-start gap-6 mb-2">
              <OrgBox label="JDPC Enugu Board" />
              <OrgBox label="Provincial Bishops" className="font-bold" />
              <OrgBox label="JDPC Provincial Coordinator" />
            </div>

            <div className="flex justify-center mb-2">
              <div className="w-px h-8 bg-primary/40" />
            </div>

            {/* Diocesan Coordinator */}
            <div className="flex justify-center mb-2">
              <OrgBox label="Diocesan JDPC Coordinator" className="px-8 font-bold text-sm" />
            </div>

            <div className="flex justify-center mb-2">
              <div className="w-px h-8 bg-primary/40" />
            </div>

            {/* Middle Row */}
            <div className="flex justify-center gap-4 mb-2">
              {["Program Manager", "Legal Adviser 1", "Legal Adviser 2", "Finance Manager"].map((role) => (
                <OrgBox key={role} label={role} />
              ))}
            </div>

            <div className="flex justify-center mb-2">
              <div className="w-px h-8 bg-primary/40" />
            </div>

            {/* Bottom Row */}
            <div className="flex justify-center gap-4 flex-wrap">
              {[
                "Project Officer",
                "M&E Officer",
                "Program Volunteers",
                "Communication Officer",
                "Finance Volunteer",
              ].map((role) => (
                <OrgBox key={role} label={role} />
              ))}
            </div>
          </div>
        </FadeIn>
        <p className="text-center text-xs text-gray-400 mt-8">
          JDPC Enugu Diocese Organizational Structure
        </p>
      </div>
    </>
  );
}