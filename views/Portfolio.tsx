import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { ViewState } from '../types';

interface PortfolioProps {
  onBack: () => void;
}

const cuts = [
  { id: 1, title: '', img: './assets/image1.jpg' },
  { id: 2, title: '', img: './assets/image2.jpg' },
  { id: 3, title: '', img: './assets/image3.jpg' },
  { id: 4, title: '', img: './assets/image4.jpg' },
  { id: 5, title: '', img: './assets/image5.jpg' },
  { id: 6, title: '', img: './assets/image6.jpg' },
  { id: 7, title: '', img: './assets/image7.jpg' },
  { id: 8, title: '', img: './assets/image8.jpg' },
  { id: 9, title: '', img: './assets/image9.jpg' },
  { id: 10, title: '', img: './assets/image10.jpg' },
];

const containerVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 20 }
};

export const Portfolio: React.FC<PortfolioProps> = ({ onBack }) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="w-full h-full flex flex-col"
    >
      <div className="flex items-center gap-4 mb-6">
        <button 
          onClick={onBack}
          className="p-2 rounded-full hover:bg-zinc-800 text-zinc-300 transition-colors"
        >
          <ArrowLeft size={24} />
        </button>
        <h2 className="text-xl font-serif font-bold text-white">Meu Trabalho</h2>
      </div>

      <div className="grid grid-cols-2 gap-3 overflow-y-auto pb-20 pr-1 custom-scrollbar">
        {cuts.map((cut, index) => (
          <motion.div
            key={cut.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="group relative aspect-square rounded-xl overflow-hidden bg-zinc-800 border border-zinc-700/50"
          >
            <img 
              src={cut.img} 
              alt={cut.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
              <span className="text-xs font-medium text-white">{cut.title}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};