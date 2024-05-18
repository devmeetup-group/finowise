import { NavItems } from '@/types/product.types';
import homeIcon from '../assets/icons/home.svg';
import dashboardIcon from '../assets/icons/dashboard.svg';
import visionaryTeamIcon from '../assets/icons/visionary-team.svg';
import aboutIcon from '../assets/icons/Group.svg';
import finowiseCardIcon from '../assets/icons/finowise-card.svg';
import { link } from 'fs';

export const product: NavItems = {
  title: 'Products',
  children: [
    { title: 'dashboard', link: 'dashboard' },
    { title: 'finowise card', link: 'finowise-card' },
    { title: 'about finowise', link: 'about-finowise' },
    { title: 'visionary team', link: 'visionary-team' },
  ],
};
