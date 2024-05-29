import { Heading3Props } from '@/types/landing_and_heading_types';
import { cn } from '@/lib/utils';

const Heading3 = ({
  className = '',
  children,
  variant = 'default',
}: Heading3Props) => {
  const variantStyles =
    variant === 'default'
      ? 'md:text-xl lg:text-3xl lg:leading-[60px] lg:font-normal xl:text-4xl'
      : '';
  return (
    <h3
      className={cn(
        'font-Urbanist text-xl font-semibold text-white lg:text-3xl',
        variantStyles,
        className,
      )}
    >
      {children}
    </h3>
  );
};

export default Heading3;
