import circle from '../../assets/images/animation_components/landing/fill circle.png';
import mockup from '../../assets/images/animation_components/landing/imac24inch(optimized).png';
import circleRing from '../../assets/images/animation_components/landing/stroke circle.png';

const HeroImage = () => {
  return (
    <div className="absolute right-0 top-1/2 aspect-[1/1] w-10/12 max-w-[450px] -translate-y-1/2 2xl:max-w-[500px]">
      <img
        src={circle}
        alt=""
        className="absolute left-1/2 top-1/2 w-[90%] -translate-x-1/2 -translate-y-1/2"
      />
      <img
        src={circleRing}
        alt=""
        className="absolute left-1/2 right-0 top-1/2 w-[100%] -translate-x-1/2 -translate-y-1/2"
      />
      <img
        src={mockup}
        alt="mockup"
        className="absolute left-1/2 right-0 top-1/2 w-[80%] -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  );
};

export default HeroImage;
