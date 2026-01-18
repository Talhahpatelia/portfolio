import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import { ThemeProvider } from "@/components/ThemeProvider";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className="min-h-screen bg-[var(--bg-page)] text-[var(--text-primary)] antialiased transition-colors duration-200">
                <ThemeProvider>
                    <SiteHeader />
                    <div className="mx-auto w-full max-w-6xl px-6 py-10">
                        {children}
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
