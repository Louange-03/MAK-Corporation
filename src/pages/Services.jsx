import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Code, Smartphone, Server, Shield, Palette, ArrowRight, Check, Zap, Globe, Clock } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SectionTitle from "../components/SectionTitle";
import AnimatedTitle from "../components/AnimatedTitle";
import { Button } from "../components/ui/button";
import serviceWeb from "../assets/service-web.jpg";
import serviceMobile from "../assets/service-mobile.jpg";
import serviceNetwork from "../assets/service-network.jpg";
import serviceSecurity from "../assets/service-security.jpg";
import serviceDesign from "../assets/service-design.jpg";

const Services = () => {
  const [visibleSections, setVisibleSections] = useState({});

  useEffect(() => {
    const observers = [];
    document.querySelectorAll("[data-animate]").forEach((el) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            const key = el.dataset.animate || "";
            setVisibleSections((prev) => ({ ...prev, [key]: true }));
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const services = [
    {
      icon: Code,
      title: "Développement Web",
      description:
        "Créez une présence en ligne impactante avec des sites et applications web modernes, performants et optimisés pour le SEO.",
      image: serviceWeb,
      features: ["Sites vitrines professionnels", "Applications web sur mesure", "E-commerce et marketplaces", "Optimisation des performances"],
    },
    {
      icon: Smartphone,
      title: "Applications Mobile",
      description:
        "Donnez à votre entreprise une présence mobile avec des applications iOS et Android intuitives et performantes.",
      image: serviceMobile,
      features: ["Applications iOS natives", "Applications Android natives", "Apps cross-platform", "Maintenance et mises à jour"],
    },
    {
      icon: Server,
      title: "Systèmes & Réseaux",
      description:
        "Bénéficiez d'une infrastructure IT robuste et sécurisée pour soutenir la croissance de votre entreprise.",
      image: serviceNetwork,
      features: ["Installation de réseaux", "Administration serveurs", "Solutions cloud", "Support technique 24/7"],
    },
    {
      icon: Shield,
      title: "Cybersécurité",
      description:
        "Protégez vos données et systèmes contre les menaces avec nos solutions de sécurité avancées.",
      image: serviceSecurity,
      features: ["Audit de sécurité", "Protection des données", "Gestion des accès", "Formation du personnel"],
    },
    {
      icon: Palette,
      title: "Design UI/UX",
      description:
        "Offrez une expérience utilisateur exceptionnelle avec des interfaces élégantes et intuitives.",
      image: serviceDesign,
      features: ["Recherche utilisateur", "Wireframes et prototypes", "Design d'interfaces", "Tests d'utilisabilité"],
    },
  ];

  const benefits = [
    { icon: Zap, title: "Rapidité", desc: "Des solutions livrées dans les délais" },
    { icon: Globe, title: "Accessibilité", desc: "Des prix adaptés à tous les budgets" },
    { icon: Clock, title: "Support", desc: "Assistance continue après livraison" },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black" />

        {/* Glow blobs */}
        <div className="absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-[520px] h-[520px] rounded-full bg-white/10 blur-3xl" />

        {/* Subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.06] via-transparent to-transparent" />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.12) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        <div className="container-custom relative z-10 pt-24 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white/90 text-sm font-medium border border-white/15 mb-8 shadow-[0_0_0_1px_rgba(255,255,255,0.05)] animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-white/70" />
            Solutions Innovantes
          </span>

          <AnimatedTitle
            as="h1"
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 tracking-tight"
            gradient={false}
          >
            Nos Services
          </AnimatedTitle>

          <p className="text-base md:text-xl text-white/75 max-w-2xl mx-auto leading-relaxed animate-fade-up stagger-3">
            Des solutions technologiques innovantes pour propulser votre entreprise vers le succès
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent" />
      </section>

      {/* Services List */}
      <section className="section-padding bg-black">
        <div className="container-custom">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.title}
                data-animate={`service-${index}`}
                className={`grid lg:grid-cols-2 gap-12 items-center`}
              >
                <div
                  className={`${index % 2 === 1 ? "lg:order-2" : ""} ${
                    visibleSections[`service-${index}`] ? "animate-slide-in-left" : "opacity-0"
                  }`}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-md flex items-center justify-center">
                      <service.icon className="text-white" size={28} />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-heading font-bold text-white tracking-tight">
                      {service.title}
                    </h2>
                  </div>

                  <p className="text-white/70 text-lg leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-white/10 border border-white/10 flex items-center justify-center flex-shrink-0">
                          <Check className="text-white" size={14} />
                        </div>
                        <span className="text-white/85">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link to="/contact">
                    <Button variant="outline" size="lg" className="rounded-full border-white/20 text-white hover:bg-white/10">
                      Demander un devis
                      <ArrowRight className="ml-2" size={18} />
                    </Button>
                  </Link>
                </div>

                <div
                  className={`${index % 2 === 1 ? "lg:order-1" : ""} ${
                    visibleSections[`service-${index}`] ? "animate-slide-in-right" : "opacity-0"
                  }`}
                >
                  <div className="relative">
                    <div className="absolute -inset-4 rounded-3xl bg-white/5 blur-xl" />
                    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-[0_20px_80px_rgba(0,0,0,0.6)]">
                      <img src={service.image} alt={service.title} className="w-full aspect-[4/3] object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                    </div>
                  </div>
                </div>

                {/* subtle divider on mobile */}
                <div className="lg:hidden h-px bg-white/10" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-black" data-animate="benefits">
        <div className="container-custom">
          <SectionTitle title="Pourquoi nous choisir ?" subtitle="Des avantages qui font la différence" />

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className={`text-center rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-8 shadow-[0_10px_40px_rgba(0,0,0,0.45)] hover:bg-white/[0.06] transition-colors ${
                  visibleSections.benefits ? "animate-fade-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="text-white" size={28} />
                </div>
                <h3 className="font-heading font-semibold text-white text-xl mb-2">{benefit.title}</h3>
                <p className="text-white/70">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-black" data-animate="cta">
        <div className="container-custom">
          <div
            className={`max-w-3xl mx-auto text-center rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-10 md:p-14 shadow-[0_20px_80px_rgba(0,0,0,0.55)] ${
              visibleSections.cta ? "animate-scale-in" : "opacity-0"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6 tracking-tight">
              Prêt à démarrer votre projet ?
            </h2>
            <p className="text-white/70 text-lg mb-8 leading-relaxed">
              Contactez-nous pour une consultation gratuite et découvrez comment nos services peuvent transformer votre entreprise.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="xl" className="rounded-full">
                Contactez-nous maintenant
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
