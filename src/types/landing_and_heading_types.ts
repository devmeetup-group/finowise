export type SubscriptionProps = {
  inputClassName: string;
  btnContainerClassName: string;
  className: string;
};

export type Heading3Props = {
  className: string;
  heading: string;
  variant?: 'small' | 'default';
};

export type Heading2DescriptionProps = {
  className: string;
  text: string;
};

export type Heading2Props = {
  className: string;
  heading: string;
};

export type NavProps = {
  setShowNav: (show: boolean) => void;
};
