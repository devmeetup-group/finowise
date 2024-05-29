import React from 'react';
import { LayoutGrid2 } from '../reusables';
import { Button } from '../ui/button';
import dashboardImg from '../../assets/images/dashboard/dashboard-hero.png';

function Hero() {
  return (
    <div className="my-10 py-10 md:my-24">
      <LayoutGrid2>
        <section>
          <h1 className="font-Urbanist text-4xl font-medium text-black md:text-6xl ">
            Own your account with your dashboard
          </h1>
          <p className="my-4  font-Urbanist  text-base text-black md:my-14 md:text-2xl">
            The dashboard guarantees full access to your account and enables you
            track your activities and transactions as they occur.{' '}
          </p>
          <Button
            variant={'secondary'}
            size={'lg'}
            className=" font-semibold capitalize"
          >
            log in
          </Button>
        </section>
        <div>
          <div className="flex items-center justify-center  md:block">
            <img src={dashboardImg} alt="" />
          </div>
        </div>
      </LayoutGrid2>
    </div>
  );
}

export default Hero;
