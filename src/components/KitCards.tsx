
import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter, CardDescription } from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import { WhatsappIcon } from "@/components/icons/WhatsappIcon";
import { kits } from "@/data/kits";
import { Sparkle, Cake } from "lucide-react";

const KitCard: React.FC<{ kit: any; index: number }> = ({ kit, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: false, amount: 0.2 });

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(kit.whatsappMessage);
    window.open(`https://wa.me/5521999999999?text=${encodedMessage}`, "_blank");
  };

  return (
    <div ref={cardRef}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ 
          y: -10,
          transition: { duration: 0.2 }
        }}
      >
        <Card className="h-full overflow-hidden transition-all duration-300 bg-white border-none shadow-lg">
          <CardHeader className="relative bg-gradient-to-r from-sky-400 to-purple-400">
            <motion.div 
              className="absolute top-0 right-0 m-2"
              initial={{ rotate: 0 }}
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            >
              <Sparkle className="w-6 h-6 text-yellow-300" />
            </motion.div>
            <CardTitle className="text-xl font-bold text-center text-white font-dancing">{kit.name}</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <ul className="space-y-3">
              {kit.items.map((item: string, i: number) => (
                <motion.li 
                  key={i} 
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{ delay: i * 0.1 + 0.3 }}
                  className="flex items-start"
                >
                  <span className="flex items-center justify-center w-5 h-5 mr-3 text-xs font-bold text-white rounded-full bg-sky-500">{i+1}</span>
                  <span className="text-gray-700">{item}</span>
                </motion.li>
              ))}
            </ul>
            <CardDescription className="mt-6 text-amber-600 font-medium">
              {kit.reservation}
            </CardDescription>
          </CardContent>
          <CardFooter>
            <Button 
              onClick={handleWhatsAppClick}
              className="w-full gap-2 text-white transition-all duration-300 shadow-md bg-green-600 hover:bg-green-700 hover:shadow-lg rounded-full"
            >
              <WhatsappIcon className="w-5 h-5" />
              <span className="relative">
                <span className="relative z-10">Quero este kit</span>
                <motion.span 
                  className="absolute bottom-0 left-0 w-full h-1 bg-white/40"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </span>
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
};

const KitCards = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.1 });

  return (
    <div ref={containerRef}>
      <motion.div 
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ staggerChildren: 0.1 }}
      >
        {kits.map((kit, index) => (
          <KitCard key={kit.id} kit={kit} index={index} />
        ))}
      </motion.div>
    </div>
  );
};

export default KitCards;
