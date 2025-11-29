import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Camera, Instagram, Facebook } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { ViewState } from '../types';

interface HomeProps {
  onChangeView: (view: ViewState) => void;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  },
  exit: {
    opacity: 0,
    x: -20,
    transition: { duration: 0.3 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export const Home: React.FC<HomeProps> = ({ onChangeView }) => {
  const handleSchedule = () => {
    // Replace with actual WhatsApp number
    window.open('https://wa.me/5515997508020?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20um%20hor%C3%A1rio%20na%20Barbearia%20Di%20Ferraz', '_blank');
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="flex flex-col gap-4 w-full max-w-md mx-auto z-10 relative"
    >
      <motion.div variants={itemVariants} className="mb-2">
        <Button 
          variant="primary" 
          fullWidth 
          onClick={handleSchedule}
          icon={<Calendar className="w-5 h-5" />}
        >
          AGENDAR HORÁRIO
        </Button>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Button 
          variant="glass" 
          fullWidth 
          onClick={() => onChangeView('portfolio')}
          icon={<Camera className="w-5 h-5" />}
        >
          Ver Portfólio
        </Button>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Button 
          variant="glass" 
          fullWidth 
          onClick={() => onChangeView('location')}
          icon={<MapPin className="w-5 h-5" />}
        >
          Como Chegar
        </Button>
      </motion.div>

      <motion.div variants={itemVariants} className="pt-6">
        <p className="text-center text-zinc-500 text-sm mb-4 uppercase tracking-widest font-semibold">Siga-nos</p>
        <div className="flex justify-center gap-4">
          <motion.a 
            href="https://instagram.com/diferrazbarber" 
            target="_blank"
            whileHover={{ scale: 1.1, color: '#E1306C' }}
            className="p-3 bg-zinc-900 rounded-full border border-zinc-800 text-zinc-400 transition-colors"
          >
            <Instagram size={24} />
          </motion.a>
          <motion.a 
            href="https://www.facebook.com/leo.ferraz.7359" 
            target="_blank"
            whileHover={{ scale: 1.1, color: '#1877F2' }}
            className="p-3 bg-zinc-900 rounded-full border border-zinc-800 text-zinc-400 transition-colors"
          >
            <Facebook size={24} />
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  );
};