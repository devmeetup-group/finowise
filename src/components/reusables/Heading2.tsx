import { ElementProps } from '@/types/landing_and_heading_types';
import { cn } from '@/lib/utils';

const Heading2 = ({ className = '', children }: ElementProps) => {
  return (
    <h2
      className={cn(
        `leading-40 font-Urbanist text-4xl font-medium lg:text-[3.125rem] lg:leading-[60px]`,
        className,
      )}
    >
      {children}
    </h2>
  );
};

export default Heading2;
