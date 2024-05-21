import { SubscriptionProps } from '@/types';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';

const Subscription = ({
  inputClassName,
  btnContainerClassName,
  className,
}: SubscriptionProps) => {
  // TODO: CREATE LOGIC FOR SUBSCRIPTION
  return (
    <div>
      <div
        className={cn(
          'relative flex max-w-lg items-center justify-between md:w-2/3 lg:w-full',
          className,
        )}
      >
        {/* TODO: INPUT AND VALIDATION */}
        <input
          type="text"
          className={cn(
            'h-14 w-full rounded-2xl border border-gray-300 pl-2 text-base placeholder:text-base lg:placeholder:text-sm',
            inputClassName,
          )}
          placeholder="johndoe@email.com|"
        />
        <div className={cn('absolute right-0', btnContainerClassName)}>
          <Button variant="default" size="default">
            Subscribe
          </Button>
        </div>
      </div>
      {/* ---- ERROR MESSAGE --- */}
    </div>
  );
};

export default Subscription;
