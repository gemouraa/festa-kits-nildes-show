
import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter, CardDescription } from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import { WhatsappIcon } from "@/components/icons/WhatsappIcon";
import { kits } from "@/data/kits";
import { Star } from "lucide-react";

interface KitCardProps {
  kit: any;
  index: number;
  onSelectKit: (kit: any) => void;
}

const KitCard: React.FC<KitCardProps> = ({
  kit,
  index,
  onSelectKit
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, {
    once: false,
    amount: 0.2
  });

  return (
    <div ref={cardRef}>
      <motion.div 
        initial={{
          opacity: 0,
          y: 30
        }} 
        animate={isInView ? {
          opacity: 1,
          y: 0
        } : {
          opacity: 0,
          y: 30
        }} 
        transition={{
          duration: 0.5,
          delay: index * 0.1
        }} 
        whileHover={{
          y: -10,
          transition: {
            duration: 0.2
          }
        }}
      >
        <Card className="h-full overflow-hidden transition-all duration-300 bg-white border-none shadow-lg hover:shadow-xl">
          {/* Imagem do Kit */}
          {kit.image && (
            <div className="relative h-48 sm:h-56 overflow-hidden">
              <img 
                src={kit.image} 
                alt={kit.name} 
                className="w-full h-full object-cover object-center"
                style={{ imageRendering: 'crisp-edges' }}
              />
              <motion.div 
                className="absolute top-2 right-2" 
                initial={{
                  rotate: 0
                }} 
                animate={{
                  rotate: [0, 15, -15, 0]
                }} 
                transition={{
                  repeat: Infinity,
                  duration: 5,
                  ease: "easeInOut"
                }}
              >
                <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
              </motion.div>
            </div>
          )}

          <CardHeader className="relative bg-gradient-to-r from-sky-400 to-purple-400 text-center">
            <CardTitle className="text-xl font-bold text-white font-poppins">
              {kit.name}
            </CardTitle>
            <div className="text-2xl font-bold text-white font-poppins mt-2">
              R$ {kit.price}
            </div>
          </CardHeader>

          <CardContent className="p-4 sm:p-6">
            <ul className="space-y-2 sm:space-y-3 font-poppins">
              {kit.items.map((item: string, i: number) => (
                <motion.li 
                  key={i} 
                  initial={{
                    opacity: 0,
                    x: -10
                  }} 
                  animate={isInView ? {
                    opacity: 1,
                    x: 0
                  } : {
                    opacity: 0,
                    x: -10
                  }} 
                  transition={{
                    delay: i * 0.1 + 0.3
                  }} 
                  className="flex items-start text-sm sm:text-base"
                >
                  <span className="flex items-center justify-center w-5 h-5 mr-2 sm:mr-3 text-xs font-bold text-white rounded-full bg-sky-500 flex-shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-gray-700">{item}</span>
                </motion.li>
              ))}
            </ul>
            <CardDescription className="mt-4 sm:mt-6 text-amber-600 font-medium font-poppins text-center">
              {kit.reservation}
            </CardDescription>
          </CardContent>

          <CardFooter className="p-4 sm:p-6">
            <Button 
              onClick={() => onSelectKit(kit)} 
              className="w-full gap-2 text-white transition-all duration-300 shadow-md bg-green-600 hover:bg-green-700 hover:shadow-lg rounded-full font-poppins text-sm sm:text-base py-2 sm:py-3"
            >
              <WhatsappIcon className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="relative">
                <span className="relative z-10">Escolher este kit</span>
                <motion.span 
                  className="absolute bottom-0 left-0 w-full h-1 bg-white/40" 
                  initial={{
                    width: 0
                  }} 
                  whileHover={{
                    width: '100%'
                  }} 
                  transition={{
                    duration: 0.3
                  }} 
                />
              </span>
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
};

interface KitCardsProps {
  onSelectKit: (kit: any) => void;
}

const KitCards: React.FC<KitCardsProps> = ({
  onSelectKit
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, {
    once: false,
    amount: 0.1
  });

  return (
    <div ref={containerRef}>
      <motion.div 
        className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" 
        initial={{
          opacity: 0
        }} 
        animate={isInView ? {
          opacity: 1
        } : {
          opacity: 0
        }} 
        transition={{
          staggerChildren: 0.1
        }}
      >
        {kits.map((kit, index) => (
          <KitCard key={kit.id} kit={kit} index={index} onSelectKit={onSelectKit} />
        ))}
      </motion.div>
    </div>
  );
};

export default KitCards;
