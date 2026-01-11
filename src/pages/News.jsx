import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight, Clock, Tag } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SectionTitle from "../components/SectionTitle";
import AnimatedTitle from "../components/AnimatedTitle";
import { Button } from "../components/ui/button";

const News = () => {
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

  const newsItems = [
    {
      id: 1,
      title: "Lancement Officiel de MAK Corporation",
      excerpt:
        "Nous sommes fiers d'annoncer le lancement officiel de MAK Corporation, votre nouveau partenaire technologique au Togo. Découvrez nos services innovants.",
      date: "2025-01-15",
      category: "Annonce",
      readTime: "3 min",
    },
    {
      id: 2,
      title: "Nos Engagements pour l'Innovation en Afrique",
      excerpt:
        "MAK Corporation s'engage à développer des solutions technologiques adaptées aux réalités africaines. Découvrez notre vision pour l'avenir.",
      date: "2025-01-20",
      category: "Vision",
      readTime: "5 min",
    },
    {
      id: 3,
      title: "Partenariats Stratégiques en Vue",
      excerpt:
        "Nous travaillons activement à établir des partenariats avec des acteurs clés du secteur technologique pour mieux vous servir.",
      date: "2025-02-01",
      category: "Partenariat",
      readTime: "4 min",
    },
  ];

  const upcomingEvents = [
    { title: "Webinaire: Introduction au Développement Web", date: "Mars 2025", type: "Webinaire" },
    { title: "Atelier Cybersécurité pour PME", date: "Avril 2025", type: "Atelier" },
    { title: "Conférence Tech Africa", date: "Mai 2025", type: "Conférence" },
  ];

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("fr-FR", options);
  };

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
            Restez Informé
          </span>

          <AnimatedTitle
            as="h1"
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 tracking-tight"
            gradient={false}
          >
            Actualités
          </AnimatedTitle>

          <p className="text-base md:text-xl text-white/75 max-w-2xl mx-auto leading-relaxed animate-fade-up stagger-3">
            Suivez nos dernières nouvelles, annonces et événements
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent" />
      </section>

      {/* News Section */}
      <section className="section-padding bg-black" data-animate="news">
        <div className="container-custom">
          <SectionTitle title="Dernières Nouvelles" subtitle="Découvrez les actualités de MAK Corporation" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((news, index) => (
              <article
                key={news.id}
                className={`group rounded-3xl overflow-hidden border border-white/10 bg-white/[0.04] backdrop-blur-md shadow-[0_20px_80px_rgba(0,0,0,0.55)] hover:bg-white/[0.06] transition-colors ${
                  visibleSections.news ? "animate-fade-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-48 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.10] via-white/[0.04] to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-white/10 border border-white/10 backdrop-blur-md flex items-center justify-center">
                      <Tag className="text-white" size={32} />
                    </div>
                  </div>

                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/10 border border-white/10 backdrop-blur-md rounded-full text-white text-xs font-medium">
                      {news.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-white/70 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {formatDate(news.date)}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} />
                      {news.readTime}
                    </span>
                  </div>

                  <h3 className="font-heading font-semibold text-white text-lg mb-3 transition-colors">
                    {news.title}
                  </h3>

                  <p className="text-white/70 text-sm leading-relaxed mb-5">
                    {news.excerpt}
                  </p>

                  <button className="flex items-center gap-2 text-white font-medium text-sm group-hover:gap-3 transition-all">
                    Lire la suite
                    <ArrowRight size={16} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section-padding bg-black" data-animate="events">
        <div className="container-custom">
          <SectionTitle title="Événements à Venir" subtitle="Participez à nos prochains événements et ateliers" />

          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <div
                  key={event.title}
                  className={`rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-6 shadow-[0_10px_40px_rgba(0,0,0,0.45)] flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-white/[0.06] transition-colors ${
                    visibleSections.events ? "animate-fade-up" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-md flex items-center justify-center flex-shrink-0">
                      <Calendar className="text-white" size={20} />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-white">{event.title}</h3>
                      <p className="text-white/70 text-sm">
                        {event.date} • {event.type}
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-full border-white/20 text-white hover:bg-white/10"
                  >
                    S'inscrire
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding bg-black" data-animate="newsletter">
        <div className="container-custom">
          <div
            className={`max-w-2xl mx-auto text-center rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-8 md:p-12 shadow-[0_20px_80px_rgba(0,0,0,0.55)] ${
              visibleSections.newsletter ? "animate-scale-in" : "opacity-0"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6 tracking-tight">
              Restez Informé
            </h2>
            <p className="text-white/70 text-lg mb-8 leading-relaxed">
              Abonnez-vous à notre newsletter pour recevoir nos dernières actualités et offres exclusives.
            </p>

            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 h-12 px-4 rounded-2xl border border-white/10 bg-black/40 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/20 transition-all"
              />
              <Button variant="hero" size="lg" className="rounded-full">
                S'abonner
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black" data-animate="cta">
        <div className="container-custom">
          <div
            className={`max-w-3xl mx-auto text-center rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-10 md:p-14 shadow-[0_20px_80px_rgba(0,0,0,0.55)] ${
              visibleSections.cta ? "animate-scale-in" : "opacity-0"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6 tracking-tight">
              Une Question ou un Projet ?
            </h2>
            <p className="text-white/70 text-lg mb-8 leading-relaxed">
              Notre équipe est à votre disposition pour répondre à toutes vos questions.
            </p>
            <Link to="/contact">
              <Button
                variant="outline"
                size="xl"
                className="rounded-full border-white/20 text-white hover:bg-white/10"
              >
                Contactez-nous
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

export default News;
