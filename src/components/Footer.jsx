import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="gradient-bg text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11">
                  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <defs>
                      <linearGradient id="footerLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#6BA3C7" />
                        <stop offset="100%" stopColor="#4A7FA7" />
                      </linearGradient>
                    </defs>
                    <rect x="15" y="15" width="70" height="70" rx="16" transform="rotate(45 50 50)" fill="url(#footerLogoGradient)" />
                    <text x="50" y="62" textAnchor="middle" fontSize="42" fontWeight="700" fontFamily="Montserrat, sans-serif" fill="white">M</text>
                  </svg>
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="font-heading font-bold text-white text-xl">MAK</span>
                  <span className="font-heading text-mak-light/80 text-xs tracking-widest uppercase">Corporation</span>
                </div>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Solutions technologiques innovantes pour l'épanouissement et le développement des populations africaines.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Navigation</h4>
            <ul className="space-y-3">
              {[
                { name: "Accueil", path: "/" },
                { name: "À Propos", path: "/a-propos" },
                { name: "Services", path: "/services" },
                { name: "Actualités", path: "/actualites" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/70 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Nos Services</h4>
            <ul className="space-y-3">
              {[
                "Développement Web",
                "Applications Mobile",
                "Systèmes & Réseaux",
                "Cybersécurité",
                "Design UI/UX",
              ].map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-white/70 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-secondary mt-0.5 flex-shrink-0" />
                <span className="text-white/70 text-sm">Lomé, Togo</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-secondary flex-shrink-0" />
                <a href="mailto:contact@mak-tg.com" className="text-white/70 hover:text-white transition-colors text-sm">
                  contact@mak-tg.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-secondary flex-shrink-0" />
                <span className="text-white/70 text-sm">+228 XX XX XX XX</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">
            © {currentYear} MAK Corporation. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              Politique de confidentialité
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              Mentions légales
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
