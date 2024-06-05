import { useState } from 'react';
import one from '../../assets/images/client_images/one.png';
import two from '../../assets/images/client_images/two.png';
import three from '../../assets/images/client_images/three.png';
import four from '../../assets/images/client_images/four.png';
import Heading2 from './text/Heading2';
import Heading2Description from './text/Heading2Description';
import Heading3 from './text/Heading3';
import { ChevronLeft } from 'lucide-react';
import { ChevronRight } from 'lucide-react';
import LayoutGrid2 from './LayoutGrid2';
import Paragraph from './text/Paragraph';

const testimonials = [
  {
    id: 1,
    message: 'Very user-friendly platform, highly recommended',
    name: 'Chinelo Ndubisi',
    occupation: 'Business woman',
    image: one,
  },
  {
    id: 2,
    message: 'Using this product helped track and manage my finances better',
    name: 'John Oloruntoba',
    occupation: 'Project manager',
    image: two,
  },
  {
    Id: 3,
    message: 'Finowise has lots of potentials and deliver quality service too',
    name: 'Enoch Orji',
    occupation: 'Data analyst',
    image: three,
  },
  {
    Id: 4,
    message: 'Finowise understands users needs and offers good solutions',
    name: 'Zainab Abu-Bakr',
    occupation: 'Product designer',
    image: four,
  },
];

type variantProps = {
  variant: 'home' | 'other';
};

const TransfromYourBankingJourney = ({ variant }: variantProps) => {
  const [count, setCount] = useState(1);

  const handleCarousel = (mode: 'previous' | 'next') => {
    if (mode === 'next') {
      if (count + 1 === testimonials.length) {
        setCount(1);
      } else {
        setCount((prevCount) => prevCount + 2);
      }
    } else {
      if (count === 1) {
        setCount(testimonials.length - 1);
      } else {
        setCount((prevCount) => prevCount - 2);
      }
    }
  };

  return (
    <section className="py-14">
      <div className="mb-6 space-y-2 lg:mb-12 lg:space-y-4">
        <Heading2 className="text-center">
          Transform your banking journey
        </Heading2>

        {variant === 'home' && (
          <Heading2Description>
            We design our services with simplicity in mind, ensuring that users
            can navigate and utilize our platform with ease
          </Heading2Description>
        )}
        {variant === 'other' && (
          <Paragraph className="mx-auto max-w-3xl pt-3 text-center">
            We design our services with simplicity in mind, ensuring that users
            can navigate and utilize our platform with ease
          </Paragraph>
        )}
      </div>
      {/* ---------CAROUSEL---------- */}
      {/* ------- CLIENT ONE -------- */}
      <LayoutGrid2 className="aspect-[1/2] items-stretch gap-6 md:aspect-[2/0.75] md:grid-cols-2">
        <div className="mx-auto flex w-full max-w-[358px] flex-col justify-between space-y-6 rounded-[24px] bg-gradient-to-b from-fino-green-80 via-fino-green-80/20 to-white px-2 py-6 md:max-w-[589px]">
          <Heading3 className="pl-[calc(25%+24px)] pr-6 text-2xl text-black lg:mt-12 lg:text-3xl lg:italic lg:leading-[38px] xl:text-3xl">{`"${testimonials[count - 1].message}"`}</Heading3>
          <div className="flex items-center space-x-6">
            <div className="w-1/4">
              <img
                src={testimonials[count - 1].image}
                alt={testimonials[count - 1].name}
                className="w-full"
              />
            </div>
            <div className="">
              <p className="font-Urbanist text-sm font-bold lg:text-2xl">
                {testimonials[count - 1].name}
              </p>
              <p className="font-Urbanist text-sm lg:text-xl">
                {testimonials[count - 1].occupation}
              </p>
            </div>
          </div>
        </div>

        {/* ------- CLIENT TWO ------- */}

        <div className="mx-auto flex w-full max-w-[358px] flex-col justify-between space-y-6  rounded-[24px] bg-gradient-to-b from-fino-green-80 via-fino-green-80/20 to-white px-2 py-6 md:max-w-[589px]">
          <Heading3 className="pl-[calc(25%+24px)] pr-6 text-2xl text-black lg:mt-12 lg:text-3xl lg:italic lg:leading-[38px] xl:text-3xl">{`"${testimonials[count].message}"`}</Heading3>
          <div className="flex items-center space-x-6">
            <div className="w-1/4">
              <img
                src={testimonials[count].image}
                alt={testimonials[count].name}
                className="w-full"
              />
            </div>
            <div className="">
              <p className="font-Urbanist text-sm font-bold lg:text-2xl">
                {testimonials[count].name}
              </p>
              <p className="font-Urbanist text-sm lg:text-xl">
                {testimonials[count].occupation}
              </p>
            </div>
          </div>
        </div>
      </LayoutGrid2>

      <div className=" mx-auto flex w-full max-w-[358px] items-center justify-between md:max-w-full">
        {/* ------DOTS-------- */}

        <div className="flex space-x-1">
          <div
            className={`aspect-square w-4 rounded-full ${count - 1 === 0 ? 'bg-fino-green-100' : 'bg-fino-green-70/25'}`}
          ></div>
          <div
            className={`aspect-square w-4 rounded-full ${count - 1 !== 0 ? 'bg-fino-green-100' : 'bg-fino-green-70/25'}`}
          ></div>
        </div>
        {/* ------NAVIGATION CONTROLS-------- */}

        <div className="flex items-center space-x-2">
          <div
            className={`grid aspect-square w-10 place-content-center rounded-full hover:bg-fino-green-100/50 ${count + 1 === testimonials.length ? 'bg-fino-green-100' : 'bg-fino-green-80'}`}
            onClick={() => handleCarousel('previous')}
          >
            <ChevronLeft size="32" />
          </div>
          <div
            className={`grid aspect-square w-10 place-content-center rounded-full hover:bg-fino-green-100/50  ${count + 1 === testimonials.length ? 'bg-fino-green-80' : 'bg-fino-green-100'}`}
            onClick={() => handleCarousel('next')}
          >
            <ChevronRight size="32" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransfromYourBankingJourney;
