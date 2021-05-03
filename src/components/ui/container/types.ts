export interface ContainerProps {
  children: JSX.Element | JSX.Element[];
  as?: keyof JSX.IntrinsicElements;
  className?: string;
}
