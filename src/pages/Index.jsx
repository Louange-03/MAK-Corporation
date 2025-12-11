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
    {
      icon: Code,
      title: "Développement Web",
      description: "Sites web modernes et applications sur mesure",
      image: serviceWeb,
    },
    {
      icon: Smartphone,
      title: "Applications Mobile",
      description: "Apps iOS et Android performantes",
      image: serviceMobile,
    },
    {
      icon: Server,
      title: "Systèmes & Réseaux",
      description: "Infrastructure IT robuste et sécurisée",
      image: serviceNetwork,
    },
    {
      icon: Shield,
      title: "Cybersécurité",
      description: "Protection de vos données et systèmes",
      image: serviceSecurity,
    },
  ];

  const reasons = [
    { title: "Expertise Locale", desc: "Une équipe togolaise qui comprend vos besoins" },
    { title: "Innovation", desc: "Les dernières technologies au service de votre croissance" },
    { title: "Support 24/7", desc: "Un accompagnement continu pour votre succès" },
    { title: "Prix Compétitifs", desc: "Des solutions adaptées à tous les budgets" },
  ];

  const testimonials = [
    {
      name: "Kofi Mensah",
      role: "Directeur, TechStart Lomé",
      text: "MAK Corporation a transformé notre vision en réalité. Leur équipe est professionnelle et réactive.",
    },
    {
      name: "Ama Adjovi",
      role: "CEO, AgriTech Solutions",
      text: "Un partenaire de confiance pour tous nos projets digitaux. Je recommande vivement leurs services.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-mak-dark/90 via-mak-night/85 to-mak-medium/80" />
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-mak-medium/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "1.5s" }} />
        </div>

        <div className="container-custom relative z-10 pt-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6 animate-fade-up">
              <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium border border-white/20">
                🚀 L'innovation au service de l'Afrique
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-white mb-6 leading-tight">
              <span className="block animate-fade-up stagger-1">Bienvenue chez</span>
              <AnimatedTitle 
                as="span" 
                className="text-5xl md:text-6xl lg:text-8xl block mt-2"
                gradient={false}
              >
                MAK Corporation
              </AnimatedTitle>
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto animate-fade-up stagger-3">
              Solutions technologiques innovantes pour le développement et l'épanouissement des populations africaines
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up stagger-4">
              <Link to="/services">
                <Button variant="hero" size="xl">
                  Découvrir nos services
                  <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="heroOutline" size="xl">
                  Nous contacter
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding gradient-bg-subtle" data-animate="about">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={visibleSections.about ? "animate-slide-in-left" : "opacity-0"}>
              <span className="text-secondary font-semibold mb-4 block">À PROPOS</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold gradient-text mb-6">
                Qui sommes-nous ?
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Fondée en 2025, MAK Corporation est une entreprise togolaise spécialisée dans les services technologiques. Notre mission est de développer des solutions informatiques innovantes qui contribuent au développement et à l'épanouissement des populations africaines.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Nous croyons en la puissance de la technologie pour transformer les entreprises et améliorer la vie quotidienne. Notre équipe d'experts passionnés travaille sans relâche pour offrir des solutions sur mesure, adaptées aux réalités locales.
              </p>
              <Link to="/a-propos">
                <Button variant="outline" size="lg">
                  En savoir plus
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>
            </div>
            
            <div className={`relative ${visibleSections.about ? "animate-slide-in-right" : "opacity-0"}`}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-mak-medium/20 to-mak-night/20 rounded-2xl blur-xl" />
                <div className="relative grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="bg-card rounded-xl p-6 shadow-card card-hover">
                      <div className="text-4xl font-heading font-bold gradient-text">5+</div>
                      <div className="text-muted-foreground text-sm">Années d'expertise</div>
                    </div>
                    <div className="bg-gradient-to-br from-mak-night to-mak-dark rounded-xl p-6 text-white">
                      <div className="text-4xl font-heading font-bold">50+</div>
                      <div className="text-white/80 text-sm">Projets réalisés</div>
                    </div>
                  </div>
                  <div className="space-y-4 mt-8">
                    <div className="bg-gradient-to-br from-secondary to-mak-medium rounded-xl p-6 text-white">
                      <div className="text-4xl font-heading font-bold">100%</div>
                      <div className="text-white/80 text-sm">Clients satisfaits</div>
                    </div>
                    <div className="bg-card rounded-xl p-6 shadow-card card-hover">
                      <div className="text-4xl font-heading font-bold gradient-text">24/7</div>
                      <div className="text-muted-foreground text-sm">Support disponible</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-background" data-animate="services">
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
                className={`group relative overflow-hidden rounded-2xl bg-card shadow-soft card-hover ${
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
                  <div className="absolute inset-0 bg-gradient-to-t from-mak-dark/90 via-mak-dark/40 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-secondary/20 backdrop-blur-sm flex items-center justify-center">
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
              <Button variant="default" size="lg">
                Voir tous nos services
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding gradient-bg relative overflow-hidden" data-animate="reasons">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        </div>
        
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
                className={`bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 ${
                  visibleSections.reasons ? "animate-fade-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/30 flex items-center justify-center mb-4">
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
      <section className="section-padding bg-background" data-animate="testimonials">
        <div className="container-custom">
          <SectionTitle
            title="Ce que disent nos clients"
            subtitle="La satisfaction de nos clients est notre plus grande fierté"
          />
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className={`relative bg-card rounded-2xl p-8 shadow-card card-hover ${
                  visibleSections.testimonials ? "animate-fade-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <Quote className="absolute top-6 right-6 text-secondary/20" size={48} />
                <p className="text-foreground leading-relaxed mb-6 relative z-10">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg-subtle" data-animate="cta">
        <div className="container-custom">
          <div className={`max-w-3xl mx-auto text-center ${visibleSections.cta ? "animate-scale-in" : "opacity-0"}`}>
            <h2 className="text-3xl md:text-4xl font-heading font-bold gradient-text mb-6">
              Prêt à transformer votre entreprise ?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Contactez-nous dès aujourd'hui pour discuter de votre projet et découvrir comment nous pouvons vous aider à atteindre vos objectifs.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="xl">
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
