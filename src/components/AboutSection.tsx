
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkle, Cake } from "lucide-react";

const AboutSection = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(aboutRef, { once: false, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="py-16 bg-gradient-to-b from-sky-50 to-white" ref={aboutRef}>
      <div className="container px-4 mx-auto">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-3xl mx-auto"
        >
          <motion.h2 
            variants={itemVariants} 
            className="mb-8 text-3xl font-bold text-center text-sky-700 font-dancing"
          >
            Sobre Nós
          </motion.h2>

          <Card className="overflow-hidden border-none shadow-lg">
            <CardContent className="p-8">
              <motion.div
                variants={containerVariants}
                className="space-y-6 text-gray-700"
              >
                <motion.p variants={itemVariants} className="leading-relaxed">
                  A Nildes Festas nasceu do amor por fazer parte dos momentos mais especiais da vida das pessoas. 
                  Com anos de experiência na produção de bolos, doces e salgados, nos dedicamos a transformar 
                  cada comemoração em algo único, prático e inesquecível.
                </motion.p>

                <motion.p variants={itemVariants} className="leading-relaxed">
                  Nossa especialidade são os kits de festas prontos, pensados com carinho para facilitar 
                  a vida de quem quer comemorar sem dor de cabeça. Seja um aniversário simples, 
                  uma surpresa em família ou uma festa mais elaborada, temos opções acessíveis e completas 
                  para todos os gostos.
                </motion.p>

                <motion.div 
                  variants={itemVariants}
                  className="flex items-center p-4 my-6 space-x-3 bg-sky-100 rounded-md"
                >
                  <Cake className="flex-shrink-0 text-sky-500" />
                  <p className="font-medium text-sky-800">
                    Todos os nossos kits são montados com produtos frescos, de qualidade, e com o toque artesanal 
                    que só quem ama o que faz consegue entregar.
                  </p>
                </motion.div>

                <motion.p variants={itemVariants} className="leading-relaxed">
                  Aqui, cada detalhe importa: desde o recheio do bolo até o tema escolhido com tanto cuidado. 
                  A gente acredita que celebrar é um direito de todos — e fazer parte desses momentos é o que 
                  nos move todos os dias.
                </motion.p>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutSection;
