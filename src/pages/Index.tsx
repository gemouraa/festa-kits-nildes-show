
import { useState, useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/sonner";
import KitCards from "@/components/KitCards";
import ClientInfoForm from "@/components/ClientInfoForm";
import SchedulingForm from "@/components/SchedulingForm";
import Rules from "@/components/Rules";
import AboutSection from "@/components/AboutSection";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Sparkle, Instagram, Cake, Cookie, Utensils } from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

type FlowStep = "home" | "kits" | "about" | "client-info" | "scheduling";

interface ClientData {
  name: string;
  phone: string;
}

interface SchedulingData {
  date: Date;
  time: string;
  theme: string;
}

const Index = () => {
  const [activeSection, setActiveSection] = useState<FlowStep>("home");
  const [selectedKit, setSelectedKit] = useState<any>(null);
  const [clientData, setClientData] = useState<ClientData | null>(null);
  const [welcomeVisible, setWelcomeVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const isHeroInView = useInView(heroRef, { once: false, amount: 0.5 });
  
  useEffect(() => {
    setTimeout(() => {
      setWelcomeVisible(true);
    }, 500);

    toast("Bem-vindo à Nildes Festas!", {
      description: "Onde cada detalhe é feito com carinho!",
      duration: 5000,
    });
  }, []);

  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/nildes_festass/", "_blank");
  };

  const handleSelectKit = (kit: any) => {
    setSelectedKit(kit);
    setActiveSection("client-info");
  };

  const handleClientInfo = (data: ClientData) => {
    setClientData(data);
    setActiveSection("scheduling");
  };

  const handleSchedulingConfirm = (schedulingData: SchedulingData) => {
    if (!selectedKit || !clientData) return;

    const formattedDate = format(schedulingData.date, "dd/MM/yyyy", { locale: ptBR });
    const message = `Olá, quero este kit: ${selectedKit.name}
Para o dia: ${formattedDate} às ${schedulingData.time}
Com o tema: ${schedulingData.theme}
Por favor, me envie a chave Pix.

Cliente: ${clientData.name}
Telefone: ${clientData.phone}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5571987679861?text=${encodedMessage}`, "_blank");
    
    // Reset flow
    setActiveSection("home");
    setSelectedKit(null);
    setClientData(null);
    
    toast("Redirecionando para WhatsApp!", {
      description: "Sua mensagem foi preparada automaticamente.",
      duration: 3000,
    });
  };

  const handleBack = () => {
    switch (activeSection) {
      case "client-info":
        setActiveSection("kits");
        setSelectedKit(null);
        break;
      case "scheduling":
        setActiveSection("client-info");
        break;
      default:
        setActiveSection("home");
    }
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
        <p className="font-medium text-gray-700 text-sm sm:text-base">{text}</p>
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

  // Show client info form
  if (activeSection === "client-info" && selectedKit) {
    return (
      <ClientInfoForm
        kitName={selectedKit.name}
        onNext={handleClientInfo}
        onBack={handleBack}
      />
    );
  }

  // Show scheduling form
  if (activeSection === "scheduling" && selectedKit && clientData) {
    return (
      <SchedulingForm
        kitName={selectedKit.name}
        clientData={clientData}
        onConfirm={handleSchedulingConfirm}
        onBack={handleBack}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sky-50">
      {/* Hero Section - Always visible */}
      <div ref={heroRef} className="flex flex-col items-center justify-center min-h-screen px-4 py-8 sm:py-12 text-center">
        <div className="absolute top-4 right-4 z-10">
          <Button 
            onClick={handleInstagramClick} 
            variant="ghost" 
            size="icon" 
            className="bg-gradient-to-br from-purple-400 to-pink-500 text-white rounded-full hover:shadow-lg hover:from-purple-500 hover:to-pink-600 p-2"
          >
            <Instagram className="h-5 w-5 sm:h-6 sm:w-6" />
            <span className="sr-only">Instagram</span>
          </Button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl w-full"
        >
          <motion.div 
            className="mb-4 sm:mb-6 flex justify-center"
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
                className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6"
              >
                <Sparkle className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-400" />
              </motion.span>
            </div>
          </motion.div>

          <div className="mb-6 sm:mb-8">
            <div className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-sky-400 font-poppins mb-2">
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
                className="text-base sm:text-lg md:text-xl text-gray-600 font-poppins"
              >
                <TextReveal text="Onde cada detalhe é feito com carinho!" delay={0.4} />
              </motion.p>
            )}
          </div>

          <motion.div
            className="flex flex-col space-y-3 sm:space-y-4 mt-6 sm:mt-8 max-w-lg mx-auto"
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
              text="Agendamento fácil pelo WhatsApp" 
              delay={1} 
            />
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-8 sm:mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <Button
              onClick={() => setActiveSection(activeSection === "kits" ? "home" : "kits")}
              className={`px-6 sm:px-8 py-3 sm:py-6 text-base sm:text-lg font-medium transition-all duration-300 transform ${
                activeSection === "kits" 
                  ? "bg-purple-500 hover:bg-purple-600" 
                  : "bg-sky-400 hover:bg-sky-500"
              } text-white hover:-translate-y-1 hover:shadow-lg rounded-full font-poppins w-full sm:w-auto`}
            >
              {activeSection === "kits" ? "Voltar" : "Ver Kits Festas"}
            </Button>
            
            <Button
              onClick={() => setActiveSection(activeSection === "about" ? "home" : "about")}
              className={`px-6 sm:px-8 py-3 sm:py-6 text-base sm:text-lg font-medium transition-all duration-300 transform ${
                activeSection === "about" 
                  ? "bg-purple-500 hover:bg-purple-600" 
                  : "bg-sky-400 hover:bg-sky-500"
              } text-white hover:-translate-y-1 hover:shadow-lg rounded-full font-poppins w-full sm:w-auto`}
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
            className="px-4 py-8 sm:py-12 bg-gradient-to-b from-sky-50 to-white"
          >
            <div className="container mx-auto max-w-7xl">
              <motion.h2 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mb-8 sm:mb-12 text-2xl sm:text-3xl font-bold text-center text-purple-600 font-poppins"
              >
                Nossos Kits
              </motion.h2>
              <KitCards onSelectKit={handleSelectKit} />
              
              <div className="mt-12 sm:mt-16">
                <motion.h3 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="mb-4 sm:mb-6 text-xl sm:text-2xl font-bold text-center text-purple-600 font-poppins"
                >
                  Regras Gerais
                </motion.h3>
                <Card className="p-4 sm:p-6 overflow-hidden transition-all duration-300 shadow-md hover:shadow-lg">
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
