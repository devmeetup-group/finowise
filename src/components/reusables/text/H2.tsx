import { cn } from '@/lib/utils';
import { ElementProps } from '@/types/landing_and_heading_types';

const H2 = ({ children, className = '' }: ElementProps) => {
  return (
    <h2
      className={cn(
        className,
        ' font-Urbanist text-4xl font-medium leading-none md:text-[3.125rem] ',
      )}
    >
      {children}
    </h2>
  );
};

export default H2;
