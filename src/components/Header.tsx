import { motion } from 'framer-motion';
import logo from '../assets/logo.jpeg';
import { useEffect, useState } from 'react';

function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={isVisible ? { y: 0, opacity: 1 } : {}}
      transition={{ type: "spring", stiffness: 100, damping: 10 }}
      className="sticky top-0 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm"
    >
      <nav className="mt-4 relative max-w-2xl w-full bg-white border border-gray-200 rounded-[2rem] mx-2 md:flex md:items-center md:justify-between md:pl-4 md:mx-auto">
        <div className="px-4 mx:pl-4 md:px-0 flex justify-between items-center">
          <div className='flex items-center justify-center ml-4 h-full'>
            <img className='h-16 w-16 rounded-full' src={logo} alt="site-logo" />
            <a className="flex-none rounded-md text-xl inline-block font-semibold focus:outline-none focus:opacity-80" href="#" aria-label="Preline">
              ESSENCE
            </a>
          </div>

          <div className="md:hidden">
  <button
    type="button"
    className="hs-collapse-toggle flex justify-center items-center size-6 border border-gray-200 text-gray-500 rounded-full hover:bg-gray-200 focus:outline-none focus:bg-gray-200"
    onClick={() => setIsMenuOpen(!isMenuOpen)}
    aria-expanded={isMenuOpen}
    aria-controls="hs-navbar-header-floating"
    aria-label="Toggle navigation"
  >
    <svg className={`hs-collapse-open:hidden shrink-0 size-3.5 ${isMenuOpen ? 'hidden' : 'block'}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" x2="21" y1="6" y2="6" />
      <line x1="3" x2="21" y1="12" y2="12" />
      <line x1="3" x2="21" y1="18" y2="18" />
    </svg>
    
    <svg className={`hs-collapse-open:block shrink-0 size-4 ${isMenuOpen ? 'block' : 'hidden'}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="4" y1="4" x2="20" y2="20" />
      <line x1="20" y1="4" x2="4" y2="20" />
    </svg>
  </button>
</div>
        </div>

        <div id="hs-navbar-header-floating" className={`overflow-hidden transition-all duration-300 basis-full grow md:block ${isMenuOpen ? 'block' : 'hidden'}`} aria-labelledby="hs-navbar-header-floating-collapse">
          <div className="flex flex-col md:flex-row md:items-center md:justify-end gap-2 md:gap-3 mt-3 md:mt-0 py-2 md:py-0 md:ps-7">
            <a className="py-0.5 md:py-3 px-4 md:px-1 border-s- 2 md:border-s-0 md:border-b-2 border-gray-800 font-medium text-gray-800 focus:outline-none" href="#" aria-current="page">Home</a>
            <a className="py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 border-transparent text-gray-500 hover:text-gray-800 focus:outline-none" href="#">Projects</a>
            <a className="py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 border-transparent text-gray-500 hover:text-gray-800 focus:outline-none" href="#">Work</a>
          </div>
        </div>

        <div className="hidden md:flex md:justify-end md:items-center md:gap-2 md:mt-0 md:py-0 md:pl-7 h-full">
          <div className="flex items-center space-x-2 h-full">
            <button type="button" className="h-full py-2 px-6 inline-flex items-center gap-x-2 text-sm font-medium rounded-r-full border border-transparent bg-lime-400 text-black hover:bg-lime-500 focus:outline-none focus:bg-lime-500 transition disabled:opacity-50 disabled:pointer-events-none">
              Hire us
            </button>
          </div>
        </div>
      </nav>
    </motion.header>
  );
}

export default Header;