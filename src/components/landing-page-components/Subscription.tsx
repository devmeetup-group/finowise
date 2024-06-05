import { SubscriptionProps } from '@/types/landing_and_heading_types';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';

const Subscription = ({
  inputClassName = '',
  btnContainerClassName = '',
  className = '',
}: SubscriptionProps) => {
  // TODO: CREATE LOGIC FOR SUBSCRIPTION
  return (
    <div>
      <div
        className={cn(
          'relative w-full',
          className,
        )}
      >
        {/* TODO: INPUT AND VALIDATION */}
        <input
          type="text"
          className={cn(
            'h-16 w-full rounded-2xl border border-gray-300 pl-4 text-base placeholder:text-base lg:placeholder:text-sm lg:h-14',
            inputClassName,
          )}
          placeholder="johndoe@email.com|"
        />
        <div className={cn('absolute right-0 top-0', btnContainerClassName)}>
          <Button variant="default" size='default'>
            Subscribe
          </Button>
        </div>
      </div>
      {/* ---- ERROR MESSAGE --- */}
    </div>
  );
};

export default Subscription;
