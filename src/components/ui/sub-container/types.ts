export interface SubContainerProps {
  children: JSX.Element | JSX.Element[];
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}
