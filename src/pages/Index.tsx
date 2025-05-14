
import { useState, useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/sonner";
import KitCards from "@/components/KitCards";
import Rules from "@/components/Rules";
import AboutSection from "@/components/AboutSection";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Sparkle, Instagram, Cake, Cookie, Utensils } from "lucide-react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [welcomeVisible, setWelcomeVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const isHeroInView = useInView(heroRef, { once: false, amount: 0.5 });
  
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

  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/nildes_festass/", "_blank");
  };

  const FeaturePoint = ({ icon, text, delay }: { icon: React.ReactNode, text: string, delay: number }) => {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay }}
        className="flex items-center space-x-3 bg-white/60 p-3 rounded-lg shadow-sm"
      >
        <div className="p-2 bg-sky-100 rounded-full">
          {icon}
        </div>
        <p className="font-medium text-gray-700">{text}</p>
      </motion.div>
    );
  };

  const TextReveal = ({ text, delay = 0 }: { text: string, delay?: number }) => {
    return (
      <div className="overflow-hidden">
        <motion.div
          initial={{ y: 100 }}
          animate={isHeroInView ? { y: 0 } : { y: 100 }}
          transition={{ duration: 0.8, delay }}
        >
          {text}
        </motion.div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sky-50">
      {/* Hero Section - Always visible */}
      <div ref={heroRef} className="flex flex-col items-center justify-center min-h-screen px-4 py-12 text-center">
        <div className="absolute top-4 right-4 z-10">
          <Button 
            onClick={handleInstagramClick} 
            variant="ghost" 
            size="icon" 
            className="bg-gradient-to-br from-purple-400 to-pink-500 text-white rounded-full hover:shadow-lg hover:from-purple-500 hover:to-pink-600 p-2"
          >
            <Instagram className="h-6 w-6" />
            <span className="sr-only">Instagram</span>
          </Button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <motion.div 
            className="mb-6 flex justify-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, type: "spring", stiffness: 100 }}
          >
            <div className="relative w-full max-w-xs">
              <img 
                src="/lovable-uploads/92ff1ab1-5c2d-43bd-861c-86a50f75be1f.png" 
                alt="Nildes Festas" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute -top-6 -right-6"
              >
                <Sparkle className="w-10 h-10 text-yellow-400" />
              </motion.span>
            </div>
          </motion.div>

          <div className="mb-8">
            <div className="text-5xl font-extrabold tracking-tight text-sky-400 md:text-6xl lg:text-7xl font-poppins mb-2">
              {welcomeVisible && (
                <div className="overflow-hidden">
                  <TextReveal text="Nildes Festas" delay={0.2} />
                </div>
              )}
            </div>
            {welcomeVisible && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.5 }}
                className="text-lg text-gray-600 md:text-xl font-poppins"
              >
                <TextReveal text="Onde cada detalhe é feito com carinho!" delay={0.4} />
              </motion.p>
            )}
          </div>

          <motion.div
            className="flex flex-col space-y-4 mt-8 max-w-lg mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <FeaturePoint 
              icon={<Cake className="text-sky-500" />} 
              text="Kits personalizados para cada ocasião" 
              delay={0.6} 
            />
            <FeaturePoint 
              icon={<Cookie className="text-sky-500" />} 
              text="Feito com carinho e ingredientes de qualidade" 
              delay={0.8} 
            />
            <FeaturePoint 
              icon={<Utensils className="text-sky-500" />} 
              text="Atendimento rápido pelo WhatsApp e Instagram" 
              delay={1} 
            />
          </motion.div>

          <motion.div
            className="flex flex-wrap items-center justify-center gap-4 mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <Button
              onClick={() => setActiveSection(activeSection === "kits" ? "home" : "kits")}
              className={`px-8 py-6 text-lg font-medium transition-all duration-300 transform ${
                activeSection === "kits" 
                  ? "bg-purple-500 hover:bg-purple-600" 
                  : "bg-sky-400 hover:bg-sky-500"
              } text-white hover:-translate-y-1 hover:shadow-lg rounded-full font-poppins`}
            >
              {activeSection === "kits" ? "Voltar" : "Ver Kits Festas"}
            </Button>
            
            <Button
              onClick={() => setActiveSection(activeSection === "about" ? "home" : "about")}
              className={`px-8 py-6 text-lg font-medium transition-all duration-300 transform ${
                activeSection === "about" 
                  ? "bg-purple-500 hover:bg-purple-600" 
                  : "bg-sky-400 hover:bg-sky-500"
              } text-white hover:-translate-y-1 hover:shadow-lg rounded-full font-poppins`}
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
                className="mb-12 text-3xl font-bold text-center text-purple-600 font-poppins"
              >
                Nossos Kits
              </motion.h2>
              <KitCards />
              
              <div className="mt-16">
                <motion.h3 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="mb-6 text-2xl font-bold text-center text-purple-600 font-poppins"
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
