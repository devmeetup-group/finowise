import { FC } from 'react';
import circle from '../../assets/images/animation_components/fill circle.png';
import mockup from '../../assets/images/animation_components/imac24inch(optimized).png';
import circleRing from '../../assets/images/animation_components/stroke circle.png';

const HeroImage: FC = () => {
  return (
    <div className="absolute right-0 aspect-[1/1] w-10/12 max-w-[350px] 2xl:max-w-[500px] top-1/2 -translate-y-1/2">
      <img
        src={circle}
        alt=""
        className="-translate-x-1/2 absolute left-1/2 top-1/2 w-[90%] -translate-y-1/2"
      />
      <img
        src={circleRing}
        alt=""
        className="-translate-x-1/2 absolute left-1/2 right-0 top-1/2 w-[100%] -translate-y-1/2"
      />
      <img
        src={mockup}
        alt="mockup"
        className="-translate-x-1/2 absolute left-1/2 right-0 top-1/2 w-[80%] -translate-y-1/2"
      />
    </div>
  );
};

export default HeroImage;
