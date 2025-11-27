import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { ModeToggle } from "@/components/mode-toggle";
import { LanguageProvider } from "@/components/language-provider";
import { LanguageToggle } from "@/components/language-toggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "João Villaça | Portfolio",
  description: "My Portfolio by João Villaça",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <SidebarProvider>
              <AppSidebar />
              <main className="w-full">
                <div className="flex items-center justify-between p-4 border-b">
                  <SidebarTrigger />
                  <div className="flex items-center gap-2">
                    <LanguageToggle />
                    <ModeToggle />
                  </div>
                </div>
                {children}
              </main>
            </SidebarProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
