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

    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Message envoyé !",
      description: "Nous vous répondrons dans les plus brefs délais.",
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const contactInfo = [
    { icon: Mail, title: "Email", value: "contact@mak-tg.com", link: "mailto:contact@mak-tg.com" },
    { icon: Phone, title: "Téléphone", value: "+228 XX XX XX XX", link: "tel:+228XXXXXXXX" },
    { icon: MapPin, title: "Localisation", value: "Lomé, Togo", link: null },
    { icon: Clock, title: "Horaires", value: "Lun - Ven: 8h - 18h", link: null },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Base */}
        <div className="absolute inset-0 bg-black" />

        {/* Glow blobs */}
        <div className="absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-[520px] h-[520px] rounded-full bg-white/10 blur-3xl" />

        {/* Gradient overlay */}
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
            Parlons de votre projet
          </span>

          <AnimatedTitle
            as="h1"
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 tracking-tight"
            gradient={false}
          >
            Contactez-nous
          </AnimatedTitle>

          <p className="text-base md:text-xl text-white/75 max-w-2xl mx-auto leading-relaxed animate-fade-up stagger-3">
            Notre équipe est à votre disposition pour répondre à toutes vos questions
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent" />
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-black" data-animate="contact">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className={`lg:col-span-2 ${visibleSections.contact ? "animate-slide-in-left" : "opacity-0"}`}>
              <span className="text-white/70 font-semibold mb-4 block tracking-wide">INFORMATIONS</span>

              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6 tracking-tight">
                Restons en Contact
              </h2>

              <p className="text-white/70 mb-8 leading-relaxed">
                N'hésitez pas à nous contacter pour toute question ou demande de devis. Nous sommes là pour vous accompagner dans vos projets technologiques.
              </p>

              <div className="space-y-5">
                {contactInfo.map((info) => (
                  <div
                    key={info.title}
                    className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-md shadow-[0_10px_40px_rgba(0,0,0,0.45)] hover:bg-white/[0.06] transition-colors"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center flex-shrink-0">
                      <info.icon className="text-white" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{info.title}</h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-white/70 hover:text-white transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-white/70">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className={`lg:col-span-3 ${visibleSections.contact ? "animate-slide-in-right" : "opacity-0"}`}>
              <div className="rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-8 md:p-10 shadow-[0_20px_80px_rgba(0,0,0,0.55)]">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-11 h-11 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center">
                    <MessageSquare className="text-white" size={20} />
                  </div>
                  <h3 className="font-heading font-semibold text-white text-xl">
                    Envoyez-nous un message
                  </h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                        Nom complet
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full h-12 px-4 rounded-2xl border border-white/10 bg-black/40 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/20 transition-all"
                        placeholder="Votre nom"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                        Adresse email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full h-12 px-4 rounded-2xl border border-white/10 bg-black/40 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/20 transition-all"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-white mb-2">
                      Sujet
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full h-12 px-4 rounded-2xl border border-white/10 bg-black/40 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/20 transition-all"
                      placeholder="Sujet de votre message"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-2xl border border-white/10 bg-black/40 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/20 transition-all resize-none"
                      placeholder="Décrivez votre projet ou votre demande..."
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="w-full sm:w-auto rounded-full"
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

                <p className="text-white/50 text-xs mt-6">
                  En soumettant ce formulaire, vous acceptez notre politique de confidentialité.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-black" data-animate="faq">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2
              className={`text-3xl md:text-4xl font-heading font-bold text-white mb-8 tracking-tight ${
                visibleSections.faq ? "animate-title" : "opacity-0"
              }`}
            >
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
                  className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-6 shadow-[0_10px_40px_rgba(0,0,0,0.45)] hover:bg-white/[0.06] transition-colors"
                >
                  <h3 className="font-heading font-semibold text-white mb-2">{item.q}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{item.a}</p>
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
