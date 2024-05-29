import { cn } from '@/lib/utils';
import { ElementProps } from '@/types/landing_and_heading_types';

function LayoutGrid2({ children, className = '' }: ElementProps) {
  return (
    <div className={cn('grid gap-12 md:grid-cols-2', className)}>
      {children}
    </div>
  );
}

export default LayoutGrid2;
