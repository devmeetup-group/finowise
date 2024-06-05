import Paragraph from "../reusables/text/Paragraph";

const HeroText = () => {
  return (
    <div className="max-w-md pb-4 lg:max-w-3xl xl:space-y-12">
      <h1 className="font-TurretRoad text-[32px] font-bold leading-8 md:text-5xl lg:leading-[62.3px] xl:text-6xl">
        Simplify finances with{' '}
        <span className="text-fino-green-100">Finowise</span>{' '}
      </h1>
      <Paragraph className="mt-4 lg:mt-8">
        Finowise promises to provide you with intuitive, quality secure
        financial solutions you deserve
      </Paragraph>
    </div>
  );
};

export default HeroText;
