import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import NextTopLoader from "nextjs-toploader";
import { ThemeProvider } from "next-themes";
import SessionWrapper from "@/context/SessionWrapper";
import ReactQueryProvider from "@/context/ReactQueryProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "900"],
});

export const metadata: Metadata = {
  // Whatever we write in template with %s will be replaced by subpage title.
  title: {
    template: "%s | GlitchGram - A social media app",
    default: "GlitchGram - A social media app",
  },

  description: "A nextjs social media clone.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-background`}>
        <ReactQueryProvider>
          <SessionWrapper>
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem
              disableTransitionOnChange
            >
              <NextTopLoader color="blue" />

              {children}
              <Toaster richColors />
            </ThemeProvider>
          </SessionWrapper>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
