
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { motion } from "framer-motion";
import { User, Phone } from "lucide-react";

interface ClientInfoFormProps {
  kitName: string;
  onNext: (clientData: { name: string; phone: string }) => void;
  onBack: () => void;
}

const ClientInfoForm: React.FC<ClientInfoFormProps> = ({ kitName, onNext, onBack }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && phone.trim()) {
      onNext({ name, phone });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <Card className="shadow-lg">
          <CardHeader className="text-center bg-gradient-to-r from-sky-400 to-purple-400 text-white rounded-t-lg">
            <CardTitle className="text-xl font-poppins">
              {kitName}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="flex items-center gap-2 font-poppins">
                  <User className="w-4 h-4" />
                  Nome completo
                </Label>
                <Input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Digite seu nome completo"
                  required
                  className="font-poppins"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone" className="flex items-center gap-2 font-poppins">
                  <Phone className="w-4 h-4" />
                  Telefone/WhatsApp
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="(71) 9 9999-9999"
                  required
                  className="font-poppins"
                />
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex gap-3">
            <Button
              onClick={onBack}
              variant="outline"
              className="flex-1 font-poppins"
            >
              Voltar
            </Button>
            <Button
              onClick={handleSubmit}
              className="flex-1 bg-sky-500 hover:bg-sky-600 text-white font-poppins"
              disabled={!name.trim() || !phone.trim()}
            >
              Agendar agora
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
};

export default ClientInfoForm;
