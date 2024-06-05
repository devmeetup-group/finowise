import { cn } from '@/lib/utils';
import { ElementProps } from '@/types/landing_and_heading_types';

const Paragraph = ({ children, className = '' }: ElementProps) => {
  return (
    <p
      className={cn(
        'font-Urbanist text-base leading-5 md:text-xl lg:leading-9 xl:text-2xl',
        className,
      )}
    >
      {children}
    </p>
  );
};

export default Paragraph;
