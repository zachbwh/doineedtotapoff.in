const H1: React.FC<{ children: string }> = ({ children }) => {
  return (
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-white">
      {children}
    </h1>
  );
};

export default H1;
