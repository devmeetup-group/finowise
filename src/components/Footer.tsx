import { product } from '@/lib/product';
import { Link } from 'react-router-dom';
import facebook from '../assets/images/facebook-link.png';
import twitter from '../assets/images/twitter-link.png';
import instagram from '../assets/images/instagram-link.png';
import linkedin from '../assets/images/linkedin-link.png';
import Logo from './Logo';

const Footer = () => {
  const { title, children } = product;
  return (
    <footer>
      <div className="grid grid-cols-2 bg-fino-green-90 px-4 py-6 text-white md:px-[7.5rem] md:py-10">
        <div>
          <p className="mb-6 font-Urbanist text-2xl font-semibold md:mb-12 md:text-[2rem]">
            {title}
          </p>
          <ul className="space-y-6 text-sm *:font-Urbanist *:capitalize md:space-y-12 *:md:text-xl">
            {children.map((item) => {
              return (
                <li key={item.title}>
                  <Link to={item.link}>{item.title}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <p className="mb-6 font-Urbanist text-2xl font-semibold capitalize md:mb-12 md:text-[2rem]">
            contact us{' '}
          </p>

          <div className="space-y-6 text-sm *:font-Urbanist *:capitalize md:space-y-12 *:md:text-xl">
            <p>
              <span className="font-medium">contact :</span>{' '}
              <span>+012345678</span>
            </p>
            <p>
              <span className="font-medium ">email :</span>{' '}
              <span>support@finowise.com</span>
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 px-4  py-8 text-white md:px-[7.5rem] ">
        <Logo />
        <ul className="flex flex-wrap items-center gap-4 *:*:w-8 *:cursor-pointer">
          <li>
            <img src={facebook} alt="" width={24} height={24} />
          </li>
          <li>
            <img src={instagram} alt="" width={24} height={24} />
          </li>
          <li>
            <img src={twitter} alt="" width={24} height={24} />
          </li>
          <li>
            <img src={linkedin} alt="" width={24} height={24} />
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
