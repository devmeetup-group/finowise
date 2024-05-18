import hamburger from '../assets/icons/hamburger.svg';
import { Button } from './ui/button';
import Logo from './Logo';
// import Nav from './Nav';
import NavVanilla from './NavVanilla';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  return (
    <header className="flex items-center justify-between p-6 lg:px-[120px] lg:py-10">
      {/*-------- LOGO -------- */}
      <Logo />
      {/* -------- NAV -------- */}
      <AnimatePresence>
        {(showNav || isDesktop) && (
          <motion.div
            initial={isDesktop ? { x: 0 } : { x: '100%' }}
            animate={isDesktop ? { x: 0 } : showNav ? { x: 0 } : { x: '100%' }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.6 }}
            className={`absolute left-0 z-10 w-screen translate-x-0 lg:relative lg:h-12 lg:w-fit`}
          >
            <NavVanilla setShowNav={setShowNav}/>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --------MODAL BACKGROUND GREEN --------*/}
      <AnimatePresence>
        {showNav && !isDesktop && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={showNav ? { opacity: 1 } : { opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className=" fixed left-0 top-0 h-screen w-screen bg-fino-green-100/25"
            onClick={() => setShowNav(false)}
          ></motion.div>
        )}
      </AnimatePresence>

      {/* -------- DESKTOP CTA, MOBILE INSIDE NAV -------- */}
      <div className="hidden lg:block">
        <Button variant="default" size="default">
          <Link to="/">Create account</Link>
        </Button>
      </div>
      {/* -------- HAMBURGER MENU --------*/}
      <div
        className="cursor-pointer lg:hidden"
        onClick={() => setShowNav((prevState) => !prevState)}
      >
        <img src={hamburger} alt="" className="w-8" />
      </div>
    </header>
  );
};

export default Header;
