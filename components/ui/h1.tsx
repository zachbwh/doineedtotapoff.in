import { DetailedHTMLProps, HTMLAttributes } from "react";

const H1: React.FC<
  DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>
> = ({ children, className, style }) => {
  return (
    <h1
      style={style}
      className={`scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-white ${className}`}
    >
      {children}
    </h1>
  );
};

export default H1;
