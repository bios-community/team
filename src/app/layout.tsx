import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";

const manrope = Manrope({
    display: "swap",
    subsets: ["latin"],
    variable: "--font-manrope",
});

export const metadata: Metadata = {
    title: "BIO-S Community • Join the crew",
    description:
        "BIO-S is an open source, student led community based in Nashik. We foster community culture and help folks get started in their tech journeys.",
    metadataBase: new URL("https://bios-team.vercel.app"),
    openGraph: {
        title: "BIO-S Community • Join the crew",
        description:
            "BIO-S is an open source, student led community based in Nashik. We foster community culture and help folks get started in their tech journeys.",
        url: "https://bios-team.vercel.app",
        siteName: "BIO-S Community • Join the crew",
        images: {
            url: "/opengraph-image.png",
            width: 1920,
            height: 960,
            alt: "BIO-S: Where open source enthusiasts unite, learn and build together.",
        },
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <body className={`${manrope.className} tracking-wide`}>
                <ThemeProvider
                    attribute='class'
                    defaultTheme='system'
                    enableSystem
                    disableTransitionOnChange
                >
                    <Navbar className='view-container' />
                    {children}
                </ThemeProvider>
                <Analytics />
            </body>
        </html>
    );
}
