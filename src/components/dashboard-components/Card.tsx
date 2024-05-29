import { cn } from '@/lib/utils';
import { ElementProps } from '@/types/landing_and_heading_types';

function Card({ children, className = '' }: ElementProps) {
  return (
    <div className={cn(className, ' w-full rounded-lg  md:max-w-64 ')}>
      {children}
    </div>
  );
}

export default Card;
