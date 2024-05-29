import { cn } from '@/lib/utils';
import { ElementProps } from '@/types/landing_and_heading_types';
import React from 'react';

function BoldText({ children, className = '' }: ElementProps) {
  return (
    <p
      className={cn(
        className,
        'font-Urbanist text-2xl font-semibold md:text-3xl',
      )}
    >
      {children}
    </p>
  );
}

export default BoldText;
