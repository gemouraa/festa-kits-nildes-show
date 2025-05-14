
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/sonner";
import KitCards from "@/components/KitCards";
import Rules from "@/components/Rules";
import AboutSection from "@/components/AboutSection";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkle } from "lucide-react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [welcomeVisible, setWelcomeVisible] = useState(false);

  useEffect(() => {
    // Display welcome message with animation
    setTimeout(() => {
      setWelcomeVisible(true);
    }, 500);

    // Show welcome toast
    toast("Bem-vindo à Nildes Festas!", {
      description: "Onde cada detalhe é feito com carinho!",
      duration: 5000,
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sky-50">
      {/* Hero Section - Always visible */}
      <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              duration: 1.2, 
              type: "spring", 
              stiffness: 100 
            }}
          >
            <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-sky-400 md:text-6xl lg:text-7xl font-playfair">
              <span className="relative inline-block">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="absolute -top-6 -right-6"
                >
                  <Sparkle className="w-8 h-8 text-yellow-400" />
                </motion.span>
                Nildes Festas
              </span>
            </h1>
          </motion.div>

          {welcomeVisible && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.5 }}
              className="mb-8 text-lg text-gray-600 md:text-xl"
            >
              Bem-vindo à Nildes Festas, onde cada detalhe é feito com carinho!
            </motion.p>
          )}

          <motion.div
            className="flex flex-wrap items-center justify-center gap-4 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <Button
              onClick={() => setActiveSection(activeSection === "kits" ? "home" : "kits")}
              className={`px-8 py-6 text-lg font-medium transition-all duration-300 transform ${
                activeSection === "kits" 
                  ? "bg-purple-500 hover:bg-purple-600" 
                  : "bg-sky-400 hover:bg-sky-500"
              } text-white hover:-translate-y-1 hover:shadow-lg`}
            >
              {activeSection === "kits" ? "Voltar" : "Ver Kits Festas"}
            </Button>
            
            <Button
              onClick={() => setActiveSection(activeSection === "about" ? "home" : "about")}
              className={`px-8 py-6 text-lg font-medium transition-all duration-300 transform ${
                activeSection === "about" 
                  ? "bg-purple-500 hover:bg-purple-600" 
                  : "bg-sky-400 hover:bg-sky-500"
              } text-white hover:-translate-y-1 hover:shadow-lg`}
            >
              {activeSection === "about" ? "Voltar" : "Sobre Nós"}
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Content Sections */}
      <AnimatePresence mode="wait">
        {/* Kits Section */}
        {activeSection === "kits" && (
          <motion.div
            key="kits"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="px-4 py-12 bg-gradient-to-b from-sky-50 to-white"
          >
            <div className="container mx-auto">
              <motion.h2 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mb-12 text-3xl font-bold text-center text-purple-600"
              >
                Nossos Kits
              </motion.h2>
              <KitCards />
              
              <div className="mt-16">
                <motion.h3 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="mb-6 text-2xl font-bold text-center text-purple-600"
                >
                  Regras Gerais
                </motion.h3>
                <Card className="p-6 overflow-hidden transition-all duration-300 shadow-md hover:shadow-lg">
                  <Rules />
                </Card>
              </div>
            </div>
          </motion.div>
        )}

        {/* About Section */}
        {activeSection === "about" && (
          <motion.div
            key="about"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
          >
            <AboutSection />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
