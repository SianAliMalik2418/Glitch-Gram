import MenuBar from "@/components/Sidebars/MenuBar";
import Navbar from "@/components/Navbar/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col ">
      <Navbar />
      <div className="mx-auto flex min-h-screen w-full  sm:max-w-[75rem] ">
        <MenuBar className="sticky top-[7rem] ml-5 hidden h-fit space-y-5 rounded-xl border-r bg-card px-10 py-7 text-lg shadow-lg lg:block" />
        {children}
      </div>
      <MenuBar className="sticky bottom-0 flex h-fit w-full items-center justify-center gap-5 border-r bg-card px-5 py-7 text-lg shadow-sm lg:hidden" />
    </div>
  );
}
