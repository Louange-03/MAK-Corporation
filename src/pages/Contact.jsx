import React, { useEffect, useState } from "react";
import { Mail, Phone, MapPin, Send, Clock, MessageSquare } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AnimatedTitle from "../components/AnimatedTitle";
import { Button } from "../components/ui/button";
import { toast } from "../hooks/use-toast";

const Contact = () => {
  const [visibleSections, setVisibleSections] = useState({});
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Message envoyé !",
      description: "Nous vous répondrons dans les plus brefs délais.",
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "contact@mak-tg.com",
      link: "mailto:contact@mak-tg.com",
    },
    {
      icon: Phone,
      title: "Téléphone",
      value: "+228 XX XX XX XX",
      link: "tel:+228XXXXXXXX",
    },
    {
      icon: MapPin,
      title: "Localisation",
      value: "Lomé, Togo",
      link: null,
    },
    {
      icon: Clock,
      title: "Horaires",
      value: "Lun - Ven: 8h - 18h",
      link: null,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 gradient-bg" />
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-mak-medium/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "1.5s" }} />
        </div>
        
        <div className="container-custom relative z-10 pt-20 text-center">
          <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium border border-white/20 mb-6 animate-fade-up">
            Parlons de votre projet
          </span>
          <AnimatedTitle
            as="h1"
            className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-white mb-6"
            gradient={false}
          >
            Contactez-nous
          </AnimatedTitle>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto animate-fade-up stagger-3">
            Notre équipe est à votre disposition pour répondre à toutes vos questions
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-background" data-animate="contact">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className={`lg:col-span-2 ${visibleSections.contact ? "animate-slide-in-left" : "opacity-0"}`}>
              <span className="text-secondary font-semibold mb-4 block">INFORMATIONS</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold gradient-text mb-6">
                Restons en Contact
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                N'hésitez pas à nous contacter pour toute question ou demande de devis. Nous sommes là pour vous accompagner dans vos projets technologiques.
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <div key={info.title} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0">
                      <info.icon className="text-white" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{info.title}</h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-muted-foreground hover:text-secondary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className={`lg:col-span-3 ${visibleSections.contact ? "animate-slide-in-right" : "opacity-0"}`}>
              <div className="bg-card rounded-2xl p-8 shadow-card">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center">
                    <MessageSquare className="text-white" size={20} />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground text-xl">
                    Envoyez-nous un message
                  </h3>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Nom complet
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full h-12 px-4 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all"
                        placeholder="Votre nom"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Adresse email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full h-12 px-4 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Sujet
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full h-12 px-4 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all"
                      placeholder="Sujet de votre message"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all resize-none"
                      placeholder="Décrivez votre projet ou votre demande..."
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="w-full sm:w-auto"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        Envoyer le message
                        <Send className="ml-2" size={18} />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding gradient-bg-subtle" data-animate="faq">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className={`text-3xl md:text-4xl font-heading font-bold gradient-text mb-6 ${visibleSections.faq ? "animate-title" : "opacity-0"}`}>
              Questions Fréquentes
            </h2>
            
            <div className={`space-y-4 text-left ${visibleSections.faq ? "animate-fade-up stagger-2" : "opacity-0"}`}>
              {[
                {
                  q: "Quels sont vos délais de livraison ?",
                  a: "Les délais varient selon la complexité du projet. Un site vitrine peut être livré en 2-4 semaines, tandis qu'une application complexe peut nécessiter 2-3 mois.",
                },
                {
                  q: "Proposez-vous un support après livraison ?",
                  a: "Oui, nous offrons un support technique continu et des services de maintenance pour tous nos projets. Nous restons à vos côtés après la livraison.",
                },
                {
                  q: "Comment se déroule le processus de collaboration ?",
                  a: "Nous commençons par une consultation gratuite pour comprendre vos besoins, puis nous établissons un plan de projet détaillé avec des étapes claires et des livrables définis.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl p-6 shadow-soft"
                >
                  <h3 className="font-heading font-semibold text-foreground mb-2">{item.q}</h3>
                  <p className="text-muted-foreground text-sm">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
