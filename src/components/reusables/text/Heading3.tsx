import { Heading3Props } from '@/types/landing_and_heading_types';
import { cn } from '@/lib/utils';

const Heading3 = ({
  className = '',
  children,
  variant = 'default',
}: Heading3Props) => {
  const variantStyles =
    variant === 'default' ? 'text-2xl lg:text-4xl xl:text-4xl lg:font-normal ' : '';
  return (
    <h3
      className={cn(
        'font-Urbanist text-xl font-semibold text-white lg:text-2xl xl:text-3xl',
        variantStyles,
        className,
      )}
    >
      {children}
    </h3>
  );
};

export default Heading3;
