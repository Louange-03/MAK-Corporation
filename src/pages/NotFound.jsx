import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "../components/ui/button";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Navbar />

      <div className="flex-1 flex items-center justify-center relative overflow-hidden bg-black">
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

        <div className="container-custom text-center py-20 relative z-10">
          <div className="mx-auto max-w-2xl">
            {/* 404 */}
            <div className="mb-8">
              <span className="text-8xl md:text-9xl font-heading font-bold text-white/15 tracking-tight">
                404
              </span>
            </div>

            {/* Card */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-8 md:p-10 shadow-[0_20px_80px_rgba(0,0,0,0.55)]">
              <h1 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4 tracking-tight">
                Page non trouvée
              </h1>

              <p className="text-white/70 text-lg mb-8 max-w-md mx-auto leading-relaxed">
                Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link to="/">
                  <Button
                    variant="outline"
                    size="lg"
                    className="rounded-full border-white/20 text-white hover:bg-white/10"
                  >
                    <Home className="mr-2" size={18} />
                    Retour à l'accueil
                  </Button>
                </Link>

                <Button
                  variant="glass"
                  size="lg"
                  className="rounded-full"
                  onClick={() => window.history.back()}
                >
                  <ArrowLeft className="mr-2" size={18} />
                  Page précédente
                </Button>
              </div>
            </div>

            {/* tiny hint line */}
            <div className="mt-8 text-white/50 text-sm">
              Chemin demandé : <span className="text-white/70">{location.pathname}</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent" />
      </div>

      <Footer />
    </div>
  );
};

export default NotFound;
