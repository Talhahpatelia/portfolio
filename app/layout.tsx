import "./globals.css";
import type { Metadata } from "next";
import { Suspense } from "react";
import { Analytics } from "@vercel/analytics/react";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import SiteHeader from "@/components/SiteHeader";
import { ThemeProvider } from "@/components/ThemeProvider";
import { education } from "@/data/education";
import { currentWork, siteConfig } from "@/data/profile";
import { defaultOgImage } from "@/lib/seo";

export const metadata: Metadata = {
    metadataBase: new URL(siteConfig.url),
    title: {
        default: siteConfig.title,
        template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    keywords: siteConfig.keywords,
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    creator: siteConfig.name,
    alternates: {
        canonical: siteConfig.url,
        types: {
            "application/rss+xml": `${siteConfig.url}/rss.xml`,
        },
    },
    openGraph: {
        type: "website",
        locale: "en_ZA",
        url: siteConfig.url,
        siteName: siteConfig.name,
        title: siteConfig.title,
        description: siteConfig.description,
        images: [defaultOgImage],
    },
    twitter: {
        card: "summary_large_image",
        title: siteConfig.title,
        description: siteConfig.description,
        images: [defaultOgImage.url],
    },
    icons: {
        icon: [
            { url: "/icon.svg", type: "image/svg+xml" },
            { url: "/favicon.ico" },
        ],
        apple: [{ url: "/apple-icon.svg", type: "image/svg+xml" }],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
        },
    },
    category: "technology",
};

const jsonLd = [
    {
        "@context": "https://schema.org",
        "@type": "Person",
        "@id": `${siteConfig.url}#person`,
        name: siteConfig.name,
        url: siteConfig.url,
        image: defaultOgImage.url,
        email: siteConfig.email,
        jobTitle: siteConfig.role,
        address: {
            "@type": "PostalAddress",
            addressLocality: "Johannesburg",
            addressCountry: "ZA",
        },
        sameAs: siteConfig.sameAs,
        knowsAbout: siteConfig.keywords.slice(1),
        affiliation: education
            .filter((item) => item.institution === "University of the Witwatersrand")
            .map((item) => ({
                "@type": "CollegeOrUniversity",
                name: item.institution,
                description: item.credential,
            })),
        alumniOf: education
            .filter((item) => item.institution !== "University of the Witwatersrand")
            .map((item) => ({
                "@type": "EducationalOrganization",
                name: item.institution,
            })),
        worksFor: currentWork.map((work) => ({
            "@type": "Organization",
            name: work.name,
            url: work.href,
        })),
    },
    {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": `${siteConfig.url}#website`,
        name: siteConfig.name,
        url: siteConfig.url,
        description: siteConfig.description,
        inLanguage: "en-ZA",
        publisher: {
            "@type": "Person",
            "@id": `${siteConfig.url}#person`,
            name: siteConfig.name,
        },
    },
];

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
            <body className={`${GeistSans.className} min-h-screen bg-[var(--bg-page)] text-[var(--text-primary)] antialiased transition-colors duration-200`}>
                <ThemeProvider>
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                    />
                    <Suspense fallback={null}>
                        <SiteHeader />
                    </Suspense>
                    <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
                        {children}
                    </div>
                    <Analytics />
                </ThemeProvider>
            </body>
        </html>
    );
}
