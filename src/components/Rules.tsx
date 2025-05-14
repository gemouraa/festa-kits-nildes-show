
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Cookie } from "lucide-react";

const Rules = () => {
  const rules = [
    "Bolo massa branca e recheio brigadeiro",
    "Outro sabor: adicional de R$20,00",
    "Cliente informa o tema e cor, mas não pode enviar modelo de bolo",
    "Topo simples de papel incluso",
    "Não alteramos os itens dos kits",
    "Kits promocionais: pagamento integral adiantado",
    "Entrega somente por Uber Flash (cliente solicita)",
    "Desistência: 60 dias para retirada",
    "Não devolvemos o valor pago",
    "Troca de tema: R$30,00"
  ];

  const rulesRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(rulesRef, { once: false, amount: 0.2 });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div ref={rulesRef}>
      <motion.div 
        className="p-6 rounded-lg bg-gradient-to-r from-sky-50 to-purple-50"
        variants={container}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
      >
        <motion.ul className="grid gap-4 md:grid-cols-2">
          {rules.map((rule, index) => (
            <motion.li 
              key={index}
              variants={item}
              className="flex items-start p-3 transition-all duration-300 rounded-md hover:bg-white/50"
            >
              <div className="flex items-center justify-center w-6 h-6 mr-3 shrink-0">
                <Cookie className="w-5 h-5 text-sky-500" />
              </div>
              <span className="text-gray-700 font-medium">{rule}</span>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </div>
  );
};

export default Rules;
