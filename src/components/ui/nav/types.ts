export interface UlProps {
  children: JSX.Element | JSX.Element[] | string;
  className?: string;
  as: keyof JSX.IntrinsicElements | any;
  to?: string;
  activeClassName?: string;
}
