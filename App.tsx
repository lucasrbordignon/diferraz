import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { Home } from './views/Home';
import { Portfolio } from './views/Portfolio';
import { Location } from './views/Location';
import { ViewState } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [isLoaded, setIsLoaded] = useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleWhatsApp = () => {
    window.open('https://wa.me/5515997508020', '_blank');
  };

  return (
    <div className="min-h-screen w-full relative overflow-hidden font-sans selection:bg-brand-red selection:text-white">

      <div className="fixed inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand-blue/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-brand-red/20 rounded-full blur-[120px] animate-pulse delay-1000" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]" />
      </div>

      <main className="relative z-10 min-h-screen flex flex-col items-center p-6 max-w-lg mx-auto">
        <motion.div 
          layout
          className={`flex flex-col items-center w-full mb-8 transition-all duration-500 ${currentView !== 'home' ? 'scale-75 mb-4' : 'mt-8'}`}
        >
          <div className="relative w-48 h-48 md:w-56 md:h-56 mb-6 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
             <motion.img 
               initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
               animate={{ opacity: 1, scale: 1, rotate: 0 }}
               transition={{ duration: 0.8, type: "spring" }}
               src="./assets/logo.png"
               alt="Barbearia Di Ferraz Logo"
               className="w-full h-full object-contain filter drop-shadow-2xl"
               onError={(e) => {
                 e.currentTarget.style.display = 'none';
                 e.currentTarget.parentElement?.classList.add('fallback-text');
               }}
             />
          </div>
          
          <motion.div 
             initial={{ opacity: 0, y: 10 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.3 }}
             className="text-center"
          >
            <p className="font-medium tracking-[0.3em] text-xs mt-2 uppercase">
              Transformando feios em feios ajeitados
            </p>
          </motion.div>
        </motion.div>

        <div className="w-full flex-1 flex flex-col relative min-h-[400px]">
          <AnimatePresence mode="wait">
            {currentView === 'home' && (
              <Home key="home" onChangeView={setCurrentView} />
            )}
            {currentView === 'portfolio' && (
              <Portfolio key="portfolio" onBack={() => setCurrentView('home')} />
            )}
            {currentView === 'location' && (
              <Location key="location" onBack={() => setCurrentView('home')} />
            )}
          </AnimatePresence>
        </div>

        <footer className="w-full py-6 text-center text-zinc-600 text-xs mt-auto">
          <a href="https://www.lrb.dev.br" target="_blank" rel="noopener noreferrer">
            © {new Date().getFullYear()} LRB Softwares.
          </a>
          <p className="mt-1">Todos os direitos reservados.</p>
        </footer>

      </main>

      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleWhatsApp}
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] flex items-center justify-center hover:bg-[#20bd5a] transition-colors"
        aria-label="Fale conosco no WhatsApp"
      >
        <MessageCircle size={28} fill="white" />
      </motion.button>
      
    </div>
  );
};

export default App;