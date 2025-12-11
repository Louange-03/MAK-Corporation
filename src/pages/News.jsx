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
      excerpt: "Nous sommes fiers d'annoncer le lancement officiel de MAK Corporation, votre nouveau partenaire technologique au Togo. Découvrez nos services innovants.",
      date: "2025-01-15",
      category: "Annonce",
      readTime: "3 min",
    },
    {
      id: 2,
      title: "Nos Engagements pour l'Innovation en Afrique",
      excerpt: "MAK Corporation s'engage à développer des solutions technologiques adaptées aux réalités africaines. Découvrez notre vision pour l'avenir.",
      date: "2025-01-20",
      category: "Vision",
      readTime: "5 min",
    },
    {
      id: 3,
      title: "Partenariats Stratégiques en Vue",
      excerpt: "Nous travaillons activement à établir des partenariats avec des acteurs clés du secteur technologique pour mieux vous servir.",
      date: "2025-02-01",
      category: "Partenariat",
      readTime: "4 min",
    },
  ];

  const upcomingEvents = [
    {
      title: "Webinaire: Introduction au Développement Web",
      date: "Mars 2025",
      type: "Webinaire",
    },
    {
      title: "Atelier Cybersécurité pour PME",
      date: "Avril 2025",
      type: "Atelier",
    },
    {
      title: "Conférence Tech Africa",
      date: "Mai 2025",
      type: "Conférence",
    },
  ];

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("fr-FR", options);
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 gradient-bg" />
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-mak-medium/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "1.5s" }} />
        </div>
        
        <div className="container-custom relative z-10 pt-20 text-center">
          <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium border border-white/20 mb-6 animate-fade-up">
            Restez Informé
          </span>
          <AnimatedTitle
            as="h1"
            className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-white mb-6"
            gradient={false}
          >
            Actualités
          </AnimatedTitle>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto animate-fade-up stagger-3">
            Suivez nos dernières nouvelles, annonces et événements
          </p>
        </div>
      </section>

      {/* News Section */}
      <section className="section-padding bg-background" data-animate="news">
        <div className="container-custom">
          <SectionTitle
            title="Dernières Nouvelles"
            subtitle="Découvrez les actualités de MAK Corporation"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((news, index) => (
              <article
                key={news.id}
                className={`group bg-card rounded-2xl overflow-hidden shadow-soft card-hover ${
                  visibleSections.news ? "animate-fade-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-48 gradient-bg relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center">
                      <Tag className="text-white" size={32} />
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium">
                      {news.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {formatDate(news.date)}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} />
                      {news.readTime}
                    </span>
                  </div>
                  
                  <h3 className="font-heading font-semibold text-foreground text-lg mb-3 group-hover:text-secondary transition-colors">
                    {news.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {news.excerpt}
                  </p>
                  
                  <button className="flex items-center gap-2 text-secondary font-medium text-sm group-hover:gap-3 transition-all">
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
      <section className="section-padding gradient-bg-subtle" data-animate="events">
        <div className="container-custom">
          <SectionTitle
            title="Événements à Venir"
            subtitle="Participez à nos prochains événements et ateliers"
          />
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <div
                  key={event.title}
                  className={`bg-card rounded-xl p-6 shadow-soft flex flex-col sm:flex-row sm:items-center justify-between gap-4 card-hover ${
                    visibleSections.events ? "animate-fade-up" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0">
                      <Calendar className="text-white" size={20} />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-foreground">{event.title}</h3>
                      <p className="text-muted-foreground text-sm">{event.date} • {event.type}</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    S'inscrire
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding bg-background" data-animate="newsletter">
        <div className="container-custom">
          <div className={`max-w-2xl mx-auto text-center ${visibleSections.newsletter ? "animate-scale-in" : "opacity-0"}`}>
            <h2 className="text-3xl md:text-4xl font-heading font-bold gradient-text mb-6">
              Restez Informé
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Abonnez-vous à notre newsletter pour recevoir nos dernières actualités et offres exclusives.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 h-12 px-4 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all"
              />
              <Button variant="hero" size="lg">
                S'abonner
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg" data-animate="cta">
        <div className="container-custom">
          <div className={`max-w-3xl mx-auto text-center ${visibleSections.cta ? "animate-scale-in" : "opacity-0"}`}>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
              Une Question ou un Projet ?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Notre équipe est à votre disposition pour répondre à toutes vos questions.
            </p>
            <Link to="/contact">
              <Button variant="heroOutline" size="xl">
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
