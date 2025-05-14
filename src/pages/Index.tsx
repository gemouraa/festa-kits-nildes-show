
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/sonner";
import KitCards from "@/components/KitCards";
import Rules from "@/components/Rules";
import { motion } from "framer-motion";

const Index = () => {
  const [showKits, setShowKits] = useState(false);
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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-sky-300 md:text-6xl lg:text-7xl font-playfair">
            Nildes Festas
          </h1>

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
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <Button
              onClick={() => setShowKits(!showKits)}
              className="px-8 py-6 text-lg font-medium bg-sky-300 hover:bg-sky-400 text-white"
            >
              {showKits ? "Voltar" : "Ver Kits Festas"}
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Kits Section */}
      {showKits && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="px-4 py-12 bg-sky-50"
        >
          <div className="container mx-auto">
            <h2 className="mb-12 text-3xl font-bold text-center text-sky-700">
              Nossos Kits
            </h2>
            <KitCards />
            
            <div className="mt-16">
              <h3 className="mb-6 text-2xl font-bold text-center text-sky-700">
                Regras Gerais
              </h3>
              <Card className="p-6 shadow-md">
                <Rules />
              </Card>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Index;
