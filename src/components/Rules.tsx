
import React from "react";
import { motion } from "framer-motion";

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
    <motion.div 
      className="p-6 rounded-lg bg-gradient-to-r from-sky-50 to-purple-50"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.ul className="grid gap-4 md:grid-cols-2">
        {rules.map((rule, index) => (
          <motion.li 
            key={index}
            variants={item}
            className="flex items-start p-3 transition-all duration-300 rounded-md hover:bg-white/50"
          >
            <span className="flex items-center justify-center w-6 h-6 mr-3 text-xs font-bold text-white rounded-full bg-gradient-to-r from-sky-500 to-purple-500 shrink-0">
              {index + 1}
            </span>
            <span className="text-gray-700">{rule}</span>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

export default Rules;
