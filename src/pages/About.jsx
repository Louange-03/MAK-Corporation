import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Target, Heart, Users, Lightbulb, ArrowRight, Linkedin, Twitter, Mail } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SectionTitle from "../components/SectionTitle";
import AnimatedTitle from "../components/AnimatedTitle";
import { Button } from "../components/ui/button";
import aboutTeam from "../assets/about-team.jpg";

// Ici on utilise tes vrais fichiers image
import teamCeo from "../assets/PDg.jpg";
import teamDg from "../assets/DG.jpg";
import teamSecretary from "../assets/SECRE.jpg";

const About = () => {
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

  const values = [
    { icon: Target, title: "Excellence", description: "Nous visons l'excellence dans chaque projet." },
    { icon: Heart, title: "Intégrité", description: "L'honnêteté et la transparence sont au cœur de nos relations." },
    { icon: Lightbulb, title: "Innovation", description: "Nous adoptons les dernières technologies." },
    { icon: Users, title: "Collaboration", description: "Le travail d'équipe est essentiel à notre réussite." },
  ];

  const team = [
    { name: "Nom du PDG", role: "Président Directeur Général", image: teamCeo },
    { name: "Nom du DG", role: "Directeur Général", image: teamDg },
    { name: "Nom de la Secrétaire", role: "Secrétaire de Direction", image: teamSecretary },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 gradient-bg" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse-slow" />
        </div>
        <div className="container-custom relative z-10 pt-20 text-center">
          <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium border border-white/20 mb-6 animate-fade-up">Notre Histoire</span>
          <AnimatedTitle as="h1" className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-white mb-6" gradient={false}>À Propos de Nous</AnimatedTitle>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto animate-fade-up stagger-3">Découvrez l'histoire et les valeurs de MAK Corporation</p>
        </div>
      </section>

      <section className="section-padding bg-background" data-animate="story">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={visibleSections.story ? "animate-slide-in-left" : "opacity-0"}>
              <span className="text-secondary font-semibold mb-4 block">NOTRE HISTOIRE</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold gradient-text mb-6">Une vision née de la passion</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">Fondée en 2025 au Togo, MAK Corporation est née de la vision d'entrepreneurs passionnés par la technologie.</p>
              <p className="text-muted-foreground leading-relaxed">Notre mission : rendre les solutions technologiques accessibles et adaptées aux réalités africaines.</p>
            </div>
            <div className={`relative ${visibleSections.story ? "animate-slide-in-right" : "opacity-0"}`}>
              <div className="absolute -inset-4 bg-gradient-to-r from-mak-medium/20 to-mak-night/20 rounded-2xl blur-xl" />
              <img src={aboutTeam} alt="Équipe MAK Corporation" className="relative rounded-2xl shadow-card w-full" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding gradient-bg-subtle" data-animate="mission">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className={`text-3xl md:text-4xl font-heading font-bold gradient-text mb-8 ${visibleSections.mission ? "animate-fade-up" : "opacity-0"}`}>Notre Engagement</h2>
            <div className={`bg-card rounded-2xl p-8 md:p-12 shadow-card ${visibleSections.mission ? "animate-scale-in" : "opacity-0"}`}>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0"><Target className="text-white" size={24} /></div>
                  <div><h3 className="font-heading font-semibold text-foreground text-lg mb-2">Notre Mission</h3><p className="text-muted-foreground">Développer des solutions innovantes pour l'épanouissement des populations africaines.</p></div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0"><Lightbulb className="text-white" size={24} /></div>
                  <div><h3 className="font-heading font-semibold text-foreground text-lg mb-2">Notre Vision</h3><p className="text-muted-foreground">Devenir le partenaire technologique de référence en Afrique de l'Ouest.</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background" data-animate="values">
        <div className="container-custom">
          <SectionTitle title="Nos Valeurs Fondamentales" subtitle="Les principes qui guident nos actions" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={value.title} className={`group bg-card rounded-2xl p-6 shadow-soft card-hover text-center ${visibleSections.values ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"><value.icon className="text-white" size={28} /></div>
                <h3 className="font-heading font-semibold text-foreground text-lg mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding gradient-bg" data-animate="team">
        <div className="container-custom">
          <SectionTitle title="Notre Équipe" subtitle="Des professionnels passionnés" light />
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <div key={member.name} className={`group ${visibleSections.team ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-mak-dark/90 via-transparent to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-heading font-semibold text-white text-lg">{member.name}</h3>
                    <p className="text-white/70 text-sm mb-4">{member.role}</p>
                    <div className="flex gap-2">
                      {[Linkedin, Twitter, Mail].map((Icon, i) => (<a key={i} href="#" className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-secondary transition-colors duration-300"><Icon size={14} className="text-white" /></a>))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-background" data-animate="join">
        <div className="container-custom">
          <div className={`max-w-3xl mx-auto text-center ${visibleSections.join ? "animate-scale-in" : "opacity-0"}`}>
            <h2 className="text-3xl md:text-4xl font-heading font-bold gradient-text mb-6">Rejoindre notre équipe</h2>
            <p className="text-muted-foreground text-lg mb-8">Vous êtes passionné par la technologie ? Rejoignez une équipe dynamique et innovante.</p>
            <Link to="/contact"><Button variant="hero" size="lg">Postuler maintenant<ArrowRight className="ml-2" /></Button></Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
