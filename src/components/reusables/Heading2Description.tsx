import { ElementProps } from '@/types/landing_and_heading_types';
import { cn } from '@/lib/utils';

const Heading2Description = ({ className = '', children }: ElementProps) => {
  return (
    <p
      className={cn(
        'text-center font-Urbanist text-xl font-normal tracking-[0.1%] text-gray-400 md:text-2xl',
        className,
      )}
    >
      {children}
    </p>
  );
};

export default Heading2Description;
