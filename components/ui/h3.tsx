import { DetailedHTMLProps, HTMLAttributes } from "react";

const H3: React.FC<
  DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>
> = ({ children, className, style }) => {
  return (
    <h3
      style={style}
      className={`scroll-m-20 text-xl font-bold tracking-tight lg:text-2xl text-white ${className}`}
    >
      {children}
    </h3>
  );
};

export default H3;
