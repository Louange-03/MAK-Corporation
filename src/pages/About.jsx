import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Target,
  Heart,
  Users,
  Lightbulb,
  ArrowRight,
  Linkedin,
  Twitter,
  Mail,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SectionTitle from "../components/SectionTitle";
import AnimatedTitle from "../components/AnimatedTitle";
import { Button } from "../components/ui/button";
import aboutTeam from "../assets/about-team.jpg";

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
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* base */}
        <div className="absolute inset-0 bg-black" />

        {/* glows / decorations */}
        <div className="absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-[520px] h-[520px] rounded-full bg-white/10 blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.06] via-transparent to-transparent" />

        {/* subtle grid */}
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
            Notre Histoire
          </span>

          <AnimatedTitle
            as="h1"
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white tracking-tight mb-6"
            gradient={false}
          >
            À Propos de Nous
          </AnimatedTitle>

          <p className="text-base md:text-xl text-white/75 max-w-2xl mx-auto leading-relaxed animate-fade-up stagger-3">
            Découvrez l'histoire et les valeurs de MAK Corporation
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/services">
              <Button variant="hero" size="lg" className="rounded-full">
                Découvrir nos services <ArrowRight className="ml-2" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                variant="outline"
                size="lg"
                className="rounded-full border-white/20 text-white hover:bg-white/10"
              >
                Nous contacter
              </Button>
            </Link>
          </div>
        </div>

        {/* fade bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent" />
      </section>

      {/* HISTOIRE */}
      <section className="section-padding bg-black" data-animate="story">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={visibleSections.story ? "animate-slide-in-left" : "opacity-0"}>
              <span className="text-white/70 font-semibold mb-4 block tracking-wide">
                NOTRE HISTOIRE
              </span>

              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6 tracking-tight">
                Une vision née de la passion
              </h2>

              <p className="text-white/70 text-lg leading-relaxed mb-6">
                Fondée en 2025 au Togo, MAK Corporation est née de la vision d'entrepreneurs passionnés par la technologie.
              </p>
              <p className="text-white/70 leading-relaxed">
                Notre mission : rendre les solutions technologiques accessibles et adaptées aux réalités africaines.
              </p>

              <div className="mt-8 flex items-center gap-3">
                <div className="h-px w-12 bg-white/20" />
                <span className="text-white/60 text-sm">MAK Corporation</span>
              </div>
            </div>

            <div className={`relative ${visibleSections.story ? "animate-slide-in-right" : "opacity-0"}`}>
              <div className="absolute -inset-4 rounded-3xl bg-white/5 blur-xl" />
              <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 shadow-[0_20px_80px_rgba(0,0,0,0.55)]">
                <img
                  src={aboutTeam}
                  alt="Équipe MAK Corporation"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="section-padding bg-black" data-animate="mission">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2
              className={`text-3xl md:text-4xl font-heading font-bold text-white mb-10 tracking-tight ${
                visibleSections.mission ? "animate-fade-up" : "opacity-0"
              }`}
            >
              Notre Engagement
            </h2>

            <div
              className={`rounded-3xl p-8 md:p-12 border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_20px_80px_rgba(0,0,0,0.55)] ${
                visibleSections.mission ? "animate-scale-in" : "opacity-0"
              }`}
            >
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center">
                    <Target className="text-white" size={22} />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-white text-lg mb-2">
                      Notre Mission
                    </h3>
                    <p className="text-white/70 leading-relaxed">
                      Développer des solutions innovantes pour l'épanouissement des populations africaines.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center">
                    <Lightbulb className="text-white" size={22} />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-white text-lg mb-2">
                      Notre Vision
                    </h3>
                    <p className="text-white/70 leading-relaxed">
                      Devenir le partenaire technologique de référence en Afrique de l'Ouest.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 h-px bg-white/10" />

              <div className="mt-8 grid sm:grid-cols-3 gap-4 text-left">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-white/70 text-sm">Approche</p>
                  <p className="text-white font-semibold mt-1">Centrée utilisateur</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-white/70 text-sm">Qualité</p>
                  <p className="text-white font-semibold mt-1">Livrables solides</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-white/70 text-sm">Impact</p>
                  <p className="text-white font-semibold mt-1">Solutions utiles</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALEURS */}
      <section className="section-padding bg-black" data-animate="values">
        <div className="container-custom">
          <SectionTitle title="Nos Valeurs Fondamentales" subtitle="Les principes qui guident nos actions" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className={`group rounded-3xl p-7 border border-white/10 bg-white/[0.04] backdrop-blur-md hover:bg-white/[0.06] hover:border-white/15 transition-all duration-300 shadow-[0_10px_40px_rgba(0,0,0,0.45)] ${
                  visibleSections.values ? "animate-fade-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center mb-5 group-hover:scale-[1.03] transition-transform duration-300">
                  <value.icon className="text-white" size={24} />
                </div>
                <h3 className="font-heading font-semibold text-white text-lg mb-2">
                  {value.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="section-padding bg-black" data-animate="team">
        <div className="container-custom">
          <SectionTitle title="Notre Équipe" subtitle="Des professionnels passionnés" light />

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-10">
            {team.map((member, index) => (
              <div
                key={member.name}
                className={`${visibleSections.team ? "animate-fade-up" : "opacity-0"}`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-[0_20px_80px_rgba(0,0,0,0.6)]">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-heading font-semibold text-white text-lg">
                      {member.name}
                    </h3>
                    <p className="text-white/70 text-sm mb-4">
                      {member.role}
                    </p>

                    <div className="flex gap-2">
                      {[Linkedin, Twitter, Mail].map((Icon, i) => (
                        <a
                          key={i}
                          href="#"
                          className="w-9 h-9 rounded-full border border-white/15 bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white/20 hover:border-white/25 transition-colors"
                        >
                          <Icon size={15} className="text-white" />
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className="absolute inset-0 ring-1 ring-white/0 group-hover:ring-white/10 transition" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-black" data-animate="join">
        <div className="container-custom">
          <div
            className={`max-w-4xl mx-auto text-center rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-10 md:p-14 shadow-[0_20px_80px_rgba(0,0,0,0.55)] ${
              visibleSections.join ? "animate-scale-in" : "opacity-0"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-5 tracking-tight">
              Rejoindre notre équipe
            </h2>

            <p className="text-white/70 text-lg mb-8 leading-relaxed">
              Vous êtes passionné par la technologie ? Rejoignez une équipe dynamique et innovante.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/contact">
                <Button variant="hero" size="lg" className="rounded-full">
                  Postuler maintenant <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full border-white/20 text-white hover:bg-white/10"
                >
                  Nous contacter
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
