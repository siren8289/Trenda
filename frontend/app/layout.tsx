import "../src/index.css";
import type { ReactNode } from "react";
import { GoogleTagManager } from "@next/third-parties/google";

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

  return (
    <html lang="ko">
      <body>{children}</body>

      {gtmId ? <GoogleTagManager gtmId={gtmId} /> : null}
    </html>
  );
}