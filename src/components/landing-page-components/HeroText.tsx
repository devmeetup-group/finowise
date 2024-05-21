const HeroText = () => {
  return (
    <div className="space flex max-w-md flex-col space-y-4 pb-4 lg:max-w-3xl lg:space-y-10 xl:space-y-12">
      <h1 className="font-TurretRoad text-[32px] font-bold leading-8 md:text-5xl lg:leading-[62.3px] 2xl:text-6xl">
        Simplify finances with{' '}
        <span className="text-fino-green-100">Finowise</span>{' '}
      </h1>
      <p className="font-Urbanist text-sm leading-5 md:text-lg lg:text-2xl lg:leading-9">
        Finowise promises to provide you with intuitive, quality secure
        financial solutions you deserve
      </p>
    </div>
  );
};

export default HeroText;
