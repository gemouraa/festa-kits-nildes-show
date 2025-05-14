
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter, CardDescription } from "@/components/ui/card";
import { motion } from "framer-motion";
import { WhatsappIcon } from "@/components/icons/WhatsappIcon";
import { kits } from "@/data/kits";

const KitCard: React.FC<{ kit: any; index: number }> = ({ kit, index }) => {
  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(kit.whatsappMessage);
    window.open(`https://wa.me/5521999999999?text=${encodedMessage}`, "_blank");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full transition-all duration-300 hover:shadow-lg">
        <CardHeader className="bg-gradient-to-r from-sky-200 to-sky-100">
          <CardTitle className="text-xl font-bold text-center text-sky-800">{kit.name}</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <ul className="space-y-2">
            {kit.items.map((item: string, i: number) => (
              <li key={i} className="flex items-start">
                <span className="mr-2 text-sky-500">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <CardDescription className="mt-4 text-amber-600 font-medium">
            {kit.reservation}
          </CardDescription>
        </CardContent>
        <CardFooter>
          <Button 
            onClick={handleWhatsAppClick}
            className="w-full gap-2 bg-green-600 hover:bg-green-700"
          >
            <WhatsappIcon className="w-5 h-5" />
            Quero este kit
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

const KitCards = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {kits.map((kit, index) => (
        <KitCard key={kit.id} kit={kit} index={index} />
      ))}
    </div>
  );
};

export default KitCards;
