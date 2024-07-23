import Navbar from "@/components/Navbar/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="mx-auto min-h-screen w-full max-w-6xl px-5">
        {children}
      </div>
    </div>
  );
}
