export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="-mt-8 flex w-full">{children}</div>;
}
