import finowiseLogo from '../assets/images/finowise_logo.svg';

const Logo = () => {
  return (
    <div className="flex h-[58px] w-[158px] items-center space-x-2">
      <img src={finowiseLogo} alt="finowise" className="w-8" />
      <p className="font-Urbanist text-[30px] font-bold text-black ">
        finowise
      </p>
    </div>
  );
};

export default Logo;
