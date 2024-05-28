export type SubscriptionProps = {
  inputClassName?: string | undefined;
  btnContainerClassName?: string | undefined;
  className?: string  | undefined;
};

export type Heading3Props = {
  className?: string | undefined;
  heading: string;
  variant?: 'small' | 'default';
};

export type Heading2DescriptionProps = {
  className?: string  | undefined;
  text: string;
};

export type Heading2Props = {
  className?: string | undefined;
  heading: string;
};

export type NavProps = {
  setShowNav: (show: boolean) => void;
};
