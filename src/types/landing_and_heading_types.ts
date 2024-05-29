import React from 'react';

export type SubscriptionProps = {
  inputClassName?: string | undefined;
  btnContainerClassName?: string | undefined;
  className?: string | undefined;
};

// change this from heading: string to children props because using children props makes code look simple and more readiable than passing text props ----- imagine the text has 30 lines then the component rendered will become unreadable 
//NOTE: ----  delete this after reading  
export type ElementProps = {
  className?: string | undefined;
  children: React.ReactNode;
};

export type Heading3Props = {
  className?: string | undefined;
  children: React.ReactNode;
  variant?: 'small' | 'default';
};

export type Heading2DescriptionProps = {
  className?: string | undefined;
  text: string;
};

export type NavProps = {
  setShowNav: (show: boolean) => void;
};
