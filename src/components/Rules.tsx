
import React from "react";

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

  return (
    <div className="p-4 rounded-md bg-sky-50">
      <ul className="grid gap-3 md:grid-cols-2">
        {rules.map((rule, index) => (
          <li key={index} className="flex items-start">
            <span className="flex items-center justify-center w-5 h-5 mr-2 text-white bg-sky-500 rounded-full shrink-0">
              {index + 1}
            </span>
            <span className="text-gray-700">{rule}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Rules;
