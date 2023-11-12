import type { Metadata } from "next";

import "@mantine/core/styles.css";

import { MantineProvider, ColorSchemeScript, Container } from "@mantine/core";

import localFont from "next/font/local";
import { HeaderMenu } from "@/components/layout/HeaderMenu";

export const fontItaliana = localFont({
  src: "../font/italiana-Regular.ttf",
  display: "swap",
});

export const fontHailey = localFont({
  src: "../font/hailey.ttf",
  display: "swap",
});

export const fontRoboto = localFont({
  src: [
    {
      path: "../font/Roboto-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../font/Roboto-ThinItalic.ttf",
      weight: "100",
      style: "italic",
    },
    { path: "../font/Roboto-Light.ttf", weight: "300", style: "normal" },
    {
      path: "../font/Roboto-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    { path: "../font/Roboto-Regular.ttf", weight: "400", style: "normal" },
    { path: "../font/Roboto-Medium.ttf", weight: "500", style: "normal" },
    {
      path: "../font/Roboto-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    { path: "../font/Roboto-Bold.ttf", weight: "700", style: "normal" },
    {
      path: "../font/Roboto-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    { path: "../font/Roboto-Black.ttf", weight: "900", style: "normal" },
    {
      path: "../font/Roboto-BlackItalic.ttf",
      weight: "900",
      style: "italic",
    },
  ],
  display: "swap",
});

// export const metadata: Metadata = {
//   title: "Deyse & Matheus - Casamento",
//   description: "",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body style={{ background: "#f5f5f5" }}>
        <MantineProvider
          theme={{
            fontFamily: fontRoboto.style.fontFamily,

            fontFamilyMonospace: fontRoboto.style.fontFamily,

            headings: { fontFamily: fontRoboto.style.fontFamily },
          }}
        >
          <HeaderMenu />

          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
