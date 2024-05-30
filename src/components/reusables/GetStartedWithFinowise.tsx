import { FC } from 'react';
import Heading2 from '../reusables/Heading2';
import Heading2Description from '../reusables/Heading2Description';
import { Button } from '../ui/button';

const GetStartedWithFinowise = () => {
  return (
    <section className=" to-green relative -left-4 w-screen space-y-16 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-800 via-black/95 to-black  px-6 my-14 pb-28  pt-20 md:-left-12 md:px-12 xl:-left-[120px] xl:px-[120px]">
      <div className="h-full w-1/3"></div>
      <div className="mb-6 flex flex-col space-y-2 lg:mb-12 lg:space-y-4">
        <Heading2 className="text-center text-white">
          Get started with Finowise
        </Heading2>
        <Heading2Description className="text-center text-white">
          Embrace strategic financial transactions with Finowise today
        </Heading2Description>
      </div>
      <div className="flex justify-center space-x-6">
        <Button
          size="default"
          variant="outline"
          className="border-white bg-transparent text-white"
        >
          Login
        </Button>
        <Button variant="default" size="default">
          Create free account
        </Button>
      </div>
    </section>
  );
};

export default GetStartedWithFinowise;
