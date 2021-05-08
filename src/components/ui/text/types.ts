export interface TextProps {
  as: keyof JSX.IntrinsicElements;
  className?: string;
  children?: JSX.Element | JSX.Element[] | string | Element;
}
