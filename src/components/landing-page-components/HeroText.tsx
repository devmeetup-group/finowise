import { FC } from 'react';

const HeroText: FC = () => {
  return (
    <div className="space flex flex-col space-y-4 lg:space-y-10 max-w-xl lg:max-w-3xl">
      <h1 className="font-TurretRoad text-[32px] font-bold lg:text-5xl 2xl:text-6xl">
        Simplify finances with
        <span className="text-fino-green-100">Finowise</span>{' '}
      </h1>
      <p className="text-md font-Urbanist lg:text-2xl">
        Finowise promises to provide you with intuitive, quality secure
        financial solutions you deserve
      </p>
    </div>
  );
};

export default HeroText;
