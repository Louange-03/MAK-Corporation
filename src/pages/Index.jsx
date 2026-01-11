import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Code, Smartphone, Shield, Palette, Server, CheckCircle2, Quote } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SectionTitle from "../components/SectionTitle";
import AnimatedTitle from "../components/AnimatedTitle";
import { Button } from "../components/ui/button";
import heroBg from "../assets/hero-bg.jpg";
import serviceWeb from "../assets/service-web.jpg";
import serviceMobile from "../assets/service-mobile.jpg";
import serviceNetwork from "../assets/service-network.jpg";
import serviceSecurity from "../assets/service-security.jpg";

const Index = () => {
  const [visibleSections, setVisibleSections] = useState({});

  useEffect(() => {
    const observers = [];
    document.querySelectorAll("[data-animate]").forEach((el) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            const animateKey = el.dataset.animate;
            if (animateKey) {
              setVisibleSections((prev) => ({ ...prev, [animateKey]: true }));
            }
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
    { icon: Code, title: "Développement Web", description: "Sites web modernes et applications sur mesure", image: serviceWeb },
    { icon: Smartphone, title: "Applications Mobile", description: "Apps iOS et Android performantes", image: serviceMobile },
    { icon: Server, title: "Systèmes & Réseaux", description: "Infrastructure IT robuste et sécurisée", image: serviceNetwork },
    { icon: Shield, title: "Cybersécurité", description: "Protection de vos données et systèmes", image: serviceSecurity },
  ];

  const reasons = [
    { title: "Expertise Locale", desc: "Une équipe togolaise qui comprend vos besoins" },
    { title: "Innovation", desc: "Les dernières technologies au service de votre croissance" },
    { title: "Support 24/7", desc: "Un accompagnement continu pour votre succès" },
    { title: "Prix Compétitifs", desc: "Des solutions adaptées à tous les budgets" },
  ];

  const testimonials = [
    { name: "Kofi Mensah", role: "Directeur, TechStart Lomé", text: "MAK Corporation a transformé notre vision en réalité. Leur équipe est professionnelle et réactive." },
    { name: "Ama Adjovi", role: "CEO, AgriTech Solutions", text: "Un partenaire de confiance pour tous nos projets digitaux. Je recommande vivement leurs services." },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70" />

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

        <div className="container-custom relative z-10 pt-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 animate-fade-up">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white/90 text-sm font-medium border border-white/15 shadow-[0_0_0_1px_rgba(255,255,255,0.05)]">
                <span className="w-2 h-2 rounded-full bg-white/70" />
                L'innovation au service de l'Afrique
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 leading-tight tracking-tight">
              <span className="block animate-fade-up stagger-1">Bienvenue chez</span>
              <AnimatedTitle
                as="span"
                className="text-5xl md:text-7xl lg:text-8xl block mt-2"
                gradient={false}
              >
                MAK Corporation
              </AnimatedTitle>
            </h1>

            <p className="text-base md:text-xl text-white/75 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-up stagger-3">
              Solutions technologiques innovantes pour le développement et l'épanouissement des populations africaines
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center animate-fade-up stagger-4">
              <Link to="/services">
                <Button variant="hero" size="xl" className="rounded-full">
                  Découvrir nos services
                  <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  variant="outline"
                  size="xl"
                  className="rounded-full border-white/20 text-white hover:bg-white/10"
                >
                  Nous contacter
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent" />
      </section>

      {/* About Section */}
      <section className="section-padding bg-black" data-animate="about">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={visibleSections.about ? "animate-slide-in-left" : "opacity-0"}>
              <span className="text-white/70 font-semibold mb-4 block tracking-wide">À PROPOS</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6 tracking-tight">
                Qui sommes-nous ?
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-6">
                Fondée en 2025, MAK Corporation est une entreprise togolaise spécialisée dans les services technologiques. Notre mission est de développer des solutions informatiques innovantes qui contribuent au développement et à l'épanouissement des populations africaines.
              </p>
              <p className="text-white/70 leading-relaxed mb-8">
                Nous croyons en la puissance de la technologie pour transformer les entreprises et améliorer la vie quotidienne. Notre équipe d'experts passionnés travaille sans relâche pour offrir des solutions sur mesure, adaptées aux réalités locales.
              </p>
              <Link to="/a-propos">
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full border-white/20 text-white hover:bg-white/10"
                >
                  En savoir plus
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>
            </div>

            <div className={`relative ${visibleSections.about ? "animate-slide-in-right" : "opacity-0"}`}>
              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl bg-white/5 blur-xl" />
                <div className="relative grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-6 shadow-[0_10px_40px_rgba(0,0,0,0.45)] hover:bg-white/[0.06] transition-colors">
                      <div className="text-4xl font-heading font-bold text-white">5+</div>
                      <div className="text-white/70 text-sm">Années d'expertise</div>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-6 text-white shadow-[0_10px_40px_rgba(0,0,0,0.45)] hover:bg-white/[0.06] transition-colors">
                      <div className="text-4xl font-heading font-bold">50+</div>
                      <div className="text-white/70 text-sm">Projets réalisés</div>
                    </div>
                  </div>
                  <div className="space-y-4 mt-8">
                    <div className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-6 text-white shadow-[0_10px_40px_rgba(0,0,0,0.45)] hover:bg-white/[0.06] transition-colors">
                      <div className="text-4xl font-heading font-bold">100%</div>
                      <div className="text-white/70 text-sm">Clients satisfaits</div>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-6 shadow-[0_10px_40px_rgba(0,0,0,0.45)] hover:bg-white/[0.06] transition-colors">
                      <div className="text-4xl font-heading font-bold text-white">24/7</div>
                      <div className="text-white/70 text-sm">Support disponible</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-black" data-animate="services">
        <div className="container-custom">
          <SectionTitle
            title="Nos Services"
            subtitle="Des solutions technologiques complètes pour propulser votre entreprise vers le succès"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Link
                key={service.title}
                to="/services"
                className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-md shadow-[0_20px_80px_rgba(0,0,0,0.6)] hover:bg-white/[0.06] transition-all duration-300 ${
                  visibleSections.services ? "animate-fade-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-md flex items-center justify-center">
                      <service.icon className="text-white" size={20} />
                    </div>
                    <h3 className="font-heading font-semibold text-white text-lg">{service.title}</h3>
                  </div>
                  <p className="text-white/70 text-sm">{service.description}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button variant="outline" size="lg" className="rounded-full border-white/20 text-white hover:bg-white/10">
                Voir tous nos services
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-black relative overflow-hidden" data-animate="reasons">
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.05] via-transparent to-transparent" />

        <div className="container-custom relative z-10">
          <SectionTitle
            title="Pourquoi choisir MAK Corporation ?"
            subtitle="Nous nous engageons à fournir l'excellence dans chaque projet"
            light
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((reason, index) => (
              <div
                key={reason.title}
                className={`rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-6 shadow-[0_10px_40px_rgba(0,0,0,0.45)] hover:bg-white/[0.06] hover:-translate-y-1 transition-all duration-300 ${
                  visibleSections.reasons ? "animate-fade-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center mb-4">
                  <CheckCircle2 className="text-white" size={24} />
                </div>
                <h3 className="font-heading font-semibold text-white text-lg mb-2">{reason.title}</h3>
                <p className="text-white/70 text-sm">{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-black" data-animate="testimonials">
        <div className="container-custom">
          <SectionTitle
            title="Ce que disent nos clients"
            subtitle="La satisfaction de nos clients est notre plus grande fierté"
          />

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className={`relative rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-8 shadow-[0_20px_80px_rgba(0,0,0,0.55)] hover:bg-white/[0.06] transition-colors ${
                  visibleSections.testimonials ? "animate-fade-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <Quote className="absolute top-6 right-6 text-white/10" size={48} />
                <p className="text-white/80 leading-relaxed mb-6 relative z-10">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-white/70">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black" data-animate="cta">
        <div className="container-custom">
          <div className={`max-w-3xl mx-auto text-center rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-10 md:p-14 shadow-[0_20px_80px_rgba(0,0,0,0.55)] ${visibleSections.cta ? "animate-scale-in" : "opacity-0"}`}>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6 tracking-tight">
              Prêt à transformer votre entreprise ?
            </h2>
            <p className="text-white/70 text-lg mb-8 leading-relaxed">
              Contactez-nous dès aujourd'hui pour discuter de votre projet et découvrir comment nous pouvons vous aider à atteindre vos objectifs.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="xl" className="rounded-full">
                Démarrer votre projet
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

export default Index;
