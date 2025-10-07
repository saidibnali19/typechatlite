import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
    title: "TypeChatLite",
    description: "",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="text-lg text-gray-800">
                <main>{children}</main>
            </body>
        </html>
    );
}
