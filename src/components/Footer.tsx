import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaYoutube, 
  FaWhatsapp 
} from "react-icons/fa";



export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* ABOUT SECTION WITH LOGO */}
        <div>
          <div className="flex items-center gap-4 mb-6">
            <img 
              src="/jdpc-logo.jpeg"
              alt="JDPC Enugu Logo" 
              className="w-16 h-16 object-contain rounded-full border border-white/30 bg-white/10 p-1"
            />
            <div>
              <h3 className="font-bold text-xl uppercase tracking-wide leading-tight">
                JDPC Enugu
              </h3>
              <p className="text-white/70 text-sm">Justice, Development and Peace Commission</p>
            </div>
          </div>

          <p className="text-sm text-white/80 leading-relaxed mb-3">
            Justice and Peace are imperative for meaningful development. The Justice, Development, and
            Peace/Caritas Commission (JDPC) in Enugu Diocese, an arm of the Catholic Church, champions
            human rights and good governance.
          </p>
          <p className="text-sm text-white/80 leading-relaxed mb-3">
            Operating as part of the Catholic Diocese of Enugu, JDPC is a faith-based, non-profit,
            non-governmental organization committed to establishing just structures and preserving human dignity.
          </p>
          <p className="text-sm text-white/80 leading-relaxed">
            Collaborating with the Caritas network and six other Dioceses, JDPC Enugu serves a population
            of 2,637,113, including 1,834,432 Catholics, across multiple local government areas in Enugu State.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="font-bold text-lg uppercase tracking-wide mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {[
              { label: "Home", path: "/" },
              { label: "About Us", path: "/about" },
              { label: "Aims & Objectives", path: "/aims" },
              { label: "Management Team", path: "/management" },
              { label: "Organogram", path: "/organogram" },
              { label: "Projects", path: "/projects" },
              { label: "Photo Gallery", path: "/gallery" },
              { label: "Contact Us", path: "/contact" },
            ].map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="flex items-center gap-2 text-sm text-white/80 hover:text-gold transition-colors"
                >
                  <span className="text-gold">◆</span> {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="font-bold text-lg uppercase tracking-wide mb-4">Contact Us</h3>
          <div className="space-y-3 text-sm text-white/80">
            <div className="flex items-start gap-3">
              <MapPin size={16} className="text-gold mt-0.5 shrink-0" />
              <div>
                <p>JDPC Office</p>
                <p>Diocesan Catholic Secretariat,</p>
                <p>Ogui</p>
                <p>Enugu</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Phone size={16} className="text-gold shrink-0" />
              <div>
                <p>+234 (0)8163331439</p>
                <p>+234 (0)8069002466</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Mail size={16} className="text-gold shrink-0" />
              <a 
                href="mailto:admin@jdpcenugu.org.ng" 
                className="hover:text-gold transition-colors"
              >
                admin@jdpcenugu.org.ng
              </a>
            </div>

            {/* SOCIAL MEDIA ICONS */}
            <div className="flex items-center gap-3 pt-4">
              {[
                { Icon: FaFacebookF, label: "Facebook", href: "https://facebook.com" },
                { Icon: FaTwitter, label: "Twitter", href: "https://twitter.com" },
                { Icon: FaInstagram, label: "Instagram", href: "https://instagram.com" },
                { Icon: FaYoutube, label: "YouTube", href: "https://youtube.com" },
                { Icon: FaWhatsapp, label: "WhatsApp", href: "https://wa.me/2348163331439" },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-gold flex items-center justify-center transition-all hover:scale-110 text-lg"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10 py-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/60">
          <p>
            © 2023. <span className="font-bold text-white">JDPC Enugu</span>. All rights reserved.
          </p>
          <p>
            Website developed and hosted by{" "}
            <span className="font-bold text-white"> chidiebereijeoma135@gmail.com </span>
          </p>
        </div>
      </div>
    </footer>
  );
}