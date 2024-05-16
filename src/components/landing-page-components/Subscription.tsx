import React, { FC } from 'react'
import { Button } from '../ui/button';

const Subscription:FC = () => {
    // TODO: CREATE LOGIC FOR SUBSCRIPTION
  return (
    <div>
      <div className="relative flex items-center justify-between max-w-xl lg:max-w-2xl">
        {/* TODO: USE SHADCN FOR THE INPUT AND VALIDATION */}
        <input
          type="text"
          className=" h-14 w-full rounded-2xl border border-gray-300 pl-6 text-base placeholder:text-base lg:placeholder:text-md"
          placeholder="JohnDoe@email.com"
        />
        <div className="absolute right-0">
          <Button variant="default" size="default">
            Subscribe
          </Button>
        </div>
      </div>
      {/* ---- ERROR MESSAGE --- */}
    </div>
  );
}

export default Subscription
