import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'glass';
  fullWidth?: boolean;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  icon,
  className = '',
  ...props 
}) => {
  const baseStyles = "relative flex items-center justify-center gap-3 px-6 py-4 rounded-xl font-semibold transition-all duration-300 overflow-hidden group";
  
  const variants = {
    primary: "bg-brand-blue text-white shadow-[0_0_20px_rgba(30,58,138,0.3)] hover:bg-blue-800 hover:shadow-[0_0_30px_rgba(30,58,138,0.5)] border border-blue-900/50",
    secondary: "bg-brand-red text-white shadow-[0_0_20px_rgba(76,5,25,0.3)] hover:bg-rose-950 hover:shadow-[0_0_30px_rgba(76,5,25,0.5)] border border-rose-900/50",
    outline: "bg-transparent border-2 border-zinc-700 text-zinc-300 hover:border-brand-blue hover:text-white hover:bg-brand-blue/10",
    glass: "bg-white/5 backdrop-blur-md border border-white/10 text-white hover:bg-white/10"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {/* Button Shine Effect */}
      <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent z-0" />
      
      <span className="relative z-10 flex items-center gap-2">
        {icon}
        {children}
      </span>
    </motion.button>
  );
};