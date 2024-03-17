import { DetailedHTMLProps, HTMLAttributes } from "react";

const H2: React.FC<
  DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>
> = ({ children, className, style }) => {
  return (
    <h2
      style={style}
      className={`scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl text-white ${className}`}
    >
      {children}
    </h2>
  );
};

export default H2;
