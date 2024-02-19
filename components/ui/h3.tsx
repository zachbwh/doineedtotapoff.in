import { DetailedHTMLProps, HTMLAttributes } from "react";

const H3: React.FC<
  DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>
> = ({ children, className }) => {
  return (
    <h3
      className={`scroll-m-20 text-xl font-bold tracking-tight lg:text-2xl text-white ${className}`}
    >
      {children}
    </h3>
  );
};

export default H3;
