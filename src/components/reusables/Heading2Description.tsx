import { Heading2DescriptionProps } from '@/types';
import { cn } from '@/lib/utils';

const Heading2Description = ({ className, text }: Heading2DescriptionProps) => {
  return (
    <p
      className={cn(
        'text-center font-Urbanist text-base font-normal tracking-[0.1%] text-gray-400 md:text-xl xl:text-2xl',
        className,
      )}
    >
      {text}
    </p>
  );
};

export default Heading2Description;
