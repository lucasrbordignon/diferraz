import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Navigation, Clock } from 'lucide-react';

interface LocationProps {
  onBack: () => void;
}

const containerVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 20 }
};

export const Location: React.FC<LocationProps> = ({ onBack }) => {
  
  const handleOpenMaps = () => {
    const address = "Oscar Vieira Sampaio, 107 - sala 6 - Centro, Laranjal Paulista - SP, 18500-027, Brazil";
    const encoded = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${encoded}`, '_blank');
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="w-full flex flex-col gap-6"
    >
      <div className="flex items-center gap-4">
        <button 
          onClick={onBack}
          className="p-2 rounded-full hover:bg-zinc-800 text-zinc-300 transition-colors"
        >
          <ArrowLeft size={24} />
        </button>
        <h2 className="text-xl font-serif font-bold text-white">Localização</h2>
      </div>

      <div className="w-full aspect-video bg-zinc-800 rounded-2xl overflow-hidden border border-zinc-700 relative group cursor-pointer" onClick={handleOpenMaps}>
         <img 
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&auto=format&fit=crop&q=60" 
            alt="Map Preview" 
            className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
         />
         <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-brand-blue/90 p-3 rounded-full shadow-lg shadow-blue-900/50 animate-bounce">
                <MapPin className="text-white w-6 h-6" />
            </div>
         </div>
      </div>

      <div className="space-y-4">
        <div className="bg-zinc-900/50 p-4 rounded-xl border border-zinc-800 flex items-start gap-3">
            <MapPin className="text-brand-red shrink-0 mt-1" size={20} />
            <div>
                <h3 className="text-white font-medium">Endereço</h3>
                <p className="text-zinc-400 text-sm mt-1">
                    Oscar Vieira Sampaio, 107 - sala 6<br />
                    Centro, Laranjal Paulista - SP<br />
                    CEP: 18500-027
                </p>
            </div>
        </div>

        <div className="bg-zinc-900/50 p-4 rounded-xl border border-zinc-800 flex items-start gap-3">
            <Clock className="text-brand-blue shrink-0 mt-1" size={20} />
            <div>
                <h3 className="text-white font-medium">Horário de Funcionamento</h3>
                <ul className="text-zinc-400 text-sm mt-1 space-y-1">
                    <li className="flex justify-between w-full gap-8">
                        <span>Segunda:</span>
                        <span className="text-white">08:00 - 18:00</span>
                    </li>
                    <li className="flex justify-between w-full gap-8">
                        <span>Terça:</span>
                        <span className="text-red-400">Fechado</span>
                    </li>
                    <li className="flex justify-between w-full gap-8">
                        <span>Quarta:</span>
                        <span className="text-white">08:00 - 20:00</span>
                    </li>
                    <li className="flex justify-between w-full gap-8">
                        <span>Quinta:</span>
                        <span className="text-white">08:00 - 17:00</span>
                    </li>
                    <li className="flex justify-between w-full gap-8">
                        <span>Sexta:</span>
                        <span className="text-white">08:00 - 19:00</span>
                    </li>
                    <li className="flex justify-between w-full gap-8">
                        <span>Sábado:</span>
                        <span className="text-white">07:00 - 14:00</span>
                    </li>
                    <li className="flex justify-between w-full gap-8">
                        <span>Domingo:</span>
                        <span className="text-red-400">Fechado</span>
                    </li>
                </ul>
            </div>
        </div>
      </div>

      <button 
        onClick={handleOpenMaps}
        className="w-full py-4 bg-zinc-100 text-zinc-900 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-white transition-colors"
      >
        <Navigation size={20} />
        ABRIR NO MAPA
      </button>

    </motion.div>
  );
};