import { PageBanner } from "../components/PageParts";
import FadeIn from "../components/FadeIn";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Contact() {
  return (
    <>
      <PageBanner title="Contact Us" />
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <FadeIn direction="left">
            <h2
              className="text-xl font-bold text-primary mb-6"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Get In Touch
            </h2>
            <div className="space-y-5 text-sm text-gray-700">
              <div className="flex items-start gap-4">
                <MapPin className="text-secondary mt-1 shrink-0" size={20} />
                <div>
                  <p className="font-semibold mb-1">Office Address</p>
                  <p>JDPC Office, Diocesan Catholic Secretariat,</p>
                  <p>Ogui, Enugu</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="text-secondary mt-1 shrink-0" size={20} />
                <div>
                  <p className="font-semibold mb-1">Phone</p>
                  <p>+234 (0)8163331439</p>
                  <p>+234 (0)8069002466</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="text-secondary mt-1 shrink-0" size={20} />
                <div>
                  <p className="font-semibold mb-1">Email</p>
                  <a
                    href="mailto:admin@jdpcenugu.org.ng"
                    className="text-secondary hover:underline"
                  >
                    admin@jdpcenugu.org.ng
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Contact Form */}
          <FadeIn direction="right">
            <h2
              className="text-xl font-bold text-primary mb-6"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Send a Message
            </h2>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Message subject"
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Your message..."
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="px-6 py-2.5 bg-primary text-white text-sm font-semibold rounded hover:bg-secondary transition-colors"
              >
                Send Message
              </button>
            </form>
          </FadeIn>
        </div>
      </div>
    </>
  );
}