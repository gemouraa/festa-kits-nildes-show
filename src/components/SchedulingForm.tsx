
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { motion } from "framer-motion";
import { Calendar as CalendarIcon, Clock, Palette } from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { cn } from "@/lib/utils";

interface SchedulingFormProps {
  kitName: string;
  clientData: { name: string; phone: string };
  onConfirm: (schedulingData: { date: Date; time: string; theme: string }) => void;
  onBack: () => void;
}

const SchedulingForm: React.FC<SchedulingFormProps> = ({ 
  kitName, 
  clientData, 
  onConfirm, 
  onBack 
}) => {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState("");
  const [theme, setTheme] = useState("");

  const timeSlots = [
    "08:00", "09:00", "10:00", "11:00", "12:00",
    "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"
  ];

  const handleConfirm = () => {
    if (selectedDate && selectedTime && theme.trim()) {
      onConfirm({
        date: selectedDate,
        time: selectedTime,
        theme: theme.trim()
      });
    }
  };

  const isWeekend = (date: Date) => {
    const day = date.getDay();
    return day === 0 || day === 6; // Sunday or Saturday
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl"
      >
        <Card className="shadow-lg">
          <CardHeader className="text-center bg-gradient-to-r from-sky-400 to-purple-400 text-white rounded-t-lg">
            <CardTitle className="text-xl font-poppins">
              Agendamento - {kitName}
            </CardTitle>
            <p className="text-sm opacity-90 font-poppins">
              Cliente: {clientData.name}
            </p>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            {/* Seleção de Data */}
            <div className="space-y-3">
              <Label className="flex items-center gap-2 font-poppins text-base">
                <CalendarIcon className="w-5 h-5" />
                Escolha a data da festa
              </Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal h-12 font-poppins",
                      !selectedDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {selectedDate ? (
                      format(selectedDate, "PPP", { locale: ptBR })
                    ) : (
                      <span>Selecione uma data</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    disabled={(date) => 
                      date < new Date() || isWeekend(date)
                    }
                    initialFocus
                    locale={ptBR}
                    className={cn("p-3 pointer-events-auto")}
                  />
                </PopoverContent>
              </Popover>
              <p className="text-xs text-gray-500 font-poppins">
                *Não trabalhamos aos finais de semana
              </p>
            </div>

            {/* Seleção de Horário */}
            <div className="space-y-3">
              <Label className="flex items-center gap-2 font-poppins text-base">
                <Clock className="w-5 h-5" />
                Escolha o horário
              </Label>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                {timeSlots.map((time) => (
                  <Button
                    key={time}
                    variant={selectedTime === time ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedTime(time)}
                    className="font-poppins"
                  >
                    {time}
                  </Button>
                ))}
              </div>
            </div>

            {/* Tema da Festa */}
            <div className="space-y-3">
              <Label htmlFor="theme" className="flex items-center gap-2 font-poppins text-base">
                <Palette className="w-5 h-5" />
                Tema da festa
              </Label>
              <Input
                id="theme"
                value={theme}
                onChange={(e) => setTheme(e.target.value)}
                placeholder="Ex: Frozen, Super Heróis, Princesas..."
                className="h-12 font-poppins"
              />
            </div>

            {/* Aviso */}
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <p className="text-amber-800 text-sm font-medium font-poppins text-center">
                ⚠️ Confirmar com a confeiteira
              </p>
            </div>
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
              onClick={handleConfirm}
              className="flex-1 bg-green-600 hover:bg-green-700 text-white font-poppins"
              disabled={!selectedDate || !selectedTime || !theme.trim()}
            >
              Confirmar compra
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
};

export default SchedulingForm;
