import laptop from '../../assets/images/animation_components/landing/MacBook Pro 17.png';
import circle from '../../assets/images/animation_components/landing/circle.png';
const LetsHelpYouSetUpYourAccountImage = () => {
  return (
    <div className="relative hidden aspect-square h-[400px] w-3.5/5 lg:block">
      <img
        src={circle}
        alt='Laptop mockup of Finowise dashboard'
        className="absolute top-1/2 w-[490px] -translate-y-1/2"
      />
      <img
        src={laptop}
        alt="Laptop mockup of Finowise dashboard"
        className="absolute left-[49%] top-1/2 w-[500px] -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  );
};

export default LetsHelpYouSetUpYourAccountImage;
