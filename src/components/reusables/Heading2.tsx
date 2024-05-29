import { ElementProps } from '@/types/landing_and_heading_types';
import { cn } from '@/lib/utils';

const Heading2 = ({ className = '', children }: ElementProps) => {
  return (
    <h2
      className={cn(
        `leading-40 text-left font-Urbanist text-4xl font-medium text-black lg:text-4xl lg:leading-[60px] xl:text-5xl`,
        className,
      )}
    >
      {children}
    </h2>
  );
};

export default Heading2;
