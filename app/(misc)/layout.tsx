export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen p-4 md:p-20 text-white m-auto max-w-screen-lg">
      {children}
    </div>
  );
}
