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
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 flex items-center justify-center gradient-bg">
        <div className="container-custom text-center py-20">
          <div className="mb-8">
            <span className="text-8xl md:text-9xl font-heading font-bold text-white/20">404</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Page non trouvée
          </h1>
          <p className="text-white/70 text-lg mb-8 max-w-md mx-auto">
            Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button variant="heroOutline" size="lg">
                <Home className="mr-2" size={18} />
                Retour à l'accueil
              </Button>
            </Link>
            <Button
              variant="glass"
              size="lg"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="mr-2" size={18} />
              Page précédente
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NotFound;
