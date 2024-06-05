import React from 'react';

export type SubscriptionProps = {
  inputClassName?: string | undefined;
  btnContainerClassName?: string | undefined;
  className?: string | undefined;
};

export type ElementProps = {
  className?: string | undefined;
  children: React.ReactNode;
};

export type Heading3Props = {
  className?: string | undefined;
  children: React.ReactNode;
  variant?: 'small' | 'default';
};

export type NavProps = {
  setShowNav: (show: boolean) => void;
};
