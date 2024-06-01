import { ElementProps } from '@/types/landing_and_heading_types';
import { cn } from '@/lib/utils';

const HeadingOne = ({ className = '', children }: ElementProps) => {
  return (
    <h2
      className={cn(
        `font-Urbanist text-4xl font-medium text-black md:text-5xl lg:text-6xl`,
        className,
      )}
    >
      {children}
    </h2>
  );
};

export default HeadingOne;
