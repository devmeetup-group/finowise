import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { ChevronDown } from 'lucide-react';
import homeIcon from '../assets/icons/home.svg';
import dashboardIcon from '../assets/icons/dashboard.svg';
import visionaryTeamIcon from '../assets/icons/visionary-team.svg';
import aboutIcon from '../assets/icons/group.svg';
import finowiseCardIcon from '../assets/icons/finowise-card.svg';
import { AnimatePresence, motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

const defaultnavItems: NavItems[] = [
  {
    title: 'Personal',
    isOpen: false,
    children: [
      {
        title: 'Dashboard',
        link: '/',
        icon: dashboardIcon,
        iconBgColor: 'bg-fino-blue-70',
      },
      {
        title: 'Home',
        link: '/',
        icon: homeIcon,
        iconBgColor: 'bg-fino-blue-100',
      },
    ],
  },
  {
    title: 'Products',
    isOpen: false,

    children: [
      {
        title: 'Finowise card',
        link: '/',
        icon: finowiseCardIcon,
        iconBgColor: 'bg-fino-purple',
      },
      {
        title: 'Mobile web version',
        link: '/',
        icon: finowiseCardIcon,
        iconBgColor: 'bg-fino-orange',
      },
    ],
  },
  {
    title: 'About us',
    isOpen: false,
    children: [
      {
        title: 'About Finowise',
        link: '/',
        icon: aboutIcon,
        iconBgColor: 'bg-fino-blue-green',
      },
      {
        title: 'Visionary team',
        link: '/',
        icon: visionaryTeamIcon,
        iconBgColor: 'bg-fino-yellow',
      },
    ],
  },
];

type NavChildren = {
  title: string;
  link: string;
  icon: string;
  iconBgColor: string;
};

type NavItems = {
  title: string;
  isOpen: boolean;
  children?: NavChildren[];
};

type NavProps = {
  setShowNav: (show: boolean) => void;
};

const NavVanilla: FC<NavProps> = ({ setShowNav }) => {
  const [navItems, setNavItems] = useState(defaultnavItems);
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  const mobileChildrenVariants = {
    open: { height: 'fit-content' },
    close: { height: 0 },
  };

  const desktopChildrenVariants = {
    open: { opacity: 1 },
    close: { opacity: 0 },
  };

  const handleNavItemActive = (title: string) => {
    const newNavItemsArray = navItems.map((navItem) => {
      if (navItem.title === title) {
        return { ...navItem, isOpen: !navItem.isOpen };
      } else {
        return { ...navItem, isOpen: false };
      }
    });
    setNavItems(newNavItemsArray);
  };
  // ----- FOR DESKTOP HOVER --------------------------------
  const handleMouseEnter = (title: string) => {
    isDesktop && handleNavItemActive(title);
  };

  const handleResetNavItems = (): void => {
    isDesktop && setNavItems(defaultnavItems);
  };
  // ----- FOR DESKTOP HOVER --------------------------------

  return (
    <div className="absolute left-1/2 top-28 w-[calc(100vw-48px)] -translate-x-1/2 rounded-2xl bg-white py-10 font-Urbanist text-base font-semibold lg:relative lg:left-0 lg:top-0 lg:w-fit lg:-translate-x-0 lg:rounded-none lg:py-0">
      {/*------------- NAV LIST -------------*/}
      <div className="lg:flex">
        {navItems.map((item) => (
          //----------- NAV ITEM----------------
          <div
            key={item.title}
            className="mx-6 flex flex-col border-b border-gray-300 py-6 lg:flex-row lg:border-none lg:py-4"
            onMouseEnter={() => handleMouseEnter(item.title)}
            onMouseLeave={handleResetNavItems}
          >
            {/*------------- NAV TRIGGER -------------*/}
            <div
              className="flex cursor-pointer items-center justify-between pb-0 lg:space-x-2"
              onClick={() => handleNavItemActive(item.title)}
            >
              {/*--------------- NAV TRIGGER TEXT --------------- */}
              <p className="">{item.title}</p>
              {/* -------- NAV TRIGGER ICON --------*/}
              <motion.div
                className="w-fit"
                initial={{ rotate: 0 }}
                animate={item.isOpen ? { rotate: 180 } : { rotate: 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown
                  className="relative top-[1px] h-4 w-4"
                  aria-hidden="true"
                  // size={12}
                />
              </motion.div>
            </div>
            {/* ----------NAV ITEM CHILDREN (CONTENT) -------------- */}
            <AnimatePresence>
              {' '}
              {item.isOpen && (
                <motion.div
                  className={`overflow-hidden bg-white lg:absolute lg:top-14 lg:rounded-md lg:border lg:border-fino-blue-100/10 lg:shadow-xl lg:shadow-fino-blue-100/25`}
                  variants={
                    isDesktop ? desktopChildrenVariants : mobileChildrenVariants
                  }
                  initial="close"
                  animate={`${item.isOpen && 'open'}`}
                  exit="close"
                  transition={{ duration: 0.6 }}
                >
                  <div className={`pt-4 lg:rounded lg:p-2`}>
                    {item.children?.map((child) => (
                      <div
                        className="flex items-center space-x-3 rounded-md p-2 lg:hover:bg-gray-200"
                        key={child.title}
                        // ----- CLOSE NAV WHEN CHILD IS CLICKED --------
                        onClick={() => setShowNav(false)}
                      >
                        <div
                          className={`${child.iconBgColor} grid h-8 w-8 place-content-center rounded-full`}
                        >
                          <img src={child.icon} alt="" className="w-4" />
                        </div>
                        <Link to={child.link} className="text-nowrap">
                          {child.title}
                        </Link>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
      {/* CALL TO ACTIONS */}
      <div className="mt-14 flex space-x-6 px-6 lg:hidden">
        <Button variant="outline" size="default">
          <Link to="/">Log in</Link>
        </Button>
        <Button variant="default" size="default">
          <Link to="/">Create account</Link>
        </Button>
      </div>
    </div>
  );
};

export default NavVanilla;
