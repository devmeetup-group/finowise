import React, { FC } from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from '@/components/ui/navigation-menu';
import { Link } from 'react-router-dom';

const Nav: FC = () => {
  interface NavChildren {
    title: string;
    link: string;
  }

  interface NavItems {
    title: string;
    children: NavChildren[];
  }

  const navItems: NavItems[] = [
    {
      title: 'Personal',
      children: [
        { title: 'Dashboard', link: '/dashboard' },
        { title: 'Home', link: '/home' },
      ],
    },
    {
      title: 'Products',
      children: [{ title: 'Finowise card', link: '/finowise-card' }],
    },
    {
      title: 'About us',
      children: [
        { title: 'About Finowise', link: '/about-us' },
        { title: 'Visionary team', link: '/visionary-team' },
      ],
    },
  ];

  return (
    <div className="mx-auto w-fit">
      <NavigationMenu className="">
        <NavigationMenuList>
          {navItems.map((item) => (
            <NavigationMenuItem key={item.title} className="relative w-fit">
              <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
              <NavigationMenuContent className="flex w-full flex-col p-4">
                {item.children.map((child) => (
                  <NavigationMenuLink key={child.title} className="w-[]">
                    <Link to={child.link}>{child.title}</Link>
                  </NavigationMenuLink>
                ))}
              </NavigationMenuContent>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Nav;
