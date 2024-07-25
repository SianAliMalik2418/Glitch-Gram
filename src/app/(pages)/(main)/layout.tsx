import MenuBar from "@/components/Sidebars/MenuBar";
import Navbar from "@/components/Navbar/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col  items-center ">
      <Navbar />
      <div className="mx-auto flex min-h-screen w-full max-w-[75rem]  ">
        <MenuBar className="sticky top-[7rem] ml-5 hidden h-fit space-y-5 rounded-xl border-r bg-card px-10 py-7 text-lg shadow-lg sm:block   " />
        {children}
      </div>
      <MenuBar className="sticky bottom-0 flex h-fit items-center justify-start gap-5 border-r bg-card px-5 py-7 text-lg shadow-sm sm:hidden" />
    </div>
  );
}
